import React from 'react';
import { CSS } from '../../styles';
import { Icon } from '../Icon';

import * as S from './styles';

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
  css?: CSS;
};

export const Stepper = ({
  as,
  backHref,
  backLabel,
  items,
  ...props
}: StepperProps): JSX.Element => {
  const Component = as || React.Fragment;

  return (
    <S.Container
      css={{
        '&:hover': {
          '& li:not(:last-child)': {
            '&::before': {
              h: `calc(${items.length} * 20px)`,
            },
          },
        },
      }}
      {...props}
    >
      <Component>
        <S.BackButton href={backHref}>
          <div>
            <Icon
              name="arrowLeft"
              color="on-dark"
              label="arrow"
              css={{ position: 'relative', left: '$spacing-1' }}
            />
          </div>

          {Boolean(backLabel) && <span>{backLabel}</span>}
        </S.BackButton>
      </Component>

      <S.Menu>
        {React.Children.toArray(
          items.map((item) => (
            <S.MenuItem key={item.title} isActive={item.isActive}>
              <Component>
                <a href={item.href}>{item.title}</a>
              </Component>
            </S.MenuItem>
          ))
        )}
      </S.Menu>
    </S.Container>
  );
};

Stepper.displayName = 'Stepper';
