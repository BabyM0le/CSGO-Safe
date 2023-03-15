import puppeteer from 'puppeteer';

export async function RequestCsgoRepData(steamId) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`https://csgo-rep.com/profile/${steamId}`);

    // Wait for the preloader to disappear.
    await page.waitForSelector('.loader', { hidden: true });

    // Return the fully loaded page
    const content = await (async (page) => {
        while (true) {
            await new Promise((resolve) => setTimeout(resolve, 200));
            const button = await page.$('.btn');
            if (button) {
                // Click all the 'load more' buttons
                await button.click();
            } else {
                return page.content();
            }
        }
    })(page);
    
    await browser.close();

    return content;
}