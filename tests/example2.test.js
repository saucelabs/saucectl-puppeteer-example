describe('saucectl demo test 2', () => {
	test('should verify title of the page 2', async () => {
		const page = await browser.newPage();
		await page.goto('https://www.saucedemo.com/');
		expect(await page.title()).toBe('Swag Labs');
	});
});
