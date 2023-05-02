import { CSS } from '../../styles';

import * as S from './styles';

export type StepperHorizontalProps = {
  count: number;
  currentStep?: number;
  css?: CSS;
};

export const StepperHorizontal = ({
  count,
  currentStep = 1,
  css,
  ...props
}: StepperHorizontalProps): JSX.Element => (
  <S.Container css={css} {...props}>
    <S.Label>
      {currentStep} / {count}{' '}
    </S.Label>

    <S.Steps css={{ '--steps-count': count }}>
      {Array.from({ length: count }, (_, i) => i + 1).map((step) => {
        return <S.Step key={step} isActive={currentStep >= step} />;
      })}
    </S.Steps>
  </S.Container>
);

StepperHorizontal.displayName = 'StepperHorizontal';
