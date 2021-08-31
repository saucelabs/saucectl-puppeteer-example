describe('saucectl demo test', () => {
	test('should verify title of the page', async () => {
		const page = await browser.newPage();
		await page.goto('https://www.saucedemo.com/');
		expect(await page.title()).toBe('Swag Labs');
	});

	test('should verify title of the page 3', async () => {
		const page = await browser.newPage();
		await page.goto('https://www.saucedemo.com/');
		expect(await page.title()).toBe('Swag Labs');
	});
});
