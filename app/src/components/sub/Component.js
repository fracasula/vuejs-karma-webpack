import Vue from 'vue';
import VueComponent from 'vue-class-component';

@VueComponent
export default class Component extends Vue {
    message = 'Hello from parent component';

    get computedMessage() {
        return this.message + '!!!';
    }
}
