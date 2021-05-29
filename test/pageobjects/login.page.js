const Page = require('./page');


class LoginPage extends Page {

    get inputUsername () { return $('#user-name') }
    get inputPassword () { return $('#password') }
    get btnLog () { return $('#login-button') }
    get MessError (){ return $('#login_button_container')}

    open () {
        return super.open('');
    }

    submit() {
        this.btnLog.click();
    }
}

module.exports = new LoginPage();

