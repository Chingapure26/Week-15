const cartPage = require('../pageobjects/cart.page');
const invent= require('../pageobjects/inventory.page');

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



describe("Remove card", ()=> {
    it("right amount", ()=> {
        invent.RemoveBtn.click();
        expect(invent.CartBadgeBtn).toHaveText('1');
    })
})

describe('Buttons', ()=> {
    it("Checkout", ()=> {
        cartPage.CheckOut.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    })
    it("Return Shop", ()=> {
        browser.back();
        cartPage.ReturnShop.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
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

