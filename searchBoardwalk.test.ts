import{courtney} from './courtneysPage';
const court = new courtney();

test('do search', async()=>{
    await court.navigate();
    await court.search('Boardwalk');
    let text=await court.getResults();
    expect(text).toContain('Boardwalk');
    await court.driver.quit();
});