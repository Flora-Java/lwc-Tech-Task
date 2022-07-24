import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import READER_OBJECT from '@salesforce/schema/Reader__c'
import FULL_NAME from '@salesforce/schema/Reader__c.Full_Name__c'
import EMAIL from '@salesforce/schema/Reader__c.Email__c'
import SUBJECT from '@salesforce/schema/Reader__c.Subject__c'
import BOOKS_BORROWED from '@salesforce/schema/Reader__c.Books_Borrowed__c'


export default class AddReaders extends LightningElement {
    objectName = READER_OBJECT
    fieldList = [FULL_NAME, EMAIL, SUBJECT]

    successHandler(event) {
        const toastEvent = new ShowToastEvent({
            title:"Book created",
            message:"Record ID: " + event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent)
    }

}