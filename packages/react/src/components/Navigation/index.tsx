import React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

import { Icon, iconPath } from '../Icon';
import { Skeleton } from '../Skeleton';
import { Stack } from '../Stack';
import { Box } from '../Box';
import { Tooltip } from '../Tooltip';
import { Shortcut } from '../Shortcut';
import { UserProfile } from '../UserProfile';

import * as S from './styles';

export type NavigationProps = {
  className?: string;
  user_name: string;
  user_email: string;
  user_imageURL?: string;
  showNavigation?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  userMenu: React.ReactNode;
  footer?: React.ReactNode;
  isNavigationOpen?: boolean;
  onNavigationOpenChange?: (isNavigationOpen: boolean) => void;
};

export type NavItemProps = {
  /** to render a wrapper to the a tag */
  as?: React.ElementType<unknown>;
  icon: keyof typeof iconPath;
  label: string;
  href: string;
  shortcut?: string;
  loading?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  className?: string;
};

//TODO: add mobile navigation

const NavItem = ({
  as,
  icon,
  label,
  href,
  shortcut,
  loading = false,
  disabled = false,
  isActive = false,
}: NavItemProps) => {
  const Component = as || React.Fragment;

  return !loading ? (
    <Component>
      <a
        className={S.anchor({
          hasShortcut: Boolean(shortcut),
          isActive,
        })}
        href={href}
        data-title={shortcut}
        aria-disabled={disabled}
      >
        <Icon label={label} name={icon} color="current" />
        <span className={S.label()} aria-disabled={disabled}>
          {label}
        </span>
      </a>
    </Component>
  ) : (
    <Box className="px-2">
      <Skeleton.Root>
        <Skeleton.Item width={200} />
      </Skeleton.Root>
    </Box>
  );
};

NavItem.displayName = 'Item';

const Wrapper = ({
  user_email,
  user_name,
  user_imageURL,
  showNavigation = true,
  loading = false,
  children,
  userMenu,
  footer,
  isNavigationOpen = true,
  onNavigationOpenChange,
  className = '',
  ...props
}: NavigationProps) => {

  return (
    <Box as="aside" className={`sticky top-0 h-full ${className}`} {...props}>
      <CollapsiblePrimitive.Root
        open={isNavigationOpen}
        onOpenChange={onNavigationOpenChange}
        className={S.root({ isClosed: !isNavigationOpen })}
      >
        <Box
          className={S.header({ isClosed: !isNavigationOpen })}
          data-state={isNavigationOpen === true ? 'open' : 'closed'}
        >
          {isNavigationOpen && (
            <UserProfile
              user_name={user_name}
              user_email={user_email}
              user_imageURL={user_imageURL}
              loading={loading}
            >
              {Boolean(userMenu) && userMenu}
            </UserProfile>
          )}

          {Boolean(onNavigationOpenChange) && (
            <CollapsiblePrimitive.Trigger asChild>
              <Box
                as="button"
                type="button"
                aria-label="Open / close menu"
                className={S.toogleButton()}
              >
                <Tooltip content="Menu" slot={<Shortcut shortcut="⌘ M" />}>
                  <Box
                    as="svg"
                    className={S.svg()}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/S.Svg"
                  >
                    <path
                      d="M3 7C3 5.34315 4.34315 4 6 4H7C8.10457 4 9 4.89543 9 6V18C9 19.1046 8.10457 20 7 20H6C4.34315 20 3 18.6569 3 17V7Z"
                      className="svg-fill"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16679 3.26861C9.11315 3.25643 9.05732 3.25 9 3.25C8.92881 3.25 8.85995 3.25992 8.7947 3.27845C8.18971 3.29707 7.6396 3.3279 7.14223 3.37891C5.88099 3.50827 4.82819 3.77698 4.03148 4.41435C3.21334 5.06886 2.78157 6.01542 2.54504 7.23185C2.31105 8.43524 2.25 10.0004 2.25 12C2.25 13.9996 2.31105 15.5648 2.54504 16.7682C2.78157 17.9846 3.21334 18.9311 4.03148 19.5857C4.82819 20.223 5.88099 20.4917 7.14223 20.6211C7.6396 20.6721 8.18971 20.7029 8.7947 20.7216C8.85995 20.7401 8.92881 20.75 9 20.75C9.05733 20.75 9.11313 20.7436 9.16677 20.7314C9.99841 20.75 10.9273 20.75 11.9585 20.75H12.0389C14.0065 20.75 15.5982 20.75 16.8528 20.6299C18.1083 20.5096 19.1544 20.2605 19.9489 19.667C20.773 19.0514 21.2129 18.1542 21.453 17.0012C21.6891 15.8671 21.75 14.3967 21.75 12.5294C21.75 10.3975 21.6888 8.73705 21.4566 7.46378C21.2229 6.18256 20.7981 5.18763 19.9867 4.49555C19.1888 3.81495 18.13 3.52629 16.8628 3.38772C15.6033 3.24999 14.0073 3.24999 12.0439 3.25H11.9586C10.9274 3.25 9.99844 3.24999 9.16679 3.26861ZM12 4.75C14.0165 4.75 15.5311 4.75104 16.6997 4.87883C17.87 5.0068 18.5612 5.25123 19.0133 5.6368C19.4519 6.0109 19.7771 6.61524 19.9809 7.73291C20.1862 8.85854 20.25 10.3966 20.25 12.5294C20.25 14.3974 20.1859 15.7285 19.9845 16.6955C19.7871 17.6436 19.477 18.1472 19.0511 18.4653C18.5956 18.8056 17.8917 19.0235 16.7097 19.1367C15.535 19.2492 14.0145 19.25 12 19.25C11.1689 19.25 10.4224 19.2498 9.75 19.2412L9.75 4.75877C10.4224 4.75016 11.1689 4.75 12 4.75ZM8.25 19.199C7.90814 19.1819 7.59071 19.1592 7.29527 19.1289C6.11901 19.0083 5.42181 18.777 4.96852 18.4143C4.53666 18.0689 4.21843 17.5154 4.01746 16.4818C3.81395 15.4352 3.75 14.0004 3.75 12C3.75 9.99959 3.81395 8.56476 4.01746 7.51815C4.21843 6.48458 4.53666 5.93114 4.96852 5.58565C5.42181 5.22302 6.11901 4.99173 7.29527 4.87109C7.59071 4.84079 7.90814 4.81807 8.25 4.80103L8.25 19.199Z"
                      className="svg-outline"
                    />
                  </Box>
                </Tooltip>
              </Box>
            </CollapsiblePrimitive.Trigger>
          )}
        </Box>

        <CollapsiblePrimitive.Content className={S.content()}>
          {showNavigation && (
            <Stack
              as="nav"
              direction="column"
              gap="3"
              justify="between"
              className="mb-3 mt-2 h-full w-full"
            >
              {children}
            </Stack>
           )}

          <Box as="footer" className={S.footer()}>
            {Boolean(footer) && footer}
          </Box>
        </CollapsiblePrimitive.Content>
      </CollapsiblePrimitive.Root>
    </Box>
  );
};

Wrapper.displayName = 'Wrapper';

export const Navigation = { Wrapper: Wrapper, Item: NavItem };
