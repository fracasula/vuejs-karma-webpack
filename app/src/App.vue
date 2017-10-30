<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import router from './modules/router';

    export default {
        name: 'app',
        router
    };
</script>
