import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PortfolioPage extends Page {

    //SELECTORS

    get walletManagementButton () {
        return $("//div[./a[@href='/settings']]/button");
    }

    // METHODS

    async clickWalletManagementButton () {
        await this.walletManagementButton.click();
    }

    open () {
        return super.open('');
    }
}

export default new PortfolioPage();
