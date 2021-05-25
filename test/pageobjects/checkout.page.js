const Page = require('./page');

class CheckOut extends Page {
  
    get FirstName(){ return $('#first-name') }
    get LastName(){ return $('#last-name')}
    get PostalCode (){ return $('#postal-code')}
    get ContinueBtn(){ return $('#continue')}
    get CancelBtn (){ return $('#cancel')}
    get ErrorMess (){ return $('#checkout_info_container').$$('h3')} 
}
module.exports = new CheckOut ();