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
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        removeNote(idx) {
            this.notes.splice(idx, 1)
        }
    }
}
Vue.createApp(App).mount('#app')