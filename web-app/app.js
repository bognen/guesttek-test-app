const app = Vue.createApp({
    template: `<home></home>`,
    components: {
        Home: Home
    }
});

app.component('Home', Home);
app.mount('#app');
