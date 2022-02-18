type RGBColor = {
  r: number;
  g: number;
  b: number;
};

type HSLColor = {
  h: number;
  s: string;
  l: string;
};

type HEXColor = string;

const HASH_NUMBER: number = 16777215;

function randomNumber(from: number = 0, to: number = 255): number {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function componentToHex(c: number): string {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

export function randomHEX(count: number = 1): HEXColor[] {
  return Array(count)
    .fill('', 0, count)
    .map((): string => '#' + Math.floor(Math.random() * HASH_NUMBER).toString(16));
}

export function randomRGB(count: number = 1): RGBColor[] {
  return Array(count)
    .fill('', 0, count)
    .map(
      (): RGBColor => ({
        r: randomNumber(),
        g: randomNumber(),
        b: randomNumber(),
      }),
    );
}

export function randomHSL(count: number = 1): HSLColor[] {
  return Array(count)
    .fill('', 0, count)
    .map(
      (): HSLColor => ({
        h: randomNumber(0, 360),
        s: randomNumber(0, 100) + '%',
        l: randomNumber(0, 100) + '%',
      }),
    );
}

export function rgbToHex(color: RGBColor | RGBColor[]): HEXColor | HEXColor[] {
  if (Array.isArray(color)) {
    return color.map(({ r, g, b }) => '#' + componentToHex(r) + componentToHex(g) + componentToHex(b));
  }
  return '#' + componentToHex(color.r) + componentToHex(color.g) + componentToHex(color.b);
}

function singleRgbToHsl(color: RGBColor): HSLColor {
  const r = color.r / 255;
  const g = color.g / 255;
  const b = color.b / 255;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;

  let h = 0;
  let s = 0;
  let l = 0;

  if (delta === 0) h = 0;
  else if (max === r) h = ((g - b) / delta) % 6;
  else if (max === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (max + min) / 2;

  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return {
    h,
    s: `${Math.floor(s)}%`,
    l: `${Math.floor(l)}%`,
  };
}

export function rgbToHsl(color: RGBColor | RGBColor[]): HSLColor | HSLColor[] {
  if (Array.isArray(color)) return color.map((c) => singleRgbToHsl(c));

  return singleRgbToHsl(color);
}

function singleHexToRgb(color: HEXColor): RGBColor {
  let r = '0';
  let g = '0';
  let b = '0';

  if (color.length === 4) {
    r = '0x' + color[1] + color[1];
    g = '0x' + color[2] + color[2];
    b = '0x' + color[3] + color[3];
  } else if (color.length === 7) {
    r = '0x' + color[1] + color[2];
    g = '0x' + color[3] + color[4];
    b = '0x' + color[5] + color[6];
  }

  return {
    r: +r,
    g: +g,
    b: +b,
  };
}

export function hexToRgb(color: HEXColor | HEXColor[]): RGBColor | RGBColor[] {
  if (Array.isArray(color)) return color.map((c) => singleHexToRgb(c));

  return singleHexToRgb(color);
}

export function hexToHsl(color: HEXColor | HEXColor[]): HSLColor | HSLColor[] {
  return rgbToHsl(hexToRgb(color));
}

function singleHslToHex(color: HSLColor): HEXColor {
  const h = color.h;
  const s = parseInt(color.s, 10) / 100;
  const l = parseFloat(color.l) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r: number | string = 0;
  let g: number | string = 0;
  let b: number | string = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  if (r.length === 1) r = '0' + r;
  if (g.length === 1) g = '0' + g;
  if (b.length === 1) b = '0' + b;

  return '#' + r + g + b;
}

export function hslToHex(color: HSLColor | HSLColor[]): HEXColor | HEXColor[] {
  if (Array.isArray(color)) return color.map((c) => singleHslToHex(c));

  return singleHslToHex(color);
}

export function hslToRgb(color: HSLColor | HSLColor[]): RGBColor | RGBColor[] {
  return hexToRgb(hslToHex(color));
}
