import { LightningElement } from 'lwc';
import getAcountList from '@salesforce/apex/AccountController.getAcountList'
export default class ApexImperativeDemo extends LightningElement {
    accounts
    handleClick() {
        getAcountList().then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.error(error)
        })
    }
}