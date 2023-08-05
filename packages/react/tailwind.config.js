/** @type {import('tailwindcss').Config} */
import {
  fontFamily,
  fontSize,
  radii,
  elevation,
  spacing,
} from '@compasso/design-tokens';

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{ts,tsx}', '../../apps/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'hsl(var(--color-white) / <alpha-value>)',

      neutral: {
        50: 'hsl(var(--color-neutral-50) / <alpha-value>)',
        100: 'hsl(var(--color-neutral-100) / <alpha-value>)',
        200: 'hsl(var(--color-neutral-200) / <alpha-value>)',
        300: 'hsl(var(--color-neutral-300) / <alpha-value>)',
        400: 'hsl(var(--color-neutral-400) / <alpha-value>)',
        500: 'hsl(var(--color-neutral-500) / <alpha-value>)',
        600: 'hsl(var(--color-neutral-600) / <alpha-value>)',
        700: 'hsl(var(--color-neutral-700) / <alpha-value>)',
        800: 'hsl(var(--color-neutral-800) / <alpha-value>)',
        900: 'hsl(var(--color-neutral-900) / <alpha-value>)',
      },

      royal: {
        50: 'hsl(var(--color-royal-50) / <alpha-value>)',
        100: 'hsl(var(--color-royal-100) / <alpha-value>)',
        200: 'hsl(var(--color-royal-200) / <alpha-value>)',
        300: 'hsl(var(--color-royal-300) / <alpha-value>)',
        400: 'hsl(var(--color-royal-400) / <alpha-value>)',
        500: 'hsl(var(--color-royal-500) / <alpha-value>)',
        600: 'hsl(var(--color-royal-600) / <alpha-value>)',
        700: 'hsl(var(--color-royal-700) / <alpha-value>)',
        800: 'hsl(var(--color-royal-800) / <alpha-value>)',
        900: 'hsl(var(--color-royal-900) / <alpha-value>)',
      },

      forest: {
        50: 'hsl(var(--color-forest-50) / <alpha-value>)',
        100: 'hsl(var(--color-forest-100) / <alpha-value>)',
        200: 'hsl(var(--color-forest-200) / <alpha-value>)',
        300: 'hsl(var(--color-forest-300) / <alpha-value>)',
        400: 'hsl(var(--color-forest-400) / <alpha-value>)',
        500: 'hsl(var(--color-forest-500) / <alpha-value>)',
        600: 'hsl(var(--color-forest-600) / <alpha-value>)',
        700: 'hsl(var(--color-forest-700) / <alpha-value>)',
        800: 'hsl(var(--color-forest-800) / <alpha-value>)',
        900: 'hsl(var(--color-forest-900) / <alpha-value>)',
      },

      macaroni: {
        50: 'hsl(var(--color-macaroni-50) / <alpha-value>)',
        100: 'hsl(var(--color-macaroni-100) / <alpha-value>)',
        200: 'hsl(var(--color-macaroni-200) / <alpha-value>)',
        300: 'hsl(var(--color-macaroni-300) / <alpha-value>)',
        400: 'hsl(var(--color-macaroni-400) / <alpha-value>)',
        500: 'hsl(var(--color-macaroni-500) / <alpha-value>)',
        600: 'hsl(var(--color-macaroni-600) / <alpha-value>)',
        700: 'hsl(var(--color-macaroni-700) / <alpha-value>)',
        800: 'hsl(var(--color-macaroni-800) / <alpha-value>)',
        900: 'hsl(var(--color-macaroni-900) / <alpha-value>)',
      },

      froly: {
        50: 'hsl(var(--color-froly-50) / <alpha-value>)',
        100: 'hsl(var(--color-froly-100) / <alpha-value>)',
        200: 'hsl(var(--color-froly-200) / <alpha-value>)',
        300: 'hsl(var(--color-froly-300) / <alpha-value>)',
        400: 'hsl(var(--color-froly-400) / <alpha-value>)',
        500: 'hsl(var(--color-froly-500) / <alpha-value>)',
        600: 'hsl(var(--color-froly-600) / <alpha-value>)',
        700: 'hsl(var(--color-froly-700) / <alpha-value>)',
        800: 'hsl(var(--color-froly-800) / <alpha-value>)',
        900: 'hsl(var(--color-froly-900) / <alpha-value>)',
      },

      brand: {
        color: {
          primary: 'hsl(var(--brand-color-primary) / <alpha-value>)',
        },
      },

      background: {
        color: {
          default: 'hsl(var(--background-color-default) / <alpha-value>)',
        },
      },

      surface: {
        color: {
          text: {
            default: 'hsl(var(--surface-color-text-default) / <alpha-value>)',
          },
          border: {
            default: 'hsl(var(--surface-color-border-default) / <alpha-value>)',
          },
          background: {
            default:
              'hsl(var(--surface-color-background-default) / <alpha-value>)',
            subdued:
              'hsl(var(--surface-color-background-subdued) / <alpha-value>)',
            hover: 'hsl(var(--surface-color-background-hover) / <alpha-value>)',
            pressed:
              'hsl(var(--surface-color-background-pressed) / <alpha-value>)',
            disabled:
              'hsl(var(--surface-color-background-disabled) / <alpha-value>)',
          },
        },
      },

      form: {
        color: {
          background: {
            default:
              'hsl(var(--form-color-background-default) / <alpha-value>)',
            subdued:
              'hsl(var(--form-color-background-subdued) / <alpha-value>)',
            hover: 'hsl(var(--form-color-background-hover) / <alpha-value>)',
            focus: 'hsl(var(--form-color-background-focus) / <alpha-value>)',
            error: 'hsl(var(--form-color-background-error) / <alpha-value>)',
            disabled:
              'hsl(var(--form-color-background-disabled) / <alpha-value>)',
          },
          border: {
            default: 'hsl(var(--form-color-border-default) / <alpha-value>)',
            hover: 'hsl(var(--form-color-border-hover) / <alpha-value>)',
            focus: 'hsl(var(--form-color-border-focus) / <alpha-value>)',
            disabled: 'hsl(var(--form-color-border-disabled) / <alpha-value>)',
            error: 'hsl(var(--form-color-border-error) / <alpha-value>)',
          },
        },
      },

      text: {
        color: {
          body: 'hsl(var(--text-color-body) / <alpha-value>)',
          'body-lighter': 'hsl(var(--text-color-body-lighter) / <alpha-value>)',
          caption: 'hsl(var(--text-color-caption) / <alpha-value>)',
          success: 'hsl(var(--text-color-success) / <alpha-value>)',
          warning: 'hsl(var(--text-color-warning) / <alpha-value>)',
          danger: 'hsl(var(--text-color-danger) / <alpha-value>)',
          'on-light': 'hsl(var(--text-color-on-light) / <alpha-value>)',
          'on-dark': 'hsl(var(--text-color-on-dark) / <alpha-value>)',
          inverted: 'hsl(var(--text-color-inverted) / <alpha-value>)',
        },
      },

      interactive: {
        color: {
          text: {
            enabled:
              'hsl(var(--interactive-color-text-enabled) / <alpha-value>)',
            disabled:
              'hsl(var(--interactive-color-text-disabled) / <alpha-value>)',
          },
          border: {
            enabled:
              'hsl(var(--interactive-color-border-enabled) / <alpha-value>)',
            pressed:
              'hsl(var(--interactive-color-border-pressed) / <alpha-value>)',
          },
          background: {
            enabled:
              'hsl(var(--interactive-color-background-enabled) / <alpha-value>)',
            subdued:
              'hsl(var(--interactive-color-background-subdued) / <alpha-value>)',
            hover:
              'hsl(var(--interactive-color-background-hover) / <alpha-value>)',
            pressed:
              'hsl(var(--interactive-color-background-pressed) / <alpha-value>)',
            disabled:
              'hsl(var(--interactive-color-background-disabled) / <alpha-value>)',
          },
        },
      },

      action: {
        color: {
          text: {
            transparent: {
              enabled:
                'hsl(var(--action-color-text-transparent-enabled) / <alpha-value>)',
              disabled:
                'hsl(var(--action-color-text-transparent-disabled) / <alpha-value>)',
            },
            primary: {
              enabled:
                'hsl(var(--action-color-text-primary-enabled) / <alpha-value>)',
              disabled:
                'hsl(var(--action-color-text-primary-disabled) / <alpha-value>)',
            },
            secondary: {
              enabled:
                'hsl(var(--action-color-text-secondary-enabled) / <alpha-value>)',
              disabled:
                'hsl(var(--action-color-text-secondary-disabled) / <alpha-value>)',
            },
            danger: {
              enabled:
                'hsl(var(--action-color-text-danger-enabled) / <alpha-value>)',
              disabled:
                'hsl(var(--action-color-text-danger-disabled) / <alpha-value>)',
            },
          },
          border: {
            transparent: {
              enabled:
                'hsl(var(--action-color-border-transparent-enabled) / <alpha-value>)',
              pressed:
                'hsl(var(--action-color-border-transparent-pressed) / <alpha-value>)',
            },
            primary: {
              enabled:
                'hsl(var(--action-color-border-primary-enabled) / <alpha-value>)',
              pressed:
                'hsl(var(--action-color-border-primary-pressed) / <alpha-value>)',
            },
            secondary: {
              enabled:
                'hsl(var(--action-color-border-secondary-enabled) / <alpha-value>)',
              pressed:
                'hsl(var(--action-color-border-secondary-pressed) / <alpha-value>)',
            },
            danger: {
              enabled:
                'hsl(var(--action-color-border-danger-enabled) / <alpha-value>)',
              pressed:
                'hsl(var(--action-color-border-danger-pressed) / <alpha-value>)',
            },
          },
          background: {
            transparent: {
              enabled:
                'hsl(var(--action-color-background-transparent-enabled) / <alpha-value>)',
              subdued:
                'hsl(var(--action-color-background-transparent-subdued) / <alpha-value>)',
              hover:
                'hsl(var(--action-color-background-transparent-hover) / <alpha-value>)',
              pressed:
                'hsl(var(--action-color-background-transparent-pressed) / <alpha-value>)',
              disabled:
                'hsl(var(--action-color-background-transparent-disabled) / <alpha-value>)',
            },
            primary: {
              enabled:
                'hsl(var(--action-color-background-primary-enabled) / <alpha-value>)',
              subdued:
                'hsl(var(--action-color-background-primary-subdued) / <alpha-value>)',
              hover:
                'hsl(var(--action-color-background-primary-hover) / <alpha-value>)',
              pressed:
                'hsl(var(--action-color-background-primary-pressed) / <alpha-value>)',
              disabled:
                'hsl(var(--action-color-background-primary-disabled) / <alpha-value>)',
            },
            secondary: {
              enabled:
                'hsl(var(--action-color-background-secondary-enabled) / <alpha-value>)',
              subdued:
                'hsl(var(--action-color-background-secondary-subdued) / <alpha-value>)',
              hover:
                'hsl(var(--action-color-background-secondary-hover) / <alpha-value>)',
              pressed:
                'hsl(var(--action-color-background-secondary-pressed) / <alpha-value>)',
              disabled:
                'hsl(var(--action-color-background-secondary-disabled) / <alpha-value>)',
            },
            danger: {
              enabled:
                'hsl(var(--action-color-background-danger-enabled) / <alpha-value>)',
              subdued:
                'hsl(var(--action-color-background-danger-subdued) / <alpha-value>)',
              hover:
                'hsl(var(--action-color-background-danger-hover) / <alpha-value>)',
              pressed:
                'hsl(var(--action-color-background-danger-pressed) / <alpha-value>)',
              disabled:
                'hsl(var(--action-color-background-danger-disabled) / <alpha-value>)',
            },
          },
        },
      },

      feedback: {
        color: {
          text: {
            info: {
              enabled:
                'hsl(var(--feedback-color-text-info-enabled) / <alpha-value>)',
              disabled:
                'hsl(var(--feedback-color-text-info-disabled) / <alpha-value>)',
            },
            success: {
              enabled:
                'hsl(var(--feedback-color-text-success-enabled) / <alpha-value>)',
              disabled:
                'hsl(var(--feedback-color-text-success-disabled) / <alpha-value>)',
            },
            warning: {
              enabled:
                'hsl(var(--feedback-color-text-warning-enabled) / <alpha-value>)',
              disabled:
                'hsl(var(--feedback-color-text-warning-disabled) / <alpha-value>)',
            },
            danger: {
              enabled:
                'hsl(var(--feedback-color-text-danger-enabled) / <alpha-value>)',
              disabled:
                'hsl(var(--feedback-color-text-danger-disabled) / <alpha-value>)',
            },
          },
          border: {
            info: {
              enabled:
                'hsl(var(--feedback-color-border-info-enabled) / <alpha-value>)',
              pressed:
                'hsl(var(--feedback-color-border-info-pressed) / <alpha-value>)',
            },
            success: {
              enabled:
                'hsl(var(--feedback-color-border-success-enabled) / <alpha-value>)',
              pressed:
                'hsl(var(--feedback-color-border-success-pressed) / <alpha-value>)',
            },
            warning: {
              enabled:
                'hsl(var(--feedback-color-border-warning-enabled) / <alpha-value>)',
              pressed:
                'hsl(var(--feedback-color-border-warning-pressed) / <alpha-value>)',
            },
            danger: {
              enabled:
                'hsl(var(--feedback-color-border-danger-enabled) / <alpha-value>)',
              pressed:
                'hsl(var(--feedback-color-border-danger-pressed) / <alpha-value>)',
            },
          },
          background: {
            info: {
              enabled:
                'hsl(var(--feedback-color-background-info-enabled) / <alpha-value>)',
              subdued:
                'hsl(var(--feedback-color-background-info-subdued) / <alpha-value>)',
              hover:
                'hsl(var(--feedback-color-background-info-hover) / <alpha-value>)',
              pressed:
                'hsl(var(--feedback-color-background-info-pressed) / <alpha-value>)',
              disabled:
                'hsl(var(--feedback-color-background-info-disabled) / <alpha-value>)',
            },
            success: {
              enabled:
                'hsl(var(--feedback-color-background-success-enabled) / <alpha-value>)',
              subdued:
                'hsl(var(--feedback-color-background-success-subdued) / <alpha-value>)',
              hover:
                'hsl(var(--feedback-color-background-success-hover) / <alpha-value>)',
              pressed:
                'hsl(var(--feedback-color-background-success-pressed) / <alpha-value>)',
              disabled:
                'hsl(var(--feedback-color-background-success-disabled) / <alpha-value>)',
            },
            warning: {
              enabled:
                'hsl(var(--feedback-color-background-warning-enabled) / <alpha-value>)',
              subdued:
                'hsl(var(--feedback-color-background-warning-subdued) / <alpha-value>)',
              hover:
                'hsl(var(--feedback-color-background-warning-hover) / <alpha-value>)',
              pressed:
                'hsl(var(--feedback-color-background-warning-pressed) / <alpha-value>)',
              disabled:
                'hsl(var(--feedback-color-background-warning-disabled) / <alpha-value>)',
            },
            danger: {
              enabled:
                'hsl(var(--feedback-color-background-danger-enabled) / <alpha-value>)',
              subdued:
                'hsl(var(--feedback-color-background-danger-subdued) / <alpha-value>)',
              hover:
                'hsl(var(--feedback-color-background-danger-hover) / <alpha-value>)',
              pressed:
                'hsl(var(--feedback-color-background-danger-pressed) / <alpha-value>)',
              disabled:
                'hsl(var(--feedback-color-background-danger-disabled) / <alpha-value>)',
            },
          },
        },
      },

      overlay: {
        color: {
          background: {
            default:
              'hsl(var(--overlay-color-background-default) / <alpha-value>)',
            subdued:
              'hsl(var(--overlay-color-background-subdued) / <alpha-value>)',
          },
        },
      },
      loading: {
        color: {
          background: {
            default:
              'hsl(var(--loading-color-background-default) / <alpha-value>)',
            subdued:
              'hsl(var(--loading-color-background-subdued) / <alpha-value>)',
          },
        },
      },
    },

    fontFamily: {
      sans: fontFamily['font-family-sans'],
    },

    fontSize: {
      xxs: fontSize['font-size-xxs'],
      xs: fontSize['font-size-xs'],
      sm: fontSize['font-size-sm'],
      md: fontSize['font-size-md'],
      lg: fontSize['font-size-lg'],
      xl: fontSize['font-size-xl'],
      '2xl': fontSize['font-size-2xl'],
      '3xl': fontSize['font-size-3xl'],
      '4xl': fontSize['font-size-4xl'],
    },

    borderRadius: {
      none: '0px',
      sm: radii['radii-sm'],
      md: radii['radii-md'],
      lg: radii['radii-lg'],
      xl: radii['radii-xl'],
      pill: radii['radii-pill'],
      circle: radii['radii-circle'],
    },

    boxShadow: {
      none: '0 0 #0000',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      low: elevation['elevation-low'],
      medium: elevation['elevation-medium'],
      high: elevation['elevation-high'],
    },

    extend: {
      spacing: {
        1: spacing['spacing-1'],
        2: spacing['spacing-2'],
        3: spacing['spacing-3'],
        4: spacing['spacing-4'],
        5: spacing['spacing-5'],
        6: spacing['spacing-6'],
        7: spacing['spacing-7'],
        8: spacing['spacing-8'],
        9: spacing['spacing-9'],
        10: spacing['spacing-10'],
        11: spacing['spacing-11'],
        12: spacing['spacing-12'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    // preflight: false,
  },
};
