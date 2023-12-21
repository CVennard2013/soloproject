import{courtney} from './courtneysPage';
const court = new courtney();

test('hours', async()=>{
    await court.navigate();
    await court.canHover2();
    await court.driver.sleep(2000);
    (await court.getElement(court.dining)).click();
    let text=await court.getText(court.diningPage);
    expect(text).toContain('Dining');
    await court.driver.quit();
});