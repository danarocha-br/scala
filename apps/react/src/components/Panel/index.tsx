import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { Portal as PanelPortal, DialogProps } from '@radix-ui/react-dialog';
import { transparentize } from 'polished';

import { Button } from '../Button';
import { Stack } from '../Stack';
import { Box } from '../Box';
import { ScrollView } from '../ScrollView';

import * as S from './styles';

import { useOverlay } from '../../hooks/useOverlay';

export type PanelProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  buttonPrimaryLabel: string;
  buttonSecondaryLabel?: string;
  onButtonPrimaryClick?: () => void;
  onButtonSecondaryClick?: () => void;
  isButtonDisabled?: boolean;
  isNavigationOpen?: boolean;
} & DialogProps;

export type PanelHandlesProps = {
  openPanel: () => void;
  closePanel: () => void;
  isOverlayVisible: boolean;
};

export type PanelContentProps = {
  children: React.ReactNode;
};

export const Panel = forwardRef(
  (
    {
      title,
      description,
      buttonPrimaryLabel,
      onButtonPrimaryClick,
      buttonSecondaryLabel,
      onButtonSecondaryClick,
      isButtonDisabled = false,
      children,
      isNavigationOpen,
    }: PanelProps,
    ref
  ) => {
    const { setOverlayType } = useOverlay();

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
      setOverlayType('panel');
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const openPanel = useCallback(() => {
      setVisible(true);
    }, []);

    const closePanel = useCallback(() => {
      setVisible(false);
    }, []);

    useImperativeHandle(ref, () => ({
      openPanel,
      closePanel,
      isOverlayVisible: isVisible,
    }));

    function PanelContent({ children, ...props }: PanelContentProps) {
      return (
        <PanelPortal>
          <S.PanelOverlay isNavigationOpen={isNavigationOpen} />
          <S.PanelContent
            {...props}
            isNavigationOpen={isNavigationOpen}
            onEscapeKeyDown={closePanel}
          >
            {children}
          </S.PanelContent>
        </PanelPortal>
      );
    }

    return (
      <S.Panel open={isVisible} modal={isNavigationOpen ? false : true}>
        <PanelContent>
          <Stack
            as="header"
            align="center"
            justify="between"
            css={{
              bg: '',
              p: '$spacing-2 $spacing-4',
              position: 'relative',
              border: '1px solid',
              borderColor: `${transparentize(0.5, '#D5DBDB')}`,

              ['.dark-theme &']: {
                borderColor: `${transparentize(0.7, '#252e30')}`,
              },
            }}
          >
            <S.PanelTitle>{title}</S.PanelTitle>

            <S.PanelClose asChild>
              <div>
                <Button
                  label="Close"
                  variant="icon"
                  icon="close"
                  onClick={closePanel}
                  type="button"
                  size="sm"
                  css={{
                    position: 'absolute',
                    right: -16,
                    top: -14,

                    '& svg': {
                      fill: '$text-color-caption',
                    },
                  }}
                />
              </div>
            </S.PanelClose>
          </Stack>

          <ScrollView>
            <Box css={{ p: '$spacing-4', h: '100%', pb: '13rem' }}>
              {Boolean(description) && (
                <S.PanelDescription>{description}</S.PanelDescription>
              )}

              {children}
            </Box>
          </ScrollView>

          <Box css={{ position: 'relative' }}>
            <S.PanelFooter>
              <Button
                label={buttonSecondaryLabel || 'Cancel'}
                variant="transparent"
                onClick={onButtonSecondaryClick || closePanel}
                type="button"
                fullWidth
              />

              <Button
                label={buttonPrimaryLabel || 'Save'}
                color="secondary"
                onClick={
                  onButtonPrimaryClick ? onButtonPrimaryClick : undefined
                }
                disabled={isButtonDisabled}
                type="submit"
                fullWidth
              />
            </S.PanelFooter>
          </Box>
        </PanelContent>
      </S.Panel>
    );
  }
);

Panel.displayName = 'Panel';
