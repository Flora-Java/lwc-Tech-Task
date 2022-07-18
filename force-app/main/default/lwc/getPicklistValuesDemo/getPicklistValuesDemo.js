import { LightningElement, wire } from 'lwc';
import {getObjectInfo, getPicklistValues} from 'lightning/uiObjectInfoApi'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import ACCOUNT_FIELD from '@salesforce/schema/Account'
export default class GetPicklistValuesDemo extends LightningElement {
    selectedIndustry = '';
    selectedType = ''
    industryOptions = []
    typeOptions = []

    @wire(getObjectInfo, {objectApiName: ACCOUNT_FIELD})
    objectInfo

    @wire(getPicklistValues, {recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName:INDUSTRY_FIELD})
    typePicklist({data,error}) {
        if(data) {
            console.log(data)
            this.typeOptions = [...this.generatePicklist(data)]
        }
        if(error) {
            console.error(error)
        }
    }

    generatePicklist(data){
        return data.values.map(items=>({label: items.label, value: items.value}))
    }
    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }
    // second picklist for type
    @wire(getPicklistValues, {recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName:INDUSTRY_FIELD})
    industryPicklist({data,error}) {
        if(data) {
            console.log(data)
            this.industryOptions = [...this.generatePicklist(data)]
        }
        if(error) {
            console.error(error)
        }
    }
    handleTypeChange(event) {
        this.selectedType = event.detail.value;
    }
}