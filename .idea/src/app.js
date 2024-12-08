Vue.createApp({
        data: () => ({
            items: [1, 2, 3, 4, 5, 6, 7, 8]
        }),
        methods: {
            addItem() {
                this.items.unshift(this.$refs.myInput.value)
                this.$refs.myInput.value = ''
            },
            remove(i){
                this.items.splice(i, 1)
            }
        },
        computed: {
            evenItems() {
                return this.items.filter(i => i % 2 === 0)
            }
        }
    }
).mount('#app')
