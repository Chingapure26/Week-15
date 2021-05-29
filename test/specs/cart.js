const cartPage = require('../pageobjects/cart.page');
const invent= require('../pageobjects/inventory.page');
const check= require ('../pageobjects/checkout.page');
const check2= require('../pageobjects/checkout-step-two.page');

describe('Browser Load', () => {
    it( "Init page", ()=>{
        invent.open();
        invent.AddbackpacktBtn.click();
        invent.AddlightBtn.click();
        invent.CartLink.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
                
    })
})



describe("Remove card", ()=> {
    it("right amount", ()=> {
        invent.RemoveBtn.click();
        expect(invent.CartBadgeBtn).toHaveText('1');
    })
})

describe('Buttons', ()=> {
    it("Return Shop", ()=> {
        cartPage.ReturnShop.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        browser.back();
    })
    it("Checkout", ()=> {
        cartPage.CheckOut.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    })
})

describe("Customer information", ()=> {
    describe("Empty fiels", ()=> {
         it("Empty all fiels", ()=> {
             check.ContinueBtn.click();
             expect(check.ErrorMess).toHaveText('Error: First Name is required');
         })
         it("Empty Last Name and Zip Code", ()=>{
             browser.refresh();
             check.FirstName.setValue('Rosario');
             check.ContinueBtn.click();
             expect(check.ErrorMess).toHaveText('Error: Last Name is required');
         })
         it("Empty Zip Code", ()=>{
             browser.refresh();
             check.FirstName.setValue('Rosario');
             check.LastName.setValue('Ayala');
             check.ContinueBtn.click();
             expect(check.ErrorMess).toHaveText('Error: Postal Code is required');
        })  
    })
})
 
 
 
describe('Buttons', ()=> {
     
    it("Cancel information", ()=> {    
        check.CancelBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        browser.back();
    })
    
    it("Continue", ()=> {
        browser.refresh();
        check.FirstName.setValue('Rosario');
        check.LastName.setValue('Ayala');
        check.PostalCode.setValue('2000');
        check.ContinueBtn.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    })
})

describe("Check Finish order", ()=>{
    it("Finish", () =>{
        check2.Finish.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        browser.back();
    })
    
    it("Cancel", ()=> {    
        check.CancelBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        
    })
})
 


