import cheerio from 'cheerio';

export class HandleCsgoRepHTML {
    GetTotalDeals(CsgoRepHTML) {
        const loadedHTML = cheerio.load(CsgoRepHTML);
        let totalPrice = 0;
        loadedHTML('.price-green').each((index, element) => {
            const priceText = loadedHTML(element)
                .text()
                .replace('$', '')
                .replace(' ', '')
                .trim(); // get the text and remove '$' and whitespace
            const priceNumber = parseFloat(priceText); // convert the text to a number
            if (!isNaN(priceNumber)) {
                // check if the number is valid
                totalPrice += priceNumber;
            }
        });

        return totalPrice.toFixed(2);
    }
    GetPositiveReps(CsgoRepHTML) {
        const loadedHTML = cheerio.load(CsgoRepHTML);

        return loadedHTML('.circle.green span').text();
    }
    GetNeutralReps(CsgoRepHTML) {
        const loadedHTML = cheerio.load(CsgoRepHTML);

        return loadedHTML('.circle.yellow span').text();
    }
    GetBannedStatus(CsgoRepHTML) {
        const loadedHTML = cheerio.load(CsgoRepHTML);

        return loadedHTML('.ban').text() ? true : false;
    }
    GetCashDeals(CsgoRepHTML) {
        const loadedHTML = cheerio.load(CsgoRepHTML);

        return loadedHTML('.summary-wrapper .el:nth-child(1) span').text();
    }
    GetCryptoDeals(CsgoRepHTML) {
        const loadedHTML = cheerio.load(CsgoRepHTML);

        return loadedHTML('.summary-wrapper .el:nth-child(2) span').text();
    }
    GetBalanceDeals(CsgoRepHTML) {
        const loadedHTML = cheerio.load(CsgoRepHTML);

        return loadedHTML('.summary-wrapper .el:nth-child(3) span').text();
    }
}
