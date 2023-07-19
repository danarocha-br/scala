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

export type ModalHandlesProps = {
  openModal: () => void;
  closeModal: () => void;
  isOverlayVisible: boolean;
};

export type ModalProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  variant?: 'transactional' | 'passive';
  buttonPrimaryLabel: string;
  buttonSecondaryLabel?: string;
  onButtonPrimaryClick: () => void;
  onButtonSecondaryClick?: () => void;
  headerSlot?: React.ReactNode;
} & PrimitiveDialogProps;

export type ModalContentProps = {
  children: React.ReactNode;
};

export const Modal = forwardRef(
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
      headerSlot,
    }: ModalProps,
    ref
  ) => {
    const { setOverlayType } = useOverlay();

    const [isVisible, setVisible] = useState(false);

    const openModal = useCallback(() => {
      setVisible(true);
    }, []);

    const closeModal = useCallback(() => {
      setVisible(false);
    }, []);

    useImperativeHandle(ref, () => ({
      openModal,
      closeModal,
      isOverlayVisible: isVisible,
    }));

    useEffect(() => {
      setOverlayType('modal');
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function DialogContent({ children, ...props }: ModalContentProps) {
      return (
        <DialogPortal>
          <S.ModalOverlay />
          <S.ModalContent
            {...props}
            onInteractOutside={closeModal}
            onEscapeKeyDown={closeModal}
          >
            {children}
          </S.ModalContent>
        </DialogPortal>
      );
    }

    return (
      <S.Modal open={isVisible} css={{ zIndex: '$max', position: 'relative' }}>
        <DialogContent>
          <Stack
            fullWidth
            align="center"
            justify="between"
            css={{
              background: '$surface-color-background-subdued',
              borderBottom: '1px solid',
              borderColor: '$form-color-border-default',
              px: '$spacing-3',
              pb: '$spacing-2',
              borderTopLeftRadius: '$radii-md',
              borderTopRightRadius: '$radii-md',
            }}
          >
            <S.ModalTitle variant={variant}>
              {headerSlot ? headerSlot : title}
            </S.ModalTitle>

            <S.ModalClose asChild>
              <div>
                <Button
                  label="Close"
                  variant="icon"
                  icon="close"
                  onClick={closeModal}
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
            </S.ModalClose>
          </Stack>

          {Boolean(description) && (
            <S.ModalDescription>{description}</S.ModalDescription>
          )}

          <Box css={{ px: '$spacing-3', color: '$text-color-body' }}>
            {children}
          </Box>

          <S.ModalFooter>
            {variant === 'transactional' ? (
              <>
                <Button
                  label={buttonSecondaryLabel || 'Cancel'}
                  variant="transparent"
                  onClick={onButtonSecondaryClick || closeModal}
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
            ) : (
              <Button
                label={buttonPrimaryLabel || 'Ok'}
                onClick={onButtonPrimaryClick}
                size="sm"
              />
            )}
          </S.ModalFooter>
        </DialogContent>
      </S.Modal>
    );
  }
);

Modal.displayName = 'Modal';
