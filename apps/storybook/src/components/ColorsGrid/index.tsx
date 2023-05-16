import { Box, Grid, Stack } from '@e-scala/react';
import { getContrast } from 'polished';

type ColorsGridProps = {
  tokens: Record<string, string>;
};

export function ColorsGrid({ tokens }: ColorsGridProps) {
  return (
    <Grid cols="5" gap="4" css={{ marginTop: '$spacing-6' }}>
      {Object.entries(tokens).map(([key, color]) => {
        return (
          <Stack
            direction="column"
            justify="end"
            key={key}
            css={{
              backgroundColor: '$color-neutral-white',
              border: '1px solid #00000010',
              p: '$spacing-2',
              radii: '$radii-sm',
              boxShadow: '$elevation-low',
              w: '100%',
            }}
          >
            <Box
              as="strong"
              css={{
                fontSize: '$font-size-xs',
                fontFamily: 'monospace',
                color: '$color-froly-600',
                radii: '$radii-sm',
                w: '100%',
              }}
            >
              ${key}
            </Box>
            <Stack
              direction="column"
              justify="end"
              key={key}
              css={{
                backgroundColor: color,
                border: '1px solid',
                borderColor:
                  getContrast(String(color), '#FFF') < 3.5
                    ? '#00000010'
                    : '#00000030',
                p: '$spacing-2',
                mt: '$spacing-2',
                h: '$spacing-7',
                w: '100%',
                radii: '2px',
              }}
            >
              <Stack
                direction="column"
                css={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'monospace',
                  w: '100%',
                  color:
                    getContrast(String(color), '#FFF') < 3.5 ? '#000' : '#fff',
                }}
              >
                <Box as="span" css={{ fontSize: '$font-size-xxs' }}>
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
