type RGBColor = {
    r: number,
    g: number,
    b: number,
};

type HSLColor = {
    h: number,
    s: string,
    l: string,
};

type HEXColor = string;

const HASH_NUMBER: number = 16777215;

function randomNumber(from: number = 0, to: number = 255): number {
    return Math.floor(Math.random() * (to - from + 1) + from)
}

function componentToHex(c: number): string {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

export function randomHEX(count: number = 1): Array<HEXColor> {
    return Array(count).fill('', 0, count).map((): string => '#'+Math.floor(Math.random()*HASH_NUMBER).toString(16));
}

export function randomRGB(count: number = 1): Array<RGBColor> {
    return Array(count).fill('', 0, count).map((): RGBColor => ({
        r: randomNumber(),
        g: randomNumber(),
        b: randomNumber(),
    }));
}

export function randomHSL(count: number = 1): Array<HSLColor> {
    return Array(count).fill('', 0, count).map((): HSLColor => ({
        h: randomNumber(0, 360),
        s: randomNumber(0, 100) + '%',
        l: randomNumber(0, 100) + '%',
    }));
}
  
export function rgbToHex(color: RGBColor | Array<RGBColor>): HEXColor | Array<HEXColor> {
    if(Array.isArray(color)) {
        return color.map(({ r, g, b }) => "#" + componentToHex(r) + componentToHex(g) + componentToHex(b));
    }
    return "#" + componentToHex(color.r) + componentToHex(color.g) + componentToHex(color.b);
}

export function rgbToHsl(color: RGBColor): HSLColor {
    const r = color.r / 255;
    const g = color.g / 255;
    const b = color.b / 255;
  
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;

    let h = 0;
    let s = 0;
    let l = 0;

    if (delta == 0) h = 0;
    else if (max == r) h = ((g - b) / delta) % 6;
    else if (max == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);
    
    if (h < 0) h += 360;

    l = (max + min) / 2;

    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return {
        h,
        s: `${Math.floor(s)}%`,
        l: `${Math.floor(l)}%`,
    };
  }
  
export function hexToRgb(color: HEXColor): RGBColor {
    let r = '0';
    let g = '0';
    let b = '0';
      
    if (color.length == 4) {
        r = "0x" + color[1] + color[1];
        g = "0x" + color[2] + color[2];
        b = "0x" + color[3] + color[3];
    } else if (color.length == 7) {
        r = "0x" + color[1] + color[2];
        g = "0x" + color[3] + color[4];
        b = "0x" + color[5] + color[6];
    }
    
    return {
        r: +r,
        g: +g,
        b: +b,
    };
}