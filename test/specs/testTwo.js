import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page.js'
import OnboardPage from '../pageobjects/onboard.page.js'
import CreatePage from '../pageobjects/create.page.js'
import SuccessPage from '../pageobjects/success.page.js'
import PortfolioPage from '../pageobjects/portfolio.page.js'
import Logger from '../../logger.js'

describe('Test #2', () => {
     it('verifies Solflare Twitter page', async () => {

        Logger.info("Opening Solflare website");
        await HomePage.open();
        Logger.info("Clicking Access Wallet button");
        await HomePage.clickAccessWalletButton ();
        Logger.info("Clicking I Need a Wallet button");
        await OnboardPage.clickINeedANewWalletButton ();

        Logger.info("Collecting the recovery phrase");
        const completeRecoveryPhrase = await CreatePage.compilePhraseString();
        const phraseArray = completeRecoveryPhrase.split(' ');
        Logger.info("Evoga: " + phraseArray);

        Logger.info("Clicking the I Saved my Recovery Phrase button");
        await CreatePage.clickSavedMyRecoveryPhraseButton ();
        Logger.info("Populating phrase fields with recovery phrase");
        await CreatePage.populatePhraseFields (...phraseArray);
        Logger.info("Clicking on the Continue button");
        await CreatePage.clickContinueButton();
        Logger.info("Entering and confirming the password");
        await CreatePage.enterPassword("Test1234!");
        await CreatePage.confirmPassword("Test1234!");
        await CreatePage.clickContinueButton();

        Logger.info("Clicking the Follow Us on Twitter button");
        await SuccessPage.clickFollowUsOnTwitterButton();
        Logger.info("Switching to Twitter tab and checking if it's the correct page");
        await browser.pause(5000); // not a fan but test started failing all of a sudden, worked nice but then decided not to wait
        await browser.switchWindow("https://twitter.com/solflare_wallet"); // for the page to load anymore
        await expect(browser).toHaveTitle('Solflare - The Solana Wallet (@solflare_wallet) / X');
        var tabIds = await browser.getWindowHandles(); // get handles of all open tabs - should be two at this point

        Logger.info("Closing the Twitter tab and verifying successful closure");
        await browser.closeWindow();
        var tabIds2 = await browser.getWindowHandles(); // get handles again; if closing the Twitter tab was successful, there should be only one
        await expect(tabIds2).not.toContain(tabIds[1]); // verify that Twitter tab handle is no longer in the array, i.e. it's closed
        Logger.info("Verifying that Portfolio page is opened");
        await browser.switchWindow(tabIds[0]);
        await expect(browser).toHaveUrl('https://solflare.com/portfolio'); // it should fail here
        })


})

