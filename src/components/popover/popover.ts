import Vue, { VNode } from 'vue';
import popover from './popover.vue';

let PopoverComponent = Vue.extend(popover);

let instance: any;
let index: number = 1;

const Popover = (popoverId: number, target: HTMLElement, slots: VNode[], options?: {

}) => {
    options = options || {};

    instance = new PopoverComponent({
        data: options
    });

    instance.id = popoverId;
    instance.$slots.default = slots;

    instance.$mount();
    document.body.appendChild(instance.$el);
    let verticalOffset = 20; // options.offset || 20;
    instance.verticalOffset = verticalOffset;
    instance.visible = true;
    instance.$el.style.zIndex = index; // PopupManager.nextZIndex();

    // updatePosition
    instance.updatePosition({
        top: target.offsetTop + target.offsetHeight,
        left: target.offsetLeft
    });

    // updateSize
    instance.updateSize({
        width: target.offsetWidth,
        heigth: target.offsetHeight
    })

    return instance;
}

export default Popover;