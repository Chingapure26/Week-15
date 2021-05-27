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
        cartPage.CheckOut.click();
        check.FirstName.setValue('Rosario');
        check.LastName.setValue('Ayala');
        check.PostalCode.setValue('2000');
        check.ContinueBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
                
    })
})
describe("Check Finish order", ()=>{
 it("confirm", () =>{
     check2.Finish.click();
     browser.pause(2000);
     expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
 })
})


