import { $ } from '@wdio/globals'
import Page from './page.js';

class CreatePage extends Page {

     get copyButton () {
        return $("//button[string()='Copy']");
     }

     get savedMyRecoveryPhraseButton () {
        return $("//button[string()='I SAVED MY RECOVERY PHRASE']");
     }

     get phraseInput01 () {
        return $("//input[@id='mnemonic-input-0']")
     }

     get phraseInput02 () {
        return $("//input[@id='mnemonic-input-1']")
     }

     get phraseInput03 () {
        return $("//input[@id='mnemonic-input-2']")
     }

     get phraseInput04 () {
        return $("//input[@id='mnemonic-input-3']")
     }

     get phraseInput05 () {
        return $("//input[@id='mnemonic-input-4']")
     }

     get phraseInput06 () {
        return $("//input[@id='mnemonic-input-5']")
     }

     get phraseInput07 () {
        return $("//input[@id='mnemonic-input-6']")
     }

     get phraseInput08 () {
        return $("//input[@id='mnemonic-input-7']")
     }

     get phraseInput09 () {
        return $("//input[@id='mnemonic-input-8']")
     }

     get phraseInput10 () {
        return $("//input[@id='mnemonic-input-9']")
     }

     get phraseInput11 () {
        return $("//input[@id='mnemonic-input-10']")
     }

     get phraseInput12 () {
        return $("//input[@id='mnemonic-input-11']")
     }

     async phrase01 () {
        return await $("//div[./h2[string()='Write down your Recovery Phrase']]/div/div/div[1]").getText();
     }

     async phrase02 () {
        return await $("//div[./h2[string()='Write down your Recovery Phrase']]/div/div/div[2]").getText();
     }

     async phrase03 () {
        return await $("//div[./h2[string()='Write down your Recovery Phrase']]/div/div/div[3]").getText();
     }

     async phrase04 () {
        return await $("//div[./h2[string()='Write down your Recovery Phrase']]/div/div/div[4]").getText();
     }

     async phrase05 () {
        return await $("//div[./h2[string()='Write down your Recovery Phrase']]/div/div/div[5]").getText();
     }

     async phrase06 () {
        return await $("//div[./h2[string()='Write down your Recovery Phrase']]/div/div/div[6]").getText();
     }

     async phrase07 () {
        return await $("//div[./h2[string()='Write down your Recovery Phrase']]/div/div/div[7]").getText();
     }

     async phrase08 () {
        return await $("//div[./h2[string()='Write down your Recovery Phrase']]/div/div/div[8]").getText();
     }

     async phrase09 () {
        return await $("//div[./h2[string()='Write down your Recovery Phrase']]/div/div/div[9]").getText();
     }

     async phrase10 () {
        return await $("//div[./h2[string()='Write down your Recovery Phrase']]/div/div/div[10]").getText();
     }

     async phrase11 () {
        return await $("//div[./h2[string()='Write down your Recovery Phrase']]/div/div/div[11]").getText();
     }

     async phrase12 () {
        return await $("//div[./h2[string()='Write down your Recovery Phrase']]/div/div/div[12]").getText();
     }

     get continueButton () {
        return $("//button[string()='Continue']")
     }

     get passwordField () {
        return $("//input[@name='password']");
     }

     get confirmPasswordField () {
        return $("//input[@name='password2']");
     }


    // METHODS


    async compilePhraseString() { // method to append all 12 recovery words into a single phrase separated by spaces
        const t0 = await this.phrase01() + " " + await this.phrase02() + " " + await this.phrase03() + " " + await this.phrase04() + " " + await this.phrase05() + " " + await this.phrase06() + " " + await this.phrase07() + " " + await this.phrase08() + " " + await this.phrase09() + " " + await this.phrase10() + " " + await this.phrase11() + " " + await this.phrase12();
        return t0;
    }

    async clickCopyButton () {
        await this.copyButton.click();
    }

    async clickSavedMyRecoveryPhraseButton () {
        await this.savedMyRecoveryPhraseButton.click();
    }

    async clickContinueButton () {
        await this.continueButton.click();
    }

    async enterPassword (password) {
        await this.passwordField.setValue(password);
    }

    async confirmPassword (passwordConfirmation) {
        await this.confirmPasswordField.setValue(passwordConfirmation);
    }

    async populatePhraseFields (e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12) {
        await this.phraseInput01.setValue(e1); // this could probably be done more elegantly with some enumeration
        await this.phraseInput02.setValue(e2); // but I'm out of time as it is
        await this.phraseInput03.setValue(e3); // so it'll have to do for now :)
        await this.phraseInput04.setValue(e4);
        await this.phraseInput05.setValue(e5);
        await this.phraseInput06.setValue(e6);
        await this.phraseInput07.setValue(e7);
        await this.phraseInput08.setValue(e8);
        await this.phraseInput09.setValue(e9);
        await this.phraseInput10.setValue(e10);
        await this.phraseInput11.setValue(e11);
        await this.phraseInput12.setValue(e12);
    }

    open () {
        return super.open('onboard/create');
    }
}

export default new CreatePage();
