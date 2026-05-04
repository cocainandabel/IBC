--[[
Minimal Activity Script (Fixed)

Goals:
- Key tap every 2 seconds
- Mouse + scroll every 60 seconds
- Never trigger 5-min idle
- NO key taps in password managers, messengers
- Pause when user is active
]]

-------------------------------------------------
-- CONFIG
-------------------------------------------------
local CONFIG = {
    keyInterval = 2,      -- seconds
    mouseInterval = 60,   -- seconds
    idleSafety = 240,     -- force action before 5 min idle
    userYieldSec = 6,
    syntheticGuardSec = 0.25,
}

-------------------------------------------------
-- STATE
-------------------------------------------------
local function now()
    return hs.timer.secondsSinceEpoch()
end

local state = {
    lastKey = now(),
    lastMouse = now(),
    lastAction = now(),
    userQuietUntil = 0,
    syntheticUntil = 0,
}

-------------------------------------------------
-- APP BLOCKLIST (NO KEYS HERE)
-------------------------------------------------
local BAN_KEYS = {
    ["com.1password.1password"] = true,
    ["com.1password.1password7"] = true,
    ["org.keepassxc.KeePassXC"] = true,
    ["com.lastpass.LastPass"] = true,
    ["com.bitwarden.desktop"] = true,
    ["ru.keepcoder.Telegram"] = true,
    ["org.telegram.desktop"] = true,
    ["com.whatsapp"] = true,
}

local function frontAppBundle()
    local app = hs.application.frontmostApplication()
    return app and app:bundleID() or nil
end

local function allowKeys()
    local bid = frontAppBundle()
    if bid and BAN_KEYS[bid] then
        return false
    end
    if hs.eventtap.isSecureInputEnabled() then
        return false
    end
    return true
end

-------------------------------------------------
-- USER ACTIVITY GUARD
-------------------------------------------------
local function userIsActive()
    return hs.host.idleTime() < 1.5 or now() < state.userQuietUntil
end

local function onUserActivity()
    if now() < state.syntheticUntil then
        return false
    end
    state.userQuietUntil = now() + CONFIG.userYieldSec
    return false
end

-- Keep a strong reference so Lua GC does not reclaim the tap.
local activityTap = hs.eventtap.new({
    hs.eventtap.event.types.keyDown,
    hs.eventtap.event.types.mouseMoved,
    hs.eventtap.event.types.scrollWheel,
    hs.eventtap.event.types.leftMouseDown,
}, onUserActivity):start()

-------------------------------------------------
-- ACTIONS
-------------------------------------------------
local function markSynthetic()
    state.syntheticUntil = now() + CONFIG.syntheticGuardSec
end

local function doKey()
    if not allowKeys() then
        return false
    end
    markSynthetic()
    hs.eventtap.keyStroke({}, "right", 50000)
    return true
end

local function doMouse()
    local pos = hs.mouse.absolutePosition()
    markSynthetic()
    hs.mouse.absolutePosition({ x = pos.x + 1, y = pos.y })
    return true
end

local function doScroll()
    markSynthetic()
    hs.eventtap.scrollWheel({ 0, 1 }, {}, "line")
    return true
end

-------------------------------------------------
-- MAIN LOOP
-------------------------------------------------
-- Keep a strong reference so Lua GC does not reclaim the timer.
local mainTimer = hs.timer.new(1, function()
    if userIsActive() then
        return
    end

    local t = now()

    -- Keys every 2s
    if t - state.lastKey >= CONFIG.keyInterval then
        if doKey() then
            state.lastKey = t
            state.lastAction = t
        end
    end

    -- Mouse + scroll every 60s
    if t - state.lastMouse >= CONFIG.mouseInterval then
        local moved = doMouse()
        local scrolled = doScroll()
        if moved or scrolled then
            state.lastMouse = t
            state.lastAction = t
        end
    end

    -- Safety: never reach 5-min idle
    if t - state.lastAction >= CONFIG.idleSafety then
        if doMouse() then
            state.lastAction = t
        end
    end
end, true):start()

hs.alert.show("Minimal Activity Script Loaded", 1)

return {
    activityTap = activityTap,
    mainTimer = mainTimer,
}
