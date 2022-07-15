import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class RecordEditCustom extends LightningElement {
    objectName = ACCOUNT_OBJECT
    inputValue=""
    handleChange(event) {
        this.inputValue=event.target.value
    }
    handleSubmit(event) {
// prevent default will not refresh the form that is the default action
        event.preventDefault()
//in this case we just have one value so we are not using querySelectAll
        const inputCmp = this.template.querySelector('lightning-input')
        const value =inputCmp.value
        if(!value.includes('Australia')) {
            inputCmp.setCustomValidity("The account name must include'Australia'")
        } else {
// clear the error message and get the fields 
            inputCmp.setCustomValidity("")
            const fields = event.detail.fields
// below Name is the API Name , if it is type it should fields.Type etc
            fields.Name = value
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputCmp.reportValidity()
    }
    successHandler(event) {
        const toastEvent = new ShowToastEvent({
            title:"Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        })
        this.dispatchEvent(toastEvent)
    }
    handleError(event) {
        const toastEvent = new ShowToastEvent({
            title:"Error creating Account",
            message: "Record ID: " + event.detail.id,
            variant: "error"
        })
        this.dispatchEvent(toastEvent)
    }
}