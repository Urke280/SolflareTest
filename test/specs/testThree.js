import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page.js'
import OnboardPage from '../pageobjects/onboard.page.js'
import CreatePage from '../pageobjects/create.page.js'
import SuccessPage from '../pageobjects/success.page.js'
import PortfolioPage from '../pageobjects/portfolio.page.js'
import WalletManagementPage from '../pageobjects/wallet.management.page.js'
import Logger from '../../logger.js'

describe('Test #3', () => {

    it('adds new wallets and verifies they exist in Portfolio', async () => {

        Logger.info("Opening Solflare website");
        await HomePage.open();
        Logger.info("Clicking Access Wallet button");
        await HomePage.clickAccessWalletButton ();
        Logger.info("Clicking I Need a Wallet button");
        await OnboardPage.clickINeedANewWalletButton ();

        Logger.info("Collecting the recovery phrase");
        const completeRecoveryPhrase = await CreatePage.compilePhraseString(); // get the complete recovery phrase
        const phraseArray = completeRecoveryPhrase.split(' '); // put the phrase in an array split by space character

        Logger.info("Clicking the I Saved my Recovery Phrase button");
        await CreatePage.clickSavedMyRecoveryPhraseButton ();
        Logger.info("Populating phrase fields with recovery phrase");
        await CreatePage.populatePhraseFields (...phraseArray); // use the phrase array as arguments for the method
        Logger.info("Clicking on the Continue button");
        await CreatePage.clickContinueButton();
        Logger.info("Entering and confirming the password");
        await CreatePage.enterPassword("Test1234!");
        await CreatePage.confirmPassword("Test1234!");
        await CreatePage.clickContinueButton();

        Logger.info("Clicking the Enter Solana button");
        await SuccessPage.clickEnterSolanaButton();
        Logger.info("Clicking the Wallet Management button");
        await PortfolioPage.clickWalletManagementButton();

        Logger.info("Verifying that Main Wallet is displayed");
        expect(WalletManagementPage.mainWalletListItem).toBeDisplayed();
        Logger.info("Performing Wallet Management actions")
        await WalletManagementPage.clickAddButton();
        await WalletManagementPage.clickManageRecoveryPhraseButton();
        Logger.info("Verify that the first toggle is set to ON and disabled");
        await expect (WalletManagementPage.firstToggle).toHaveAttribute("data-state", "checked"); // separated these two
        await expect (WalletManagementPage.firstToggle).toHaveAttribute("data-disabled"); // because only one might be working
        Logger.info("Setting the third and fourth toggle to ON");
        await WalletManagementPage.setThirdToggleToOn();
        await WalletManagementPage.setFourthToggleToOn();

        Logger.info("Collecting wallet codes");
        const mainWalletCode = await WalletManagementPage.getMainWalletCode(); // take note of the wallet codes
        const wallet3Code = await WalletManagementPage.getThirdWalletCode(); // for main and other two wallets
        const wallet4Code = await WalletManagementPage.getFourthWalletCode();
        Logger.info("Saving the changes");
        await WalletManagementPage.clickSaveButton();

        Logger.info("Verifying all wallets are present");
        expect (WalletManagementPage.mainWalletSubtitle).toHaveText(mainWalletCode); // compare text of wallet elements
        expect (WalletManagementPage.secondWalletSubtitle).toHaveText(wallet3Code); // to collected codes of wallets
        expect (WalletManagementPage.thirdWalletSubtitle).toHaveText(wallet4Code);

        })

})
























/*import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page.js'
import OnboardPage from '../pageobjects/onboard.page.js'
import CreatePage from '../pageobjects/create.page.js'
import SuccessPage from '../pageobjects/success.page.js'
import PortfolioPage from '../pageobjects/portfolio.page.js'
import WalletManagementPage from '../pageobjects/wallet.management.page.js'
import Logger from '../../logger.js'

describe('Test #3', () => {

    it('adds new wallets and verifies they exist in Portfolio', async () => {
        Logger.info("Open Solflare website");
        await HomePage.open();
        Logger.info("Clicking the Access Wallet button");
        await HomePage.clickAccessWalletButton ();
        Logger.info("Clicking the I Need a Wallet button");
        await OnboardPage.clickINeedANewWalletButton ();

        Logger.info("Clicking the I Saved my Recovery Phrase button");
        await CreatePage.clickSavedMyRecoveryPhraseButton ();
        Logger.info("Populating phrase fields with recovery phrase");
        await CreatePage.populatePhraseFields (...phraseArray);
        Logger.info("Clicking on the Continue button");
        Logger.info("Entering and confirming password");
        await CreatePage.enterPassword("Test1234!");
        await CreatePage.confirmPassword("Test1234!");
        await CreatePage.clickContinueButton();
        Logger.info("Clicking the Enter Solana button");
        await SuccessPage.clickEnterSolanaButton();
        Logger.info("Clicking the Wallet Management button");
        await PortfolioPage.clickWalletManagementButton();
        //await.expect(PortfolioPage.mainWalletListItem).toBeDisplayed();
        await WalletManagementPage.clickAddButton();
        await WalletManagementPage.clickManageRecoveryPhraseButton();
        Logger.info("Verify that the first toggle is set to ON and disabled");
        await expect (WalletManagementPage.firstToggle).toHaveAttribute("data-state", "checked");
        await expect (WalletManagementPage.firstToggle).toHaveAttribute("data-disabled");
        Logger.info("Setting the third and fourth toggle to ON");
        await WalletManagementPage.toggleThirdToggle();
        await WalletManagementPage.toggleFourthToggle();
    /*    const mainWallet = await PortfolioPage.getMainWalletCode();   //await $("//div[@data-test-id='virtuoso-item-list']/div[@data-index='0']").getText();
        const wallet3 = await PortfolioPage.getThirdWalletCode();   //$("//div[@data-test-id='virtuoso-item-list']/div[@data-index='2']").getText();
        const wallet4 = await PortfolioPage.getFourthWalletCode();   //$("//div[@data-test-id='virtuoso-item-list']/div[@data-index='3']").getText();
        Logger.info("Saving the changes");
        await PortfolioPage.clickSaveButton();
        Logger.info("Verifying all wallets are present");
        const firstWallet = await $("//div[contains(@class,'walletManagementContent_w')]//div[contains(@class,'listSection_l')]//div[contains(@class,'listItemR')][1]//div[contains(@class,'listItemSubtitle')]");
        const secondWallet = await $("//div[contains(@class,'walletManagementContent_w')]//div[contains(@class,'listSection_l')]//div[contains(@class,'listItemR')][2]//div[contains(@class,'listItemSubtitle')]");
        const thirdWallet = await $("//div[contains(@class,'walletManagementContent_w')]//div[contains(@class,'listSection_l')]//div[contains(@class,'listItemR')][3]//div[contains(@class,'listItemSubtitle')]");
        expect (firstWallet).toHaveText(mainWallet);
        expect (secondWallet).toHaveText(wallet3);
        expect (thirdWallet).toHaveText(wallet4);

        })

})*/

