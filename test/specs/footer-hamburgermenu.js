const invent= require('../pageobjects/inventory.page');


describe('Browser Load', () => {
    beforeAll("Open browser", () => {
        invent.open();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
    it("Imputs load", ()=>{
        expect(invent.BurgerBtn).toExist();
        expect(invent.ConteinerBurgerBtn).toExist();
        expect(invent.CartLink).toExist();
        expect(invent.BurgerCrossBtn).toExist();
        expect(invent.ProductLink).toExist();
        expect(invent.TwitLink).toExist();
        expect(invent.FaceLink).toExist();
        expect(invent.LinkedLink).toExist();
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