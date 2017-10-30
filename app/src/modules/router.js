import Vue from 'vue';
import Router from 'vue-router';
import LocalStorage from 'vue-ls';

import * as Components from '../components';

Vue.use(Router);
Vue.use(LocalStorage);

let router = new Router({
    mode: 'hash',
    linkActiveClass: 'open active',
    routes: [
        {
            path: '/',
            redirect: '/hello',
            name: 'Layout',
            component: Components.Layout,
            children: [
                {
                    path: '/hello',
                    name: 'Hello',
                    component: Components.Hello
                }
            ]
        },
        {
            path: '*',
            name: 'Not Found',
            component: Components.NotFound
        }
    ]

});

export default router;
