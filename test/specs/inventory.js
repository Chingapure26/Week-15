const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('Browser Load', () => {
    beforeAll("Open browser", () => {
        InventoryPage.open();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
    it("Imputs load", ()=>{
        expect(InventoryPage.BurgerBtn).toExist();
        expect(InventoryPage.ConteinerBurgerBtn).toExist();
        expect(InventoryPage.CartLink).toExist();
        expect(InventoryPage.BurgerCrossBtn).toExist();
        expect(InventoryPage.ProductLink).toExist();
        expect(InventoryPage.TwitLink).toExist();
        expect(InventoryPage.FaceLink).toExist();
        expect(InventoryPage.LinkedLink).toExist();
    })
})

describe('Burger Elements', ()=> {
    it ("Second Element", ()=>{
        InventoryPage.BurgerBtn.click();
        InventoryPage.AboutLink.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://saucelabs.com/');
    })

    it ("Third Element", ()=>{
        browser.back();
        InventoryPage.BurgerBtn.click();
        InventoryPage.LogoutLink.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/');
    })

    it ("Fourth Element", ()=>{
        InventoryPage.open();
        InventoryPage.AddbackpacktBtn.click();
        InventoryPage.AddlightBtn.click();
        browser.pause(2000);
        expect(InventoryPage.CartBadgeBtn).toHaveText('2');
        InventoryPage.BurgerBtn.click();
        InventoryPage.ResetLink.click();
        browser.pause(2000);
        expect(InventoryPage.CartBadgeBtn).not.toBeDisplayed();
    })
})

describe('Cart',()=> {
    it("Cart", ()=>{
    InventoryPage.CartLink.click();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    browser.back();
    })
    
})

describe('Sorter', ()=>{
    it("Order by A to Z", ()=>{
    InventoryPage.SorterBtn.click();
    InventoryPage.SorterBtn.$$('option')[`${0}`].click();
    expect(InventoryPage.ProductLink.getText()).toEqual("Sauce Labs Backpack");
    })

    it("Order by Z to A", ()=>{
        InventoryPage.SorterBtn.click();
        InventoryPage.SorterBtn.$$('option')[`${1}`].click();
        expect(InventoryPage.ProductLink.getText()).toEqual("Test.allTheThings() T-Shirt (Red)");
    })

    it("Order by Price How to high", ()=>{
        InventoryPage.SorterBtn.click();
        InventoryPage.SorterBtn.$$('option')[`${2}`].click();
        expect(InventoryPage.ProductLink.getText()).toEqual("Sauce Labs Onesie");
    })

    it("Order by Price High to How", ()=>{
        InventoryPage.SorterBtn.click();
        InventoryPage.SorterBtn.$$('option')[`${3}`].click();
        expect(InventoryPage.ProductLink.getText()).toEqual("Sauce Labs Fleece Jacket");
    })

})
/* (1,1) Fila 1, columna 1.*/  
describe("Test on element (1,1)", ()=> {
    it("Add to cart", ()=>{
        InventoryPage.AddbackpacktBtn.click();
        browser.pause(2000);
        expect(InventoryPage.CartBadgeBtn).toHaveText('1');
    })

    it("Remove to cart", ()=>{
        InventoryPage.RemoveBtn.click();
        browser.pause(2000);
        expect(InventoryPage.CartBadgeBtn).not.toBeDisplayed();     
    })

   it("Product tittle link", ()=> {
        InventoryPage.TitleBackpackLink.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        browser.back();
    })

    it("Product Image Link", ()=> {
        InventoryPage.ImgBackpacklink.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        browser.back();
    })
})

describe("Social media", ()=>{
    it("Twitter", ()=> {
        expect(InventoryPage.TwitLink).toHaveLinkContaining('https://twitter.com/saucelabs');
    })

    it("Facebook", ()=>{
        expect(InventoryPage.FaceLink).toHaveLinkContaining('https://www.facebook.com/saucelabs');  
    })

    it("LinkedIn", ()=>{
        expect(InventoryPage.LinkedLink).toHaveLinkContaining('https://www.linkedin.com/company/sauce-labs/');
    })
})

