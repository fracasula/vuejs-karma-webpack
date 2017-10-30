/**
 * This file is part of Work Digital's Admin Panel.
 *
 * (c) 2017 Work Digital
 */
'use strict';

import Vue from 'vue';
import HelloInjector from '!!vue-loader?inject!./../../../src/components/Hello.vue';

const getComponentWithMockedHttp = get => HelloInjector({
    './../modules/http': {
        get
    }
});

describe('Hello component', () => {
    it('displays message correctly on success', done => {
        const component = getComponentWithMockedHttp(() => new Promise(
            resolve => resolve('All fine here')
        ));

        const vm = new Vue(component).$mount();

        vm.helloMethod().then(message => {
            expect(vm.message).toEqual(message);
            expect(vm.message).toBe('All fine here');
            expect(vm.computedMessage).toBe('All fine here!!!');
            done();
        });
    });

    it('displays message correctly on failure', done => {
        const component = getComponentWithMockedHttp(() => new Promise(
            (resolve, reject) => reject('Something went wrong')
        ));

        const vm = new Vue(component).$mount();

        vm.helloMethod().catch(error => {
            expect(vm.message).toEqual(error);
            expect(vm.message).toBe('Something went wrong');
            expect(vm.computedMessage).toBe('Something went wrong!!!');
            done();
        });
    });
});
