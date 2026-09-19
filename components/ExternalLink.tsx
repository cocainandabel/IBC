import React from "react";

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function ExternalLink({ href, children, className, ...rest }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
