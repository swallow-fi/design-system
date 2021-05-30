export function convertSizeValue(value: string | number) {
    if (typeof value === "string") {
        let numValue = +value;

        if (isNaN(numValue)) {
            return value
        }

        return numValue + "px";
    }

    if (typeof value === "number") {
        return value + "px"
    }

    throw Error(`${value} is not string or number`);
}

export function convertFontSizeValue(value: string | number) {
    return convertSizeValue(value);
}