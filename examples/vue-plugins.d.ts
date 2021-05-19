import { NApp } from '../src/plugins/NApp';
import { Kakao } from '../src/plugins/kakao/Kakao';

declare module 'vue/types/vue' {
    interface Vue {
        $nApp: NApp;
        $kakao: Kakao;
        $toast: any;
        $popover: any;
    }
}