import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    //two ways data binding
    fullName ="Hero to Zero"
    title = "Aura"
    changehandler (event) {
        this.title = event.target.value
    }
    //@track example
    address ={
        city: "Cordoba",
        postalCOde:47325,
        country: "Mexico"
    }

    trackhandler(event) {
        this.address.city = {...this.address, "city":event.target.value}  //this option is better when handling objects and arrays
        // this.address.city = event.target.value  if we use this option then we need to ad@track to address
    }
    //getter example
    users = ["Maria","Chapis","Mimi"]
    num1 = 10
    num2 = 20

    get firstUser() {
        return this.users[0].toUpperCase()
    }
    get multiply() {
        return this.num1*this.num2
    }

}