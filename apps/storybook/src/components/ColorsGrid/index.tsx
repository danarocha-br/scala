import { Box, Grid, Stack } from '@compasso/scala';
import { getContrast } from 'polished';

type ColorsGridProps = {
  tokens: Record<string, string>;
};

export function ColorsGrid({ tokens }: ColorsGridProps) {
  return (
    <Grid cols="5" gap="4" className="mt-6">
      {Object.entries(tokens).map(([key, color]) => {
        const textColor =
          getContrast(String(color), '#FFF') < 3.5 ? '#000' : '#fff';
        const bgColor =
          getContrast(String(color), '#FFF') < 3.5 ? '#00000010' : '#00000030';

        return (
          <Stack
            direction="column"
            justify="end"
            key={key}
            className="bg-white border border-[#00000010] p-2 rounded-sm shadow-low w-full "
          >
            <Box
              as="strong"
              className="text-xxs font-mono text-froly-600 rounded-sm w-full"
            >
              ${key}
            </Box>
            <Stack
              direction="column"
              justify="end"
              key={key}
              className={`border px-2 mt-2 h-7 w-full rounded-xs`}
              style={{ background: color, borderColor: bgColor }}
            >
              <Stack
                direction="column"
                className={`flex justify-between font-mono w-full`}
                style={{ color: textColor }}
              >
                <Box as="span" className="text-xxs">
                  {color}
                </Box>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Grid>
  );
}
