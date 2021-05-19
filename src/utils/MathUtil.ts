import BigNumber from 'bignumber.js';

export default class MathUtil {
    public static minus(a: number, b: number) {
        return new BigNumber(a).multipliedBy(b).toNumber();
    }

    public static multipliedBy(a: number, b: number) {
        return new BigNumber(a).multipliedBy(b).toNumber();
    }
}