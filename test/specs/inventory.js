const inventoryPage = require('../pageobjects/inventory.page');
const InventoryPage = require('../pageobjects/inventory.page');


describe('Browser Load', () => {
    it("Open browser", () => {
        InventoryPage.open();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
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
    


})

describe("Inventory- item page", ()=> {
   it("check Tittle Link", ()=>{
        InventoryPage.TitleBackpackLink.click();
        browser.pause(1000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        browser.back();
    })

   it("Check Image Link",()=> {
       inventoryPage.ImgBackpacklink.click();
       browser.pause(1000);
       expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
   })
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

    it ("Back Btn", ()=> {
        InventoryPage.BackBtn.click();
        browser.pause(1000);
        expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    })
})







