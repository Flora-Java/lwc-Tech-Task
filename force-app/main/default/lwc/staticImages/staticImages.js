import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image'
import USER_PENGUIN_IMG from '@salesforce/resourceUrl/user_penguin'
export default class StaticImages extends LightningElement {
    userImage = USER_IMAGE

    userPenguin = USER_PENGUIN_IMG
}