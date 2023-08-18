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
import { Box } from '../Box';
import { useOverlay } from '../../hooks/useOverlay';
import { IconButton } from '../IconButton';
import { ScrollView } from '../ScrollView';
import * as S from './styles';

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
  className?: string;
} & PrimitiveDialogProps;

export type ModalContentProps = {
  children: React.ReactNode;
  className?: string;
};

export const Modal = forwardRef(
  (
    {
      title,
      description,
      children = '',
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

    function DialogContent({
      children,
      className = '',
      ...props
    }: ModalContentProps) {
      return (
        <DialogPortal>
          <Overlay className={S.modalOverlay()} />
          <Content
            {...props}
            className={S.modalContent({ className })}
            onInteractOutside={closeModal}
            onEscapeKeyDown={closeModal}
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
            className="rounded-tl-md rounded-tr-md border-b border-form-color-border-default bg-surface-color-background-subdued px-3 pb-2"
          >
            <Title
              className={S.modalTitle({
                variant,
                hasCustomHeader: !!headerSlot ? true : false,
              })}
            >
              <>{headerSlot ? headerSlot : title}</>
            </Title>

            <Close asChild>
              <div className={`c-modal__close-btn ${S.modalClose()}`}>
                <IconButton
                  label="Close"
                  icon="close"
                  onClick={closeModal}
                  size="sm"
                  type="button"
                  className="relative right-0 mt-2 [&_svg]:fill-text-color-caption"
                />
              </div>
            </Close>
          </Stack>

          {Boolean(description) && (
            <Description className={S.modalDescription()}>
              {description}
            </Description>
          )}

          <ScrollView className="text-color-body h-[80vh] w-full rounded-none px-3 md:h-[55vh] xl:h-[67vh]">
            {children}
          </ScrollView>

          <Box className={S.modalFooter()}>
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
                  animateOnHover
                />
              </>
            ) : (
              <Button
                label={buttonPrimaryLabel || 'Ok'}
                onClick={onButtonPrimaryClick}
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

Modal.displayName = 'Modal';
