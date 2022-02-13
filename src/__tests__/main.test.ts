import { randomHEX, randomHSL, randomRGB, rgbToHex, rgbToHsl, hexToRgb } from '../index';

test('My Greeter', () => {
    const result = randomHSL(3);
  //expect(Array.isArray(result)).toBe(true);
});

test('RGB to HEX', () => {
  const result = rgbToHex([{r: 255, g: 0, b: 0}, {r: 255, g: 255, b: 255}]);
//expect(result).toBe('#ff0000');
});

test('RGB to HSL', () => {
  const result = hexToRgb('#f00');
  console.log(result);
//expect(result.is).toBe(true);
});
