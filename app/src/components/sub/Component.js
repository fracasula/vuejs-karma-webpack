import Vue from 'vue';

export default class Component extends Vue {
    message = 'Hello from parent component';

    get computedMessage() {
        return this.message + '!!!';
    }
}
