describe('saucectl larger tests', () => {
	test('should login', async () => {
		const page = await browser.newPage();
		//set default waitForSelector timeout
		//https://github.com/puppeteer/puppeteer/blob/v10.2.0/docs/api.md#pagewaitforselectorselector-options
		page.setDefaultTimeout(6000);
		await page.goto('https://www.saucedemo.com/');
		await page.waitForSelector('#user-name');
		await page.type('#user-name', 'standard_user');
		await page.type('#password', 'secret_sauce');
		await page.click('#login-button');
		await page.waitForSelector('#contents_wrapper');
	});
});
