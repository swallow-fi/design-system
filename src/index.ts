import * as components from './components';

import VueCustomDirectives from './directives';

import { VueConstructor } from 'vue';
import NApp from './plugins/NApp';

import { Toast } from './components/toast';
import { Popvoer } from './components/popover';
import VueFlicking from "@egjs/vue-flicking";

import './styles/App.scss';

class Noir {
    public static install(_vue: VueConstructor, args: any) {
        _vue.use(NApp);
        _vue.use(VueFlicking);
        _vue.prototype.$toast = Toast;
        _vue.prototype.$popover = Popvoer;

        VueCustomDirectives.init();

        if (components) {
            for (const key in components) {
                const component = (components as any)[key];
                _vue.component((component as any).options.name, component);
            }
        }
    }
}

export default Noir;
