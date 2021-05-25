const cartPage = require('../pageobjects/cart.page');
const invent= require('../pageobjects/inventory.page');
const check= require ('../pageobjects/checkout.page');

describe('Browser Load', () => {
    it( "Init page", ()=>{
        invent.open();
        invent.AddbackpacktBtn.click();
        invent.AddlightBtn.click();
        invent.CartLink.click();
        cartPage.CheckOut.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
                
    })
})

describe("Social media", ()=>{
    it("Twitter", ()=> {
        expect(invent.TwitLink).toHaveLinkContaining('https://twitter.com/saucelabs');
    })

    it("Facebook", ()=>{
        expect(invent.FaceLink).toHaveLinkContaining('https://www.facebook.com/saucelabs');  
    })

    it("LinkedIn", ()=>{
        expect(invent.LinkedLink).toHaveLinkContaining('https://www.linkedin.com/company/sauce-labs/');
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
    it("Correct information", ()=> {
        browser.refresh();
        check.FirstName.setValue('Rosario');
        check.LastName.setValue('Ayala');
        check.PostalCode.setValue('2000');
        check.ContinueBtn.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    })

    it("Cancel information", ()=> {
        browser.back();
        check.CancelBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    })
})


describe('Burger Elements', ()=> {
    it ("Second Element", ()=>{
         invent.BurgerBtn.click();
         invent.AboutLink.click();
         browser.pause(2000);
         expect(browser).toHaveUrl('https://saucelabs.com/');
    })
 
     it ("Third Element", ()=>{
         browser.back();
         invent.BurgerBtn.click();
         invent.LogoutLink.click();
         browser.pause(2000);
         expect(browser).toHaveUrl('https://www.saucedemo.com/');
    })
 
    it ("Fourth Element", ()=>{
         invent.open();
         invent.BurgerBtn.click();
         invent.ResetLink.click();
         browser.pause(2000);
         expect(invent.CartBadgeBtn).not.toBeDisplayed();
    })
})