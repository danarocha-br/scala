import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { themes } from 'prism-react-renderer';
import { useTheme } from 'next-themes';

import { Stack, CopyButton } from '@compasso/scala';
import * as S from './styles';
import { useCodeMode } from '@/hooks/useCodeDisplay';

type CodeProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scope: any;
  code: string;
  header: string;
  slot?: React.ReactNode;
  className?: string;
};

export function Code({ code, scope, header, slot, className = '' }: CodeProps) {
  const { setTheme } = useTheme();
  const { showCode } = useCodeMode();

  return (
    <Stack direction="column" gap="0" fullWidth className={className}>
      <LiveProvider code={code} scope={scope} theme={themes.dracula}>
        <Stack justify="between" fullWidth gap="0" className="relative">
          <Stack className="absolute left-3 top-3">
            <button
              className={S.themeButton({ theme: 'light' })}
              onClick={() => setTheme('light')}
            />
            <button
              className={S.themeButton({ theme: 'dark' })}
              onClick={() => setTheme('dark')}
            />
          </Stack>

          <LivePreview className={S.preview({ hasSlot: !!slot, showCode })} />

          {!!slot && (
            <Stack align="start" className={S.slot()}>
              {slot}
            </Stack>
          )}
        </Stack>
        {showCode && (
          <Stack gap="3" justify="between" fullWidth className={S.header()}>
            {header}

            <CopyButton content={code} theme="dark" />
          </Stack>
        )}
        {showCode && (
          <LiveEditor
            className={S.editor()}
            style={{
              margin: 0,
            }}
          />
        )}

        <LiveError />
      </LiveProvider>
    </Stack>
  );
}
