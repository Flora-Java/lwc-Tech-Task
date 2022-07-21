import { LightningElement, wire } from 'lwc';
import getAllLeads from '@salesforce/apex/LeadsController.getAllLeads'
import getOpenNotContactedLeads from '@salesforce/apex/LeadsController.getOpenNotContactedLeads'
import getWorkingContactedLeads from '@salesforce/apex/LeadsController.getWorkingContactedLeads'
import getClosedConvertedLeads from '@salesforce/apex/LeadsController.getClosedConvertedLeads'
import getClosedNotConvertedLeadsads from '@salesforce/apex/LeadsController.getClosedNotConvertedLeads'
const COLUMNS = [
    {label: 'Lead Name', fieldName:'Name'},
    {label: 'Company', fieldName:'Company'},
    {label: 'Email', fieldName:'Email', type:'email'},
    {label: 'Phone', fieldName:'Phone', type: 'phone'},
    {label: 'Status', fieldName:'Status', type: 'text'} 
]
export default class LeadsFilter extends LightningElement {
    leads
    leadnotcontacted
    leadsworkingcontacted
    leadsclosedConv
    leadsClosedNotConv
    columns = COLUMNS
   handleAllClick() {
        getAllLeads().then(result=>{
            this.leads = result
        }).catch(error=>{
            console.error(error)
        })
   }
   handleOpenNotContactedClick() {
        getOpenNotContactedLeads().then(result=>{
            this.leadnotcontacted = result
        }).catch(error=>{
            console.error(error)
        })
   }
   handleWorkingContactedClick() {
        getWorkingContactedLeads().then(result=>{
            this.leadsworkingcontacted = result
        }).catch(error=>{
            console.error(error)
        })
    }
    handleClosedConvertedClick() {
        getClosedConvertedLeads().then(result=>{
            this.leadsclosedConv = result
        }).catch(error=>{
            console.error(error)
        })
    }
    handleClosedNotConvertedClick() {
        getClosedNotConvertedLeadsads().then(result=>{
            this.leadsClosedNotConv = result
        }).catch(error=>{
            console.error(error)
        })
    }
}