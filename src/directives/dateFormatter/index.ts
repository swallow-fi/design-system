import Vue from 'vue';
import { VNodeDirective } from 'vue/types/vnode';
import DateFormatter from '../../utils/DateFormatter';

const dateFormatter = () => {
    Vue.directive('date-formatter', (el: HTMLElement, binding: VNodeDirective) => {
        const options = {
            fromNow: binding.value.fromNow
        }

        el.innerHTML = DateFormatter.fromNow(new Date(options.fromNow));
    });
};

export default dateFormatter;