import{courtney} from './courtneysPage';
const court = new courtney();

test('add to cart', async()=>{
    await court.navigate();
    (await court.getElement(court.calendarBtn)).click();
    await court.driver.sleep(2000);
    (await court.getElement(court.jan22)).click();
    (await court.getElement(court.viewRates)).click();
    (await court.getElement(court.coronado)).click();
    (await court.getElement(court.addToCartBtn)).click();
    (await court.getElement(court.continue)).click();
    (await court.getElement(court.delete)).click();
    (await court.getElement(court.delete2)).click();
    let text=await court.getCartContent();
    expect(text).toContain('Your cart is empty.');
    await court.driver.quit();
});