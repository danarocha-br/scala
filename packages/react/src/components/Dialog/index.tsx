import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {
  Portal as DialogPortal,
  DialogProps as PrimitiveDialogProps,
  Root,
  Overlay,
  Content,
  Close,
  Title,
  Description,
} from '@radix-ui/react-dialog';

import { Button } from '../Button';
import { Stack } from '../Stack';

import * as S from './styles';

import { useOverlay } from '../../hooks/useOverlay';
import { Box } from '../Box';
import { IconButton } from '../IconButton';

export type DialogHandlesProps = {
  openDialog: () => void;
  closeDialog: () => void;
  isOverlayVisible: boolean;
};

export type DialogProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'transactional' | 'passive' | 'danger';
  buttonPrimaryLabel: string;
  buttonSecondaryLabel?: string;
  onButtonPrimaryClick: () => void;
  onButtonSecondaryClick?: () => void;
} & PrimitiveDialogProps;

export type DialogContentProps = {
  children: React.ReactNode;
};

export const Dialog = forwardRef(
  (
    {
      title,
      description,
      children,
      variant = 'transactional',
      buttonPrimaryLabel,
      onButtonPrimaryClick,
      buttonSecondaryLabel,
      onButtonSecondaryClick,
      className = '',
    }: DialogProps,
    ref
  ) => {
    const { setOverlayType } = useOverlay();

    const [isVisible, setVisible] = useState(false);

    const openDialog = useCallback(() => {
      setVisible(true);
    }, []);

    const closeDialog = useCallback(() => {
      setVisible(false);
    }, []);

    useImperativeHandle(ref, () => ({
      openDialog,
      closeDialog,
      isOverlayVisible: isVisible,
    }));

    useEffect(() => {
      setOverlayType('dialog');
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function DialogContent({ children, ...props }: DialogContentProps) {
      return (
        <DialogPortal>
          <div className={S.dialogOverlay()}>
            <Overlay />
          </div>
          <Content
            className={S.dialogContent({ className })}
            {...props}
            onInteractOutside={closeDialog}
            onEscapeKeyDown={closeDialog}
          >
            {children}
          </Content>
        </DialogPortal>
      );
    }

    return (
      <Root open={isVisible}>
        <DialogContent>
          <Stack
            fullWidth
            align="center"
            justify="between"
            className={`${
              variant === 'danger'
                ? 'bg-feedback-color-background-danger-disabled'
                : 'bg-surface-color-background-subdued'
            } rounded-tl-md rounded-tr-md border-b border-form-color-border-default px-3 pb-2`}
          >
            <Title className={S.dialogTitle({ variant })}>{title}</Title>

            <Close className={S.dialogClose()} asChild>
              <div>
                <IconButton
                  label="Close"
                  icon="close"
                  onClick={closeDialog}
                  size="sm"
                  type="button"
                  className="relative right-[-3px] mt-2 [&_svg]:fill-text-color-caption"
                />
              </div>
            </Close>
          </Stack>

          {Boolean(description) && (
            <Description className={S.dialogDescription()}>
              {description}
            </Description>
          )}

          <Box className="px-3 text-text-color-body">{children}</Box>

          <Box as="footer" className={S.dialogFooter()}>
            {variant === 'transactional' ? (
              <>
                <Button
                  label={buttonSecondaryLabel || 'Cancel'}
                  variant="transparent"
                  onClick={onButtonSecondaryClick || closeDialog}
                  size="sm"
                  type="button"
                />

                <Button
                  label={buttonPrimaryLabel || 'Save'}
                  color="secondary"
                  onClick={onButtonPrimaryClick}
                  size="sm"
                  type="submit"
                  animateOnHover
                />
              </>
            ) : variant === 'danger' ? (
              <>
                <Button
                  label={buttonSecondaryLabel || 'Cancel'}
                  variant="transparent"
                  onClick={onButtonSecondaryClick || closeDialog}
                  size="sm"
                  type="button"
                />

                <Button
                  label={buttonPrimaryLabel || 'Delete'}
                  color="danger"
                  onClick={onButtonPrimaryClick}
                  size="sm"
                  type="submit"
                  animateOnHover
                />
              </>
            ) : (
              <Button
                label={buttonPrimaryLabel || 'Ok'}
                onClick={onButtonPrimaryClick || closeDialog}
                size="sm"
                animateOnHover
              />
            )}
          </Box>
        </DialogContent>
      </Root>
    );
  }
);

Dialog.displayName = 'Dialog';
