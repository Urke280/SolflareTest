import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page.js'
import OnboardPage from '../pageobjects/onboard.page.js'
import CreatePage from '../pageobjects/create.page.js'
import SuccessPage from '../pageobjects/success.page.js'
import PortfolioPage from '../pageobjects/portfolio.page.js'
import Logger from '../../logger.js'

describe('Test #1', () => {
   it('should check if recovery phrase is copied correctly', async () => {

        Logger.info("Opening Solflare website");
        await HomePage.open();
        Logger.info("Clicking the Access Wallet Button");
        await HomePage.clickAccessWalletButton ();
        Logger.info("Clicking the I Need a Wallet button");
        await OnboardPage.clickINeedANewWalletButton ();
        Logger.info("Clicking the Copy button");
        await CreatePage.clickCopyButton ();
        Logger.info("Collecting the recovery phrase");
        const completeRecoveryPhrase = await CreatePage.compilePhraseString(); // get the complete phrase in a string
        Logger.info("Recovery phrase: " + completeRecoveryPhrase);
        Logger.info("Verifying copied recovery phrase");
        await expect(browser).toHaveClipboardText(completeRecoveryPhrase); // clipboard text should match the phrase

    })


})

