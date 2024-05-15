import { $ } from '@wdio/globals'
import Page from './page.js';

class WalletManagementPage extends Page {

    //SELECTORS


    get mainWalletListItem () {
        return $("//div[@role='dialog' and .//div[@data-id='page-title']]//span/span[string()='Main Wallet']");
    }

    get addButton () {
        return $("//div[./div[@data-id='page-title']]/button");
    }

    get saveButton () {
        return $("//button[string()='Save']");
    }

    get manageRecoveryPhraseButton () {
        return $("//div[contains(@class,'listItemLeft') and .//span[string()='Manage recovery phrase']]");
    }

    get firstToggle () {
        return $("//div[@data-test-id='virtuoso-item-list']/div[@data-index='0']//button");
    }

    get thirdToggle () {
        return $("//div[@data-test-id='virtuoso-item-list']/div[@data-index='2']//button");
    }

    get fourthToggle () {
        return $("//div[@data-test-id='virtuoso-item-list']/div[@data-index='3']//button");
    }

    async getMainWalletCode () {
        return await $("//div[@data-test-id='virtuoso-item-list']/div[@data-index='0']").getText();
    }

    async getThirdWalletCode () {
        return await $("//div[@data-test-id='virtuoso-item-list']/div[@data-index='2']").getText();
    }

    async getFourthWalletCode () {
        return await $("//div[@data-test-id='virtuoso-item-list']/div[@data-index='3']").getText();
    }

    get mainWalletSubtitle () {
        return $("//div[contains(@class,'walletManagementContent_w')]//div[contains(@class,'listSection_l')]//div[contains(@class,'listItemR')][1]//div[contains(@class,'listItemSubtitle')]");
    }

    get secondWalletSubtitle () {
        return $("//div[contains(@class,'walletManagementContent_w')]//div[contains(@class,'listSection_l')]//div[contains(@class,'listItemR')][2]//div[contains(@class,'listItemSubtitle')]");
    }

    get thirdWalletSubtitle () {
        return  $("//div[contains(@class,'walletManagementContent_w')]//div[contains(@class,'listSection_l')]//div[contains(@class,'listItemR')][3]//div[contains(@class,'listItemSubtitle')]");
    }

    // METHODS

    async clickAddButton () {
        await this.addButton.click();
    }

    async clickSaveButton () {
        await this.saveButton.click();
    }

    async clickManageRecoveryPhraseButton () {
        await this.manageRecoveryPhraseButton.click();
    }

    async setThirdToggleToOn () {
        await this.thirdToggle.click();
    }

    async setFourthToggleToOn () {
        await this.fourthToggle.click();
    }

    open () {
        return super.open('');
    }
}

export default new WalletManagementPage();
