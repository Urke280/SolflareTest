import { $ } from '@wdio/globals'
import Page from './page.js';

class AccessPage extends Page {

    // SELECTORS

    get needWalletButton () {
        return $('//button[@data-id="i_need_a_wallet_button"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    // METHODS

    async clickAccessWalletButton () {
        await this.accessWalletButton.click();
    }

    open () {
        return super.open('create');
    }
}

export default new AccessPage();
