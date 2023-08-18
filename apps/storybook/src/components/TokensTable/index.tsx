import { Box, Text } from '@compasso/scala';
import './styles.css';

type TokensTableProps = {
  tokens: Record<string, string>;
  type?: 'spacing' | 'shadow' | 'general' | 'radii';
  unity?: 'px' | 'rem' | 'none';
};

export function TokensTable({
  tokens,
  unity = 'rem',
  type = 'general',
}: TokensTableProps) {
  return (
    <Box className="my-6 border border-action-color-text-transparent-disabled rounded-md">
      <Box as="table" className="tokens-table">
        <Box as="thead">
          <Box as="tr">
            <th className="text-neutral-500 opacity-80 text-xs leading-relaxed uppercase border-b-2 border-neutral-200">
              Name
            </th>
            {type === 'spacing' && <th />}
            {type === 'radii' && <th />}
            <th>{unity !== 'none' ? 'Pixel' : 'Value'}</th>
            {unity !== 'none' && <th>Rem</th>}
          </Box>
        </Box>

        <tbody>
          {Object.entries(tokens).map(([key, value]) => {
            return (
              <Box
                as="tr"
                key={key}
                className="text-neutral-600 border border-neutral-200"
              >
                <Box as="td">
                  <Text
                    size="sm"
                    color="danger"
                    className="bg-neutral-100 rounded-sm w-fit px-1"
                  >
                    ${key}
                  </Text>
                </Box>

                {type === 'spacing' && (
                  <td>
                    <Box
                      className="bg-neutral-200 h-5"
                      style={{ width: value }}
                    />
                  </td>
                )}

                {/* {type === 'shadow' && (
                <td>
                  <div
                    style={{
                      backgroundColor: 'white',
                      height: 24,
                      width: value,
                      boxShadow: value,
                    }}
                  ></div>
                </td>
              )} */}

                {type === 'radii' && (
                  <td>
                    <Box
                      className={`bg-neutral-200 h-5`}
                      style={{
                        width: key !== 'radii-circle' ? '64px' : '32px',
                        borderRadius: value,
                      }}
                    />
                  </td>
                )}

                <td>{value}</td>

                {unity !== 'none' && (
                  <td>
                    {unity !== 'rem'
                      ? Number(value.replace('px', '')) / 16 + 'rem'
                      : Number(value.replace('rem', '')) * 16 + 'px'}
                  </td>
                )}
              </Box>
            );
          })}
        </tbody>
      </Box>
    </Box>
  );
}
