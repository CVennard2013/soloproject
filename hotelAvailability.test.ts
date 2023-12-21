import{courtney} from './courtneysPage';
const court = new courtney();

test('hotel availability', async()=>{
    await court.navigate();
    (await court.getElement(court.calendarBtn)).click();
    await court.driver.sleep(2000);
    (await court.getElement(court.jan22)).click();
    await court.driver.sleep(2000);
    (await court.getElement(court.jan29)).click();
    (await court.getElement(court.viewRates)).click();
    await court.driver.sleep(2000);
    expect(
        await (court.driver.findElement(court.checkIn)).getAttribute("value")
    ).toBe("01/22/2024");
    expect(
        await (court.driver.findElement(court.checkOut)).getAttribute("value")
    ).toBe("01/29/2024");
    await court.driver.quit();
});