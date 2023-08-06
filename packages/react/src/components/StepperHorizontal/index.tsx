
import * as S from './styles';

export type StepperHorizontalProps = {
  count: number;
  currentStep?: number;
  className?: string;
};

export const StepperHorizontal = ({
  count,
  currentStep = 1,
  className,
  ...props
}: StepperHorizontalProps): JSX.Element => (
  <S.Container className={className} {...props}>
    <S.Label>
      {currentStep} / {count}{' '}
    </S.Label>

    <S.Steps >
      {Array.from({ length: count }, (_, i) => i + 1).map((step) => {
        return <S.Step key={step} isActive={currentStep >= step} />;
      })}
    </S.Steps>
  </S.Container>
);

StepperHorizontal.displayName = 'StepperHorizontal';
