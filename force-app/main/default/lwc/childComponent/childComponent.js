import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
 itemSelected
 @api inputItem

 fireSelectEvent(event) {
    this.itemSelected = event.target.label
    console.log(event.target.label)
    const getEvent = new CustomEvent("inputitemselect", {
        detail: this.itemSelected
    })
    console.log("input item",this.itemSelected)
    this.dispatchEvent(getEvent)
 }
}