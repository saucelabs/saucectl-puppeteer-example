describe('saucectl demo test', () => {
    test('should verify title of the page', async function () {
        const host:string = "https://www.saucedemo.com/";
        const expected:string = "Swag Labs";
        // @ts-ignore
        const page = (await browser.pages())[0];
        await page.goto(host);
        expect(await page.title()).toBe(expected);
    });
});
