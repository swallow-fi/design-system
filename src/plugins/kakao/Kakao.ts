import Vue, { VueConstructor } from 'vue';
import kakaoSDK from './kakaoSDK';

export class Kakao {
    public sdk: any;

    constructor(key: string) {
        this.sdk = kakaoSDK as any
        this.sdk.init(key);
        if (this.sdk.isInitialized() === true) {
            console.log("kakaoSDK is initialized");
        }
    }
}

const KakaoPlugin = {
    install: (_Vue: VueConstructor<Vue>, options: {key: string}) => {
        const kakao = new Kakao(options.key);
        _Vue.prototype.$kakao = kakao;
    }
};

export default KakaoPlugin;