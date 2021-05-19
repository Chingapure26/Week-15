const loginPage = require('../pageobjects/login.page');


describe('Browser Load', () => {
    beforeAll("Open browser", () => {
        loginPage.open();
    });
    it("imputs load", ()=>{
        expect(LoginPage.inputUsername).toExist();
        expect(loginPage.inputPassword).toExist();
        expect(loginPage.btnLog).toExist();
    })
});

describe('Empty fields', ()=> {
    beforeAll("Refresh browser", () => {
        browser.refresh();
    });

    it("Empty user and pass", ()=> {
        loginPage.inputUsername('');
        loginPage.inputPassword('');
        LoginPage.submit();
        browser.pause(2000);
        expect(LoginPage.MessError).toHaveText('Epic sadface: Username is required');
    }) 

    it("Empty user", () => {
        loginPage.inputUsername('');
        loginPage.inputPassword('secret_sauce');
        loginPage.submit();
        browser.pause(2000);
        expect(LoginPage.MessError).toHaveText('Epic sadface: Username is required');
    }) 

    it("Empty pass", () => {
        loginPage.inputUsername('standard_user');
        loginPage.inputPassword(' ');
        loginPage.submit();
        browser.pause(2000);
        expect(LoginPage.MessError).toHaveText('Epic sadface: Password is required');
    })
})

describe("Wrong values", () =>{
    beforeAll("Refresh browser", () => {
        browser.refresh();
    });

    it("Wrong User", ()=> {
        loginPage.inputUsername('1234');
        loginPage.inputPassword('secret_sauce');
        loginPage.submit();
        browser.pause(2000);
        expect(LoginPage.MessError).toHaveText('Epic sadface: Username and password do not match any user in this service');
    }) 

    it("Wrong Pass", ()=> {
        loginPage.inputUsername('problem_user');
        loginPage.inputPassword('1234');
        loginPage.submit();
        browser.pause(2000);
        expect(LoginPage.MessError).toHaveText('Epic sadface: Username and password do not match any user in this service');
    }) 

    it("Wrong pass and user", ()=> {
        loginPage.inputUsername('wrong_user');
        loginPage.inputPassword('1234');
        loginPage.submit();
        browser.pause(2000);
        expect(LoginPage.MessError).toHaveText('Epic sadface: Username and password do not match any user in this service');
    })
})

describe( "Special conditions of users", () =>{
    beforeAll("Refresh browser", () => {
        browser.refresh();
    });

    it("Case 1: Locked Out User", ()=> {
        loginPage.inputUsername('locked_out_user');
        loginPage.inputPassword('secret_sauce');
        loginPage.submit();
        browser.pause(2000);
        expect(LoginPage.MessError).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    })

    it("Case 2: Performance glitch user", ()=> {
        loginPage.inputUsername('performance_glitch_user');
        loginPage.inputPassword('secret_sauce');
        loginPage.submit();
        browser.setTimeout({
            'pageLoad': 4000,
        });
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    }); 
})

describe("Valid pass and User",()=>{

    beforeAll("Refresh browser", () => {
        browser.refresh();
    });

    it("Good conditions", ()=>{
    loginPage.inputUsername('standard_user');
    loginPage.inputPassword('secret_sauce');
    loginPage.submit();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
})
