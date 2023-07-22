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
          <S.DialogOverlay />
          <S.DialogContent
            {...props}
            onInteractOutside={closeDialog}
            onEscapeKeyDown={closeDialog}
          >
            {children}
          </S.DialogContent>
        </DialogPortal>
      );
    }

    return (
      <S.Dialog open={isVisible}>
        <DialogContent>
          <Stack
            fullWidth
            align="center"
            justify="between"
            css={{
              background:
                variant === 'danger'
                  ? '$feedback-color-background-danger-disabled'
                  : '$surface-color-background-subdued',
              borderBottom: '1px solid',
              borderColor: '$form-color-border-default',
              px: '$spacing-3',
              pb: '$spacing-2',
              borderTopLeftRadius: '$radii-md',
              borderTopRightRadius: '$radii-md',
            }}
          >
            <S.DialogTitle variant={variant}>{title}</S.DialogTitle>

            <S.DialogClose asChild>
              <div>
                <IconButton
                  label="Close"
                  icon="close"
                  onClick={closeDialog}
                  size="sm"
                  type="button"
                  css={{
                    mt: '$spacing-2',
                    position: 'relative',
                    right: -3,

                    '& svg': {
                      fill: '$text-color-caption',
                    },
                  }}
                />
              </div>
            </S.DialogClose>
          </Stack>

          {Boolean(description) && (
            <S.DialogDescription>{description}</S.DialogDescription>
          )}

          <Box css={{ px: '$spacing-3', color: '$text-color-body' }}>
            {children}
          </Box>

          <S.DialogFooter>
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
                  label={buttonPrimaryLabel || 'Save'}
                  color="danger"
                  onClick={onButtonPrimaryClick}
                  size="sm"
                  type="submit"
                />
              </>
            ) : (
              <Button
                label={buttonPrimaryLabel || 'Ok'}
                onClick={onButtonPrimaryClick}
                size="sm"
              />
            )}
          </S.DialogFooter>
        </DialogContent>
      </S.Dialog>
    );
  }
);

Dialog.displayName = 'Dialog';
