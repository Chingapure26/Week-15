const Page = require('./page');

class CheckOut2 extends Page {

    get Price(){ return $$(".inventory_item_price")}
    get Subtotal() {return $(".summary_subtotal_label")}
    get Tax () {return $(".summary_tax_label")}
    get Total (){return $(".summary_total_label")}
    get LastName(){ return $('#last-name')}
    get Finish(){return $("#finish")}

}
module.exports = new CheckOut2 ();