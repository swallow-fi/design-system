import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const unescapeHTML = (escapedHTML: string) => {
    return escapedHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

for (const route of routes) {
    if (route.name === 'components') {
        if (route.children === undefined) {
            continue;
        }

        route.children.map((child: any, index: number) => {
            const container = document.createElement('div');
            container.innerHTML = child.component.template;
            const languageHTMLEles = container.getElementsByClassName('language-html') as any;
            for (const languageHTMLEle of languageHTMLEles) {
                languageHTMLEle.innerHTML = unescapeHTML('<div class="example-block--component">' + languageHTMLEle.innerHTML + '</div>') + '<div class="example-block--text">' + languageHTMLEle.innerHTML + '</div>';
                child.component.template = container.innerHTML;
            }
            return child;
        });
    }
}

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;