import React, { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';

import * as S from './styles';

export type TabsRootProps = {
  className?: string;
} & TabsPrimitive.TabsProps;

const TabsRoot = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsRootProps
>(({ className, children, defaultValue, ...props }, ref): JSX.Element => {
  return (
    <TabsPrimitive.Root
      ref={ref}
      className={S.root({ className })}
      defaultValue={defaultValue}
      {...props}
    >
      {children}
    </TabsPrimitive.Root>
  );
});

TabsRoot.displayName = 'Root';

export type TabsContentProps = {
  className?: string;
} & TabsPrimitive.TabsContentProps;

/**
 * Renders the content of the Tabs component.
 *
 * @param {string} className - The additional CSS class name for the component.
 * @param {ReactNode} children - The content to be rendered inside the component.
 * @return {JSX.Element} The rendered content of the Tabs component.
 */
const TabsContent = ({
  className,
  children,
  ...props
}: TabsContentProps): JSX.Element => (
  <TabsPrimitive.Content className={S.content({ className })} {...props}>
    {children}
  </TabsPrimitive.Content>
);

TabsContent.displayName = 'Content';

export type TabsItemProps = {
  className?: string;
  label: string;
  layoutId?: string;
} & TabsPrimitive.TabsTriggerProps;

/**
 * Renders a single tab item for a Tabs component.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - className: The CSS class name for the tab item.
 *   - label: The label text for the tab item.
 *   - layoutId: The ID used for animating the tab item when it becomes active.
 * @returns {JSX.Element} The rendered tab item.
 */
const TabsItem = ({
  className,
  label,
  layoutId = 'activeTab',
  ...props
}: TabsItemProps): JSX.Element => {
  const tabRef = useRef<HTMLButtonElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useLayoutEffect(() => {
    const handleMutation = (mutations: MutationRecord[]) => {
      for (const mutation of mutations) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-state'
        ) {
          setIsActive(tabRef.current?.getAttribute('data-state') === 'active');
        }
      }
    };

    if (tabRef.current) {
      setIsActive(tabRef.current.getAttribute('data-state') === 'active');

      const observer = new MutationObserver(handleMutation);
      observer.observe(tabRef.current, { attributes: true });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <TabsPrimitive.Trigger
      ref={tabRef}
      className={S.item({ className })}
      {...props}
    >
      <span>{label}</span>

      {isActive && (
        <motion.div
          layoutId={layoutId}
          initial={{ width: '4px' }}
          animate={{ width: isActive ? '16px' : '4px' }}
          className={S.itemSelected()}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </TabsPrimitive.Trigger>
  );
};

TabsItem.displayName = 'Item';

export type TabsListProps = TabsPrimitive.TabsListProps;

const TabsList = ({ children, ...props }: TabsListProps): JSX.Element => (
  <TabsPrimitive.List className={S.list()} {...props}>
    {children}
  </TabsPrimitive.List>
);

TabsList.displayName = 'List';

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Item: TabsItem,
  Content: TabsContent,
};
