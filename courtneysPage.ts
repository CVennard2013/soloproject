import{By} from 'selenium-webdriver';
import {BasePage} from './basePage';
const fs=require('fs');

export class courtney extends BasePage {
    searchAction: By=By.xpath('//button[@class="syndicated-navigation__nav__toggle syndicated-navigation__nav__toggle--wdw syndicated-navigation__nav__toggle--search "]');
    searchInput: By=By.xpath('//input[@class="syndicated-navigation__chrome__search__form__input syndicated-navigation__chrome__search__form__input--wdw syndicated-navigation__chrome__search__form__input--empty"]');
    searchBtn: By=By.xpath('//button[@class="syndicated-navigation__chrome__search__form__button syndicated-icon syndicated-icon--search"]');
    results: By=By.xpath('//main[@class="finder-content"]');
    parkAndTicketDropdown: By=By.xpath('//div[text()="Parks & Tickets"]');
    hours: By=By.xpath('//div[text()="More Hours"]');
    calendar: By=By.xpath('//h1[text()="Hours & Events Calendar"]');
    calendarBtn: By=By.xpath('//button[@class="btn btn-default selectable"]');
    jan22: By=By.xpath('//span[@aria-label="Monday January 22nd, 2024 Press enter to select a date, or press arrow keys to navigate through days."]');
    jan29: By=By.xpath('//span[@aria-label="Monday January 29th, 2024 Press enter to select a date, or press arrow keys to navigate through days."]');
    viewRates: By=By.id('findPricesButton');
    checkIn: By=By.xpath('(//input[@*])[6]');
    checkOut: By=By.xpath('(//input[@*])[7]');
    coronado: By=By.id('detailPageLink-coronado-springs-resort');
    addToCartBtn: By=By.id('WDW_Rooms_AddCart_4LFDC_1N_NA');
    continue: By=By.xpath('//button[@class="buttons btnSubmit contBtn"]');
    resortName: By=By.id('roomHeader');
    delete: By=By.id('removeButtonvacationoffer-room');
    delete2: By=By.name('removeTickets');
    cart: By=By.xpath('//span[@class="title rt-omniChannelToggle"]');
    thingsToDo: By=By.name('&lid=WDW_Header_ThingsToDo_CategoryLink');
    dining: By=By.xpath('//div[text()="All Dining"]');
    diningPage: By=By.xpath('//h1[@title="Dining"]');



    constructor(){
        super({url: 'https://disneyworld.disney.go.com/'});
    };
    async getResults() {
        return this.getText(this.results);
    };
    async getResortName() {
        return this.getText(this.resortName);
    };
    async getCartContent() {
        return this.getText(this.cart);
    };
    async search(searchy: string) {
        return this.setInput(this.searchInput, `${searchy}\n`);
    };
    async repeat(clickAmount, clickThing){
        for(let i=0; i<clickAmount; i++){
            await this.click(clickThing);
        };
    };
    async tabs(){
        let myTabs=await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1500);
        fs.writeFile(`${__dirname}/xPicture.png`,
        await this.driver.takeScreenshot(), "base64",
        (e)=>{
            if (e) console.log(e);
            else console.log("Picture!");
        });
        await this.driver.close();
        await this.driver.switchTo().window(myTabs[0]);
    };
    async canHover() {
        const hoverAction = this.driver.actions()
        const ctaElement = await this.getElement(this.parkAndTicketDropdown)
        console.log(`Bonus: Hover = ${hoverAction} CTA = ${ctaElement}`)
        await this.actionWiggle(hoverAction, ctaElement, 100)
        await hoverAction.perform() // Actions don't actually happen until perform is called
    };
    async canHover2() {
        const hoverAction = this.driver.actions()
        const ctaElement = await this.getElement(this.thingsToDo)
        console.log(`Bonus: Hover = ${hoverAction} CTA = ${ctaElement}`)
        await this.actionWiggle(hoverAction, ctaElement, 100)
        await hoverAction.perform() // Actions don't actually happen until perform is called
    };
};