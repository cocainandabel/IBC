INSERT INTO clients (name, slug)
VALUES
  ('Nebula Chain', 'nebula-chain'),
  ('Aether Finance', 'aether-finance')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO projects (client_id, name, slug, token_symbol, token_cmc_id, x_handle, chain_name)
SELECT id, 'Nebula Chain', 'nebula-chain', 'NBL', 1, '@NebulaChain', 'Ethereum L2'
FROM clients
WHERE slug = 'nebula-chain'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO projects (client_id, name, slug, token_symbol, token_cmc_id, x_handle, chain_name)
SELECT id, 'Aether Finance', 'aether-finance', 'ATH', 1027, '@AetherFinance', 'Ethereum'
FROM clients
WHERE slug = 'aether-finance'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO campaigns (project_id, slug, kol_handle, kol_post_url, kol_post_date, cost_usd, tokens_allocated)
SELECT p.id, 'nebula-defi-ninja', '@DefiNinja', 'https://x.com/DefiNinja/status/2100100101010', '2026-03-12', 14000, 220000
FROM projects p
WHERE p.slug = 'nebula-chain'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO campaigns (project_id, slug, kol_handle, kol_post_url, kol_post_date, cost_usd, tokens_allocated)
SELECT p.id, 'nebula-alpha-dao', '@AlphaDAO', 'https://x.com/AlphaDAO/status/2100100101022', '2026-02-25', 10200, 160000
FROM projects p
WHERE p.slug = 'nebula-chain'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO campaigns (project_id, slug, kol_handle, kol_post_url, kol_post_date, cost_usd, tokens_allocated)
SELECT p.id, 'aether-crypto-kate', '@CryptoKate', 'https://x.com/CryptoKate/status/2100100202020', '2026-03-05', 19000, 310000
FROM projects p
WHERE p.slug = 'aether-finance'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO campaign_snapshots (campaign_id, snapshot_date, followers_count, engagement_rate, token_price_usd)
SELECT c.id, d.snapshot_date, d.followers_count, d.engagement_rate, d.token_price_usd
FROM campaigns c
JOIN (
  VALUES
    ('nebula-defi-ninja', '2026-03-07'::date, 118400, 2.64, 0.082),
    ('nebula-defi-ninja', '2026-03-08'::date, 118950, 2.71, 0.081),
    ('nebula-defi-ninja', '2026-03-09'::date, 119520, 2.78, 0.083),
    ('nebula-defi-ninja', '2026-03-10'::date, 120030, 2.82, 0.084),
    ('nebula-defi-ninja', '2026-03-11'::date, 120410, 2.90, 0.086),
    ('nebula-defi-ninja', '2026-03-12'::date, 123800, 3.16, 0.092),
    ('nebula-defi-ninja', '2026-03-13'::date, 127450, 3.50, 0.099),
    ('nebula-defi-ninja', '2026-03-14'::date, 132200, 3.88, 0.105),
    ('nebula-defi-ninja', '2026-03-15'::date, 137860, 4.02, 0.111),
    ('nebula-defi-ninja', '2026-03-16'::date, 141440, 4.11, 0.116),
    ('nebula-defi-ninja', '2026-03-17'::date, 142110, 4.05, 0.114),
    ('nebula-alpha-dao', '2026-02-20'::date, 108100, 2.20, 0.072),
    ('nebula-alpha-dao', '2026-02-21'::date, 108340, 2.24, 0.073),
    ('nebula-alpha-dao', '2026-02-22'::date, 108900, 2.19, 0.071),
    ('nebula-alpha-dao', '2026-02-23'::date, 109210, 2.30, 0.072),
    ('nebula-alpha-dao', '2026-02-24'::date, 109650, 2.35, 0.073),
    ('nebula-alpha-dao', '2026-02-25'::date, 112900, 2.94, 0.077),
    ('nebula-alpha-dao', '2026-02-26'::date, 115780, 3.18, 0.079),
    ('nebula-alpha-dao', '2026-02-27'::date, 117060, 3.24, 0.080),
    ('nebula-alpha-dao', '2026-02-28'::date, 117880, 3.16, 0.079),
    ('nebula-alpha-dao', '2026-03-01'::date, 118300, 3.10, 0.081),
    ('aether-crypto-kate', '2026-02-28'::date, 214500, 2.60, 1.46),
    ('aether-crypto-kate', '2026-03-01'::date, 215220, 2.64, 1.48),
    ('aether-crypto-kate', '2026-03-02'::date, 216050, 2.58, 1.45),
    ('aether-crypto-kate', '2026-03-03'::date, 216730, 2.62, 1.47),
    ('aether-crypto-kate', '2026-03-04'::date, 217100, 2.70, 1.49),
    ('aether-crypto-kate', '2026-03-05'::date, 221900, 3.06, 1.56),
    ('aether-crypto-kate', '2026-03-06'::date, 226300, 3.45, 1.61),
    ('aether-crypto-kate', '2026-03-07'::date, 231550, 3.66, 1.67),
    ('aether-crypto-kate', '2026-03-08'::date, 232910, 3.58, 1.65),
    ('aether-crypto-kate', '2026-03-09'::date, 236220, 3.70, 1.69)
) AS d(campaign_slug, snapshot_date, followers_count, engagement_rate, token_price_usd)
  ON c.slug = d.campaign_slug
