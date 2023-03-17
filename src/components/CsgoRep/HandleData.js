import cheerio from 'cheerio';

export class HandleCsgoRepHTML {
    GetTotalValue(CsgoRepHTML) {
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
}
