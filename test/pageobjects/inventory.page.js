
const LoginPage = require('../pageobjects/login.page');
const Page = require('./page');


class InventoryPage extends Page {
  
    get BurgerBtn () { return $('#react-burger-menu-btn') } 
    get ConteinerBurgerBtn(){return $('#menu_button_container ')}
    get AllitemsLink () { return $('#inventory_sidebar_link') }
    get AboutLink () { return $('#about_sidebar_link') }
    get LogoutLink () { return $('#logout_sidebar_link') }
    get ResetLink () { return $('#reset_sidebar_link') }
    get BurgerCrossBtn () { return $('#react-burger-cross-btn') }
    get AddbackpacktBtn () { return $('#add-to-cart-sauce-labs-backpack')}
    get AddlightBtn () { return $('#add-to-cart-sauce-labs-bike-light')}
    get CartLink () { return $('.shopping_cart_link') }
    get SorterBtn () { return $('.product_sort_container') }
    get ProductLink () { return $('.inventory_item_name') }
    get ProductImg () { return $('.inventory_item_img')}
    get ProductPrice () { return $('.inventory_details_price')}
    get TwitLink () { return $('.social_twitter a')}
    get FaceLink () { return $('.social_facebook a')}
    get LinkedLink () { return $('.social_linkedin a')}
    get Saucedemo(){ return $('.bm-item menu-item a')}
    get CartBadgeBtn () { return $('.shopping_cart_badge') }
    get RemoveBtn () { return $('#remove-sauce-labs-backpack')}
    get TitleBackpackLink(){ return $("=Sauce Labs Backpack")}
    get ImgBackpacklink() {return $('#item_4_img_link')}
    get BackBtn(){ return $('#back-to-products')}
    

    
    open () {
        super.open('');
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.submit();

    }

    
}

module.exports = new InventoryPage();