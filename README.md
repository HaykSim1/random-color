# Random Color

Lib is for generate random color, on different formats (RGB, HEX, HSL).
And there are some helper function to convert from one format to another.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/rand-colors) to install rand-colors.

```bash
npm install rand-colors
```

## Usage

```python
import { randomHEX, randomRGB, randomHSL } 'rand-colors'

# returns string, ex. '#ff0000'
randomHEX()

# returns array of strings, ex. ['#ff0000', '#006aff', '#00ff77']
randomHEX(3)

# returns Object with r, g, b properties
randomRGB()

# returns Array of Objects with r, g, b properties
randomRGB()

# returns Object with h, s, l properties
randomHSL()

# returns Array of Objects with h, s, l properties
randomHSL()
```

## Converter functions

```
hexToRgb(color | color[]) => color | color[];
hexToHsl(color | color[]) => color | color[];

rgbToHex(color | color[]) => color | color[];
rgbToHsl(color | color[]) => color | color[];

hslToHex(color | color[]) => color | color[];
hslToRgb(color | color[]) => color | color[];
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)