import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {
  Portal as PanelPortal,
  DialogProps,
  Overlay,
  Content,
  Title,
  Description,
  Close,
  Root,
} from '@radix-ui/react-dialog';

import { Button } from '../Button';
import { Stack } from '../Stack';
import { Box } from '../Box';
import { ScrollView } from '../ScrollView';
import { IconButton } from '../IconButton';
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
  className?: string;
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
      className = '',
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
        <PanelPortal className="relative">
          <Overlay className={S.panelOverlay({ isNavigationOpen })} />
          <Content
            className={S.panelContent({ isNavigationOpen, className })}
            {...props}
            onEscapeKeyDown={closePanel}
          >
            {children}
          </Content>
        </PanelPortal>
      );
    }

    return (
      <Root open={isVisible} modal={isNavigationOpen ? false : true}>
        <PanelContent>
          <Stack
            as="header"
            align="center"
            justify="between"
            className="border-[#D5DBD]/50 [dark-mode=dark]:border-[#252e30]/70 border px-4 py-2"
          >
            <Title className={S.panelTitle()}>{title}</Title>

            <Close className={S.panelClose()} asChild>
              <div>
                <IconButton
                  label="Close"
                  icon="close"
                  onClick={closePanel}
                  type="button"
                  size="sm"
                  className="[&_svg]:fill-text-text-color-caption absolute right-[-16px] top-[-14px]"
                />
              </div>
            </Close>
          </Stack>

          <ScrollView>
            <Box className="h-full p-4 pb-[13rem]">
              {Boolean(description) && (
                <Description className={S.panelDescription()}>
                  {description}
                </Description>
              )}

              {children}
            </Box>
          </ScrollView>

          <Box className="relative">
            <footer className={S.panelFooter()}>
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
            </footer>
          </Box>
        </PanelContent>
      </Root>
    );
  }
);

Panel.displayName = 'Panel';
