var app = new Vue({
    el: '#app',
    data: {
        name : "",
        newItem : "",
        textEdited : "",
        indexToEdit : "",
        groceryList: [
            {text : "Pane"},
            {text : "Affettati"},
            {text : "Formaggio"},
            {text : "Verdura"},
            {text : "Frutta"},
            {text : "Fagioli in scatola"},
            {text : "Gelato allo zabaione"}
        ]
    },
    methods: {
        addNew(item) {
            var item = {text: item};
            this.groceryList.push(item);
            this.newItem = "";
        },
        clickToEdit(index) {
            this.indexToEdit = index;
            this.textEdited = this.groceryList[index].text;
        },
        confirmEdit(textEdited, indexToEdit) {
            this.groceryList[indexToEdit].text = textEdited;
            this.textEdited = "";
        }
    }
  })