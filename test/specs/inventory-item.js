const LoginPage = require('../pageobjects/login.page');
const Items = require('../pageobjects/inventory-item.page');
const invet= require('../pageobjects/inventory.page');

describe('Browser Load', () => {
    beforeAll("Open browser", () => {
        invet.open();
        Items.TitleBackpackLink.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
    });
    it("Imputs load", ()=>{
        expect(Items.BurgerBtn).toExist();
        expect(Items.CartLink).toExist();
        expect(Items.AddbackpacktBtn).toExist();
        expect(Items.TwitLink).toExist();
        expect(Items.FaceLink).toExist();
        expect(Items.LinkedLink).toExist();
        expect(Items.BackBtn).toExist();
    })
})

describe('Burger Elements', ()=> {
    it ("First Element", ()=>{
        Items.BurgerBtn.click();
        Items.AllitemsLink.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        browser.back();
    })

    it ("Second Element", ()=>{
        Items.BurgerBtn.click();
        Items.AboutLink.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://saucelabs.com/');
    })

    it ("Third Element", ()=>{
        browser.back();
        Items.BurgerBtn.click();
        Items.LogoutLink.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/');
    })

    it ("Fourth Element", ()=>{
        Items.open();
        Items.TitleBackpackLink.click();
        Items.AddbackpacktBtn.click();   
        Items.BurgerBtn.click();
        Items.ResetLink.click();
        browser.pause(2000);
        expect(Items.CartBadgeBtn).not.toBeDisplayed();
    })
})

describe('Cart',()=> {
    it("Cart", ()=>{
    Items.CartLink.click();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    browser.back();
    })
})

describe("Buy btn", ()=> {
    it("Add to cart", ()=>{
        Items.AddbackpacktBtn.click();
        browser.pause(2000);
        expect(Items.CartBadgeBtn).toHaveText('1');
    })

    it("Remove to cart", ()=>{
        Items.RemoveBtn.click();
        browser.pause(2000);
        expect(Items.CartBadgeBtn).not.toBeDisplayed();     
    })
})

describe("Social media", ()=>{
    it("Twitter", ()=> {
        expect(Items.TwitLink).toHaveLinkContaining('https://twitter.com/saucelabs');
    })

    it("Facebook", ()=>{
        expect(Items.FaceLink).toHaveLinkContaining('https://www.facebook.com/saucelabs');  
    })

    it("LinkedIn", ()=>{
        expect(Items.LinkedLink).toHaveLinkContaining('https://www.linkedin.com/company/sauce-labs/');
    })
})