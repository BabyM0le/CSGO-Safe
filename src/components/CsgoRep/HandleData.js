
import cheerio from 'cheerio'

export function HandleCsgoRepData(data) {

    const $ = cheerio.load(data);

    let totalPrice = 0;
    $('.price-green').each((index, element) => {
    const priceText = $(element).text().replace('$', '').replace(' ', '').trim(); // get the text and remove '$' and whitespace
    const priceNumber = parseFloat(priceText); // convert the text to a number
    if (!isNaN(priceNumber)) { // check if the number is valid
        totalPrice += priceNumber;
    }
    });

    return totalPrice.toFixed(2)

}