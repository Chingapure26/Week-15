const cartPage = require('../pageobjects/cart.page');
const invent= require('../pageobjects/inventory.page');
const check= require ('../pageobjects/checkout.page');
const check2= require('../pageobjects/checkout-step-two.page');

describe("Page 1: Login", ()=>{
    it('Sucess Login', ()=> {
        invent.open();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
})

describe("Page 2: Select Order", ()=>{
    it('Add two Products', ()=>{
        invent.AddbackpacktBtn.click();
        invent.AddlightBtn.click();
        expect(invent.CartBadgeBtn).toHaveText('2');
    })
})

describe("Page 3: Cart", ()=>{
    it('Cart', ()=>{
        invent.CartLink.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    })
})

describe("Pages 4-5: Checkout", ()=>{
    it("CheckOut 1/2", ()=>{
        cartPage.CheckOut.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        check.FirstName.setValue('Mauro');
        check.LastName.setValue('Ayala');
        check.PostalCode.setValue('2000');
    })

    it("CheckOut 2/2", ()=>{
        check.ContinueBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    })
})

describe("Page 6: Finish Order", ()=>{
    it("Finish", ()=>{
        check2.Finish.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        check2.backHome.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
})