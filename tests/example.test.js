/*
 * @group group1
 */
describe('saucectl simple test group1', () => {
	test('should verify title of the page', async () => {
		const page = await browser.newPage();
		await page.goto('https://www.saucedemo.com/');
		expect(await page.title()).toBe('Swag Labs');
	});
});
