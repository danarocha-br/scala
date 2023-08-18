import React from 'react';

import { Icon } from '../Icon';
import * as S from './styles';
import { Box } from '../Box';

export type StepperItemProps = {
  href: string;
  title: string;
  isActive?: boolean;
};

export type StepperProps = {
  /** to render a wrapper to the a tag */
  as?: React.ElementType<unknown>;
  backHref: string;
  backLabel?: string;
  items: StepperItemProps[];
  className?: string;
};

/**
 * Renders a stepper component.
 *
 * @param {React.ElementType} as - The HTML element or React component to render as the root element of the stepper. Defaults to React.Fragment.
 * @param {string} backHref - The URL to navigate to when the back button is clicked.
 * @param {string} backLabel - The label to display on the back button.
 * @param {Array<Object>} items - An array of objects representing the individual steps in the stepper.
 * @return {JSX.Element} The rendered stepper component.
 */
export const Stepper = ({
  as,
  backHref,
  backLabel,
  items,
  className = '',
  ...props
}: StepperProps): JSX.Element => {
  const Component = as || React.Fragment;

  const backButton = (
    <a className={S.backButton()} href={backHref}>
      <div className={S.iconWrapper()}>
        <Icon name="arrowLeft" color="on-dark" label="arrow" />
      </div>

      {Boolean(backLabel) && <span className={S.backLabel()}>{backLabel}</span>}
    </a>
  );

  const heightCalculation = items && items.length * 21;

  const menuItems = items.map((item) => (
    <Box
      as="li"
      className={`${S.menuItem({
        isActive: item.isActive,
      })} group-hover/container:before:h-[var(--height)]`}
      key={item.title}
      style={{
        //@ts-ignore
        '--height': `${heightCalculation}px`,
      }}
    >
      <Component>
        <a className={S.anchor({ isActive: item.isActive })} href={item.href}>
          {item.title}
        </a>
      </Component>
    </Box>
  ));

  return (
    <Box className={S.container()} {...props}>
      <Component>{backButton}</Component>

      <Box as="ul" className={S.menu()}>
        {menuItems}
      </Box>
    </Box>
  );
};

Stepper.displayName = 'Stepper';