ON CONFLICT (campaign_id, snapshot_date) DO NOTHING;

INSERT INTO campaign_posts (campaign_id, posted_at, text, likes, reposts, replies, impressions)
SELECT c.id, d.posted_at, d.text, d.likes, d.reposts, d.replies, d.impressions
FROM campaigns c
JOIN (
  VALUES
    ('nebula-defi-ninja', '2026-03-08'::date, 'How Nebula''s L2 batches slash gas costs for gaming apps.', 440, 99, 28, 21500),
    ('nebula-defi-ninja', '2026-03-10'::date, 'Thread: validator incentives and why staking APR is sustainable.', 520, 140, 33, 26800),
    ('nebula-defi-ninja', '2026-03-11'::date, 'Testnet milestone reached 1.3M transactions.', 670, 152, 41, 30100),
    ('nebula-defi-ninja', '2026-03-13'::date, 'Welcome new builders from @DefiNinja community. Grants are live.', 2600, 820, 170, 101500),
    ('nebula-defi-ninja', '2026-03-14'::date, 'NBL listed on additional market makers. Liquidity depth update.', 1980, 610, 111, 88500),
    ('nebula-defi-ninja', '2026-03-16'::date, 'Behind the scenes from our zk compression architecture review.', 1330, 352, 88, 69200),
    ('nebula-alpha-dao', '2026-02-21'::date, 'Launch checklist for Nebula validator node operators.', 390, 80, 20, 20000),
    ('nebula-alpha-dao', '2026-02-24'::date, 'Nebula dev update: mempool prioritization patch live.', 450, 90, 22, 21600),
    ('nebula-alpha-dao', '2026-02-26'::date, 'New users onboarding portal now supports 11 languages.', 1540, 423, 83, 71200),
    ('nebula-alpha-dao', '2026-02-27'::date, 'DAO snapshot vote open: cross-chain liquidity budget.', 1420, 402, 74, 64900),
    ('nebula-alpha-dao', '2026-03-01'::date, 'Builders call highlights and ecosystem grant winners.', 1290, 280, 59, 58800),
    ('aether-crypto-kate', '2026-03-01'::date, 'Borrow rates on Aether''s lending pools fell to Q1 lows.', 1200, 210, 63, 56000),
    ('aether-crypto-kate', '2026-03-04'::date, 'Protocol TVL passed $680M with stablecoin growth.', 1500, 302, 74, 70200),
    ('aether-crypto-kate', '2026-03-06'::date, 'Aether x @CryptoKate community challenge starts today.', 4020, 1050, 210, 144000),
    ('aether-crypto-kate', '2026-03-07'::date, 'New leveraged vaults released with improved risk controls.', 3560, 970, 198, 131500),
    ('aether-crypto-kate', '2026-03-08'::date, 'Aether governance forum: collateral expansion discussion.', 2980, 700, 153, 116400)
) AS d(campaign_slug, posted_at, text, likes, reposts, replies, impressions)
  ON c.slug = d.campaign_slug
ON CONFLICT DO NOTHING;
