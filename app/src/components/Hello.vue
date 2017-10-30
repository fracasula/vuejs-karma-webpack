<template>
    <div>
        <p>{{ message }}</p>
        <p>{{ computedMessage }}</p>
    </div>
</template>

<script>
    import http from './../modules/http';
    import ParentComponent from './sub/Component';
    import Component from 'vue-class-component';

    // @see https://github.com/vuejs/vue-class-component
    // @see https://github.com/wycats/javascript-decorators/blob/master/README.md
    @Component()

    export default class Hello extends ParentComponent {
        get computedMessage() {
            return this.message + '!!!';
        }

        helloMethod() {
            return new Promise((resolve, reject) => {
                http.get('/hello')
                    .then(response => {
                        this.message = response;
                        resolve(this.message);
                    })
                    .catch(error => {
                        this.message = error;
                        reject(error);
                    });
            });
        }
    }
</script>
