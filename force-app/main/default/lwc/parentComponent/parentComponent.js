import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    @track name
    selected = false
    userInput =""
    list= [
        {   id: 1,
            element: "do homework"},
        {    id: 2,
            element: "mown the lawn"}
    ]
    addInputToList(event) {
        this.selected = true
        let inp=this.template.querySelector("lightning-input");
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