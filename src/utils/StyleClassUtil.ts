export default class StyleClassUtil {
    public static updownColorClass(value: number) {
        if (value > 0) {
            return 'up-color';
        }
        if (value === 0) {
            return 'middle-color';
        }
        if (value < 0) {
            return 'down-color';
        }

        return '';
    }
}