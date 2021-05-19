import Vue from 'vue';
import { VNodeDirective } from 'vue/types/vnode';

// @ts-ignore
import * as CountUp from './countUp.min.js';

const countUp = () => {
    Vue.directive('count-up', {
        bind: (el: HTMLElement, binding: VNodeDirective) => {
            const value: number = binding.value.value;
            const suffix: string = binding.value.suffix || '';

            let splittedValue = `${value}`.split('.');
            let decimalPlaces = splittedValue.length > 1 ? splittedValue[1].length : 0

            let countUp: any = new CountUp.CountUp(el, value, {
                decimalPlaces,
                suffix
            });
            (el as any)._countUp = countUp;
            if (!countUp.error) {
                countUp.start()
            } else {
                console.error(countUp.error);
            }
        },
        update: (el: HTMLElement, binding: VNodeDirective) => {
            const value: number = binding.value.value;
            const suffix: string = binding.value.suffix || '';

            let countUp = (el as any)._countUp

            let splittedValue = `${value}`.split('.');
            let decimalPlaces = splittedValue.length > 1 ? splittedValue[1].length : 0

            if (countUp.options.decimalPlaces !== decimalPlaces) {
                let countUp: any = new CountUp.CountUp(el, value, {
                    decimalPlaces,
                    suffix
                });
                (el as any)._countUp = countUp;
                if (!countUp.error) {
                    countUp.start()
                } else {
                    console.error(countUp.error);
                }
                return
            }

            if (!countUp.error) {
                countUp.update(value);
            } else {
                console.error(countUp.error);
            }
        },
        unbind(el: HTMLElement) {
            if (!(el as any)._countUp) return

            delete (el as any)._countUp
        },
    });
};

export default countUp;