import puppeteer from 'puppeteer';

export async function RequestSteamRepHTML(steamId) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`https://steamrep.com/search?q=${steamId}`);

    const content = await page.content();

    await browser.close();

    return content;
}
