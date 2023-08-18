import { Box } from '../Box';
import { Text } from '../Text';
import * as S from './styles';

export type StepperHorizontalProps = {
  count: number;
  currentStep?: number;
  className?: string;
};

export const StepperHorizontal = ({
  count,
  currentStep = 1,
  className = '',
  ...props
}: StepperHorizontalProps): JSX.Element => {
  return (
    <Box className={S.container({ className })} {...props}>
      <Text size="xs" color="caption">
        {currentStep} / {count}{' '}
      </Text>
      <Box
        className={S.steps()}
        //@ts-ignore
        style={{ '--steps-count': count }}
      >
        {Array.from({ length: count }, (_, i) => i + 1).map((step) => {
          const isActive = currentStep >= step;

          return <Box className={S.step({ isActive })} key={step} />;
        })}
      </Box>
    </Box>
  );
};

StepperHorizontal.displayName = 'StepperHorizontal';
