import { LightningElement } from 'lwc';

export default class CustomLightningCard extends LightningElement {
    handleSlotFooterCHange() {
        const footerElem = this.template.querySelector('footer')
        if(footerElem)
        footerElem.classList.remove('slds-hidden')
    }
}