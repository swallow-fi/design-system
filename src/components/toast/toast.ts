import Vue from 'vue';
import toast from './toast.vue';

let ToastComponent = Vue.extend(toast);

let instance: any;
let instances: any[] = [];
let index: number = 1;

const Toast = (options: {
    color?: string,
    background?: string,
    message?: string,
    onClose?: Function
} | string) => {

    options = options || {};
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }

    options.onClose = function () {

    };

    instance = new ToastComponent({
        data: options
    });

    const id = 'toast_' + index++;
    instance.id = id;

    instance.$mount();
    document.body.appendChild(instance.$el);
    let verticalOffset = 20; // options.offset || 20;
    instances.forEach(item => {
        verticalOffset += item.$el.offsetHeight + 16;
    });
    instance.verticalOffset = verticalOffset;
    instance.visible = true;
    instance.$el.style.zIndex = index; // PopupManager.nextZIndex();
    instances.push(instance);
}

export default Toast;