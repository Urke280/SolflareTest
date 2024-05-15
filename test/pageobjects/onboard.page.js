import { $ } from '@wdio/globals'
import Page from './page.js';

class OnboardPage extends Page {

    //SELECTORS

    get iNeedANewWalletButton () {
        return $("//button[@data-id='i_need_a_wallet_button']");
    }

    // METHODS

    async clickINeedANewWalletButton () {
        await this.iNeedANewWalletButton.click();
        console.log("Clicking Need Wallet");
    }

    open () {
        return super.open('onboard');
    }
}

export default new OnboardPage();
