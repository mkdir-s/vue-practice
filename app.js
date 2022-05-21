const App = {
    data() {
        return {
            title: 'Список задач',
            placeholderString: 'Введите задачу',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        inputChangeHandler(e) {
            this.inputValue = e.target.value
        },
        addNewNote() {
            if(this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx) {
            this.notes.splice(idx, 1)
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        },
    },
    watch: {
        inputValue(value) {
            if(value.length > 50) {
                this.inputValue = ''
            }
        }
    }
}
Vue.createApp(App).mount('#app')