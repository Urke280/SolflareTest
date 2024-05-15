import { $ } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {

    get accessWalletButton () {
        return $('//a[string()="Access wallet"]');
    }

    async clickAccessWalletButton () {
        await this.accessWalletButton.click();
    }

    open () {
        return super.open('');
    }
}

export default new HomePage();
