import puppeteer from 'puppeteer';

export async function CsgoRepInfo(steamId) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`https://csgo-rep.com/profile/${steamId}`);

    // Wait for the preloader to disappear.
    await page.waitForSelector('.loader', { hidden: true });

    const content = await page.content();

    await browser.close();

    return content;
}
