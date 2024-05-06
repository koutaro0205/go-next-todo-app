export const color = {
  white: '#ffffff',
  black: '#333333',
  transparent: 'transparent',
} as const satisfies Record<string, `#${string}` | 'transparent'>;

export type Color = keyof typeof color;
