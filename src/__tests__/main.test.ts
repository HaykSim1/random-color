import { randomHEX, hexToHsl, hexToRgb, rgbToHex, randomRGB, rgbToHsl, randomHSL, hslToHex, hslToRgb } from '../index';

describe('HEX operations', () => {
  test('Random HEX', () => {
    const result = randomHEX(3);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(3);
  });

  test('Single HEX to RGB', () => {
    const color = '#ff0000';
    const result = hexToRgb(color);
    expect(result).toEqual({ r: 255, g: 0, b: 0 });
  });

  test('Multiple HEX to RGB', () => {
    const color = ['#ff0000', '#006aff', '#00ff77'];
    const result = hexToRgb(color);
    expect(result).toEqual([
      { r: 255, g: 0, b: 0 },
      { r: 0, g: 106, b: 255 },
      { r: 0, g: 255, b: 119 },
    ]);
  });

  test('Single HEX to HSL', () => {
    const color = '#ff0000';
    const result = hexToHsl(color);
    expect(result).toEqual({ h: 0, s: '100%', l: '50%' });
  });

  test('Multiple HEX to HSL', () => {
    const color = ['#ff0000', '#006aff', '#00ff77'];
    const result = hexToHsl(color);
    expect(result).toEqual([
      { h: 0, s: '100%', l: '50%' },
      { h: 215, s: '100%', l: '50%' },
      { h: 148, s: '100%', l: '50%' },
    ]);
  });
});

describe('RGB operations', () => {
  test('Random RGB', () => {
    const result = randomRGB(3);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(3);
  });

  test('Single RGB to HEX', () => {
    const color = { r: 255, g: 0, b: 0 };
    const result = rgbToHex(color);
    expect(result).toBe('#ff0000');
  });

  test('Multiple RGB to HEX', () => {
    const color = [
      { r: 255, g: 0, b: 0 },
      { r: 0, g: 106, b: 255 },
      { r: 0, g: 255, b: 119 },
    ];
    const result = rgbToHex(color);
    expect(result).toEqual(['#ff0000', '#006aff', '#00ff77']);
  });

  test('Single RGB to HSL', () => {
    const color = { r: 255, g: 0, b: 0 };
    const result = rgbToHsl(color);
    expect(result).toEqual({ h: 0, s: '100%', l: '50%' });
  });

  test('Multiple RGB to HSL', () => {
    const color = [
      { r: 255, g: 0, b: 0 },
      { r: 0, g: 106, b: 255 },
      { r: 0, g: 255, b: 119 },
    ];
    const result = rgbToHsl(color);
    expect(result).toEqual([
      { h: 0, s: '100%', l: '50%' },
      { h: 215, s: '100%', l: '50%' },
      { h: 148, s: '100%', l: '50%' },
    ]);
  });
});

describe('HSL operations', () => {
  test('Random HSL', () => {
    const result = randomHSL(3);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(3);
  });

  test('Single HSL to HEX', () => {
    const color = { h: 0, s: '100%', l: '50%' };
    const result = hslToHex(color);
    expect(result).toBe('#ff0000');
  });

  test('Multiple HSL to HEX', () => {
    const color = [
      { h: 0, s: '100%', l: '50%' },
      { h: 215, s: '100%', l: '50%' },
      { h: 148, s: '100%', l: '50%' },
    ];
    const result = hslToHex(color);
    expect(result).toEqual(['#ff0000', '#006aff', '#00ff77']);
  });

  test('Single HSL to RGB', () => {
    const color = { h: 0, s: '100%', l: '50%' };
    const result = hslToRgb(color);
    expect(result).toEqual({ r: 255, g: 0, b: 0 });
  });

  test('Multiple HSL to RGB', () => {
    const color = [
      { h: 0, s: '100%', l: '50%' },
      { h: 215, s: '100%', l: '50%' },
      { h: 148, s: '100%', l: '50%' },
    ];
    const result = hslToRgb(color);
    expect(result).toEqual([
      { r: 255, g: 0, b: 0 },
      { r: 0, g: 106, b: 255 },
      { r: 0, g: 255, b: 119 },
    ]);
  });
});
