import chalk from 'chalk';

const fontColors = ["red", "green", "yellow", "blue", "magenta", "cyan"];

export const colourfulLog = (string) => {
    const colourfulString = string
        .split(" ")
        .map((word) => {
            const randomIndexColor = Math.floor(Math.random() * fontColors.length);
            const randomColor = fontColors[randomIndexColor];
            return chalk[randomColor](word);
        })
        .join(" ");

    console.log(colourfulString);
};
