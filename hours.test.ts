import{courtney} from './courtneysPage';
const court = new courtney();

test('hours', async()=>{
    await court.navigate();
    await court.canHover();
    await court.driver.sleep(2000);
    await court.getElement(court.parkAndTicketDropdown);
    (await court.getElement(court.hours)).click();
    let text=await court.getText(court.calendar);
    expect(text).toContain('Hours & Events Calendar');
    await court.driver.quit();
});