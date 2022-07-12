import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    name
    selected = false
    searchValue
    inputItem
    userInput =""
    list= [
        {   id: 1,
            element: "do homework"},
        {    id: 2,
            element: "mown the lawn"}
    ]
    addInputToList() { 
        let inp=this.template.querySelector("lightning-input");
        if (inp.value){
            this.name=inp.value;
            this.list = [
                ...this.list,
                {
                    id:this.list.length +1,
                    element: this.name
                }
            ]
        }
    } 
    handleSelect(event) {
        this.selected = true
        console.log("selected in handler", this.selected)
        this.searchValue = event.detail
        console.log("searchValue" ,this.searchValue )
    } 
}