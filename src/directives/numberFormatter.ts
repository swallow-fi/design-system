import Vue from 'vue';
import { VNodeDirective } from 'vue/types/vnode';
import NumberFormatter from '../utils/NumberFormatter';

const numberFormatter = () => {
    Vue.directive('number-formatter', (el: HTMLElement, binding: VNodeDirective) => {

        // 원본 값
        const value: number = binding.value.value;

        const options = {
            prefix: binding.value.prefix,
            decimal: binding.value.decimal,
            isFixed: binding.value.isFixed,
            type: binding.value.type,
            hasComma: binding.value.hasComma,
            showSign: binding.value.showSign,
            unit: binding.value.unit,
            unitSpace: binding.value.unitSpace,
            lang: binding.value.lang
        }

        el.innerHTML = NumberFormatter.format(value, options);
    });
};

export default numberFormatter;