import numberFormatter from './numberFormatter';
import dateFormatter from './dateFormatter';
import countUp from './countUp';

export default class VueCustomDirectives {
    static init() {
        numberFormatter();
        dateFormatter();
        countUp();
    }
}