import { LightningElement, wire } from 'lwc';
import getAcountList from '@salesforce/apex/AccountController.getAcountList'
export default class ApexWireDemo extends LightningElement {
    accountList
    @wire(getAcountList)
     accounts

    @wire(getAcountList)
    accountsHandler({data, error}) {
        if (data) {
            this.accountList = data.map(item=>{ 
                let newType = item.Type === 'Customer - Channel' ? 'Channel' :
                item.Type === 'Customer - Direct' ? 'Direct' :'-------'
                return {...item, newType}
            })
        }
        if(error) {
            console.error(error)
        }
    }
}