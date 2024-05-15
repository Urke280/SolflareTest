import { $ } from '@wdio/globals'
import Page from './page.js';

class SuccessPage extends Page {

    // SELECTORS

    get followUsOnTwitterButton () {
        return $("//button[contains(string(), 'Follow us')]");
    }

    get enterSolanaButton () {
        return $("//button[string() = 'Enter Solana']");
    }

    // METHODS

    async clickFollowUsOnTwitterButton () {
        await this.followUsOnTwitterButton.click();
    }

    async clickEnterSolanaButton () {
        await this.enterSolanaButton.click();
    }

    open () {
        return super.open('');
    }
}

export default new SuccessPage();
