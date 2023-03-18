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
            const priceNumber = parseInt(priceText); // convert the text to a number
            if (!isNaN(priceNumber)) {
                // check if the number is valid
                totalPrice += priceNumber;
            }
        });

        return totalPrice;
    }
    GetPositiveDeals(CsgoRepHTML) {
        const loadedHTML = cheerio.load(CsgoRepHTML);

        return parseInt(loadedHTML('.circle.green span').text());
    }
    GetNeutralDeals(CsgoRepHTML) {
        const loadedHTML = cheerio.load(CsgoRepHTML);

        return parseInt(loadedHTML('.circle.yellow span').text());
    }
    GetBannedStatus(CsgoRepHTML) {
        const loadedHTML = cheerio.load(CsgoRepHTML);

        return loadedHTML('.ban').text() ? true : false;
    }
    GetCashDeals(CsgoRepHTML) {
        const loadedHTML = cheerio.load(CsgoRepHTML);

        return parseInt(
            loadedHTML('.summary-wrapper .el:nth-child(1) span').text()
        );
    }
    GetCryptoDeals(CsgoRepHTML) {
        const loadedHTML = cheerio.load(CsgoRepHTML);

        return parseInt(
            loadedHTML('.summary-wrapper .el:nth-child(2) span').text()
        );
    }
    GetBalanceDeals(CsgoRepHTML) {
        const loadedHTML = cheerio.load(CsgoRepHTML);

        return parseInt(
            loadedHTML('.summary-wrapper .el:nth-child(3) span').text()
        );
    }
    GetAverageRepsOfDeals(CsgoRepHTML) {
        const loadedHTML = cheerio.load(CsgoRepHTML);

        let total = 0;
        loadedHTML('.reviews-wrapper .amount').each(function () {
            const amountText = cheerio(this).text().trim();
            const amount = parseFloat(amountText);
            if (!isNaN(amount)) {
                total += amount;
            }
        });

        return parseInt(
            (
                total / this.GetPositiveDeals(CsgoRepHTML) +
                this.GetNeutralDeals(CsgoRepHTML)
            ).toFixed(2)
        );
    }
    GetAmountOfGoingFirst(CsgoRepHTML) {
        const loadedHTML = cheerio.load(CsgoRepHTML);
        let count = 0;

        loadedHTML('img.position-1').each((index, element) => {
            count++;
        });

        return count;
    }
    GetAmountOfGoingSecond(CsgoRepHTML) {
        const loadedHTML = cheerio.load(CsgoRepHTML);
        let count = 0;

        loadedHTML('img.position-2').each((index, element) => {
            count++;
        });

        return count;
    }
}
