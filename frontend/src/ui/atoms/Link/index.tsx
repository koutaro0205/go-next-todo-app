import NextLink, { LinkProps } from 'next/link';
import React from 'react';

type Props = {
  children: React.ReactNode;
  isExternal?: boolean;
  className?: string;
} & Omit<LinkProps, 'target'>;

export const Link: React.FC<Props> = React.memo(
  ({ children, href, isExternal = false, className, ...restProps }) => {
    return (
      <NextLink
        {...restProps}
        className={className}
        href={href}
        target={isExternal ? '_blank' : '_self'}
      >
        {children}
      </NextLink>
    );
  },
);
