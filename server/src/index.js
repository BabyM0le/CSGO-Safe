// // CSGOREP
// import { RequestCsgoRepHTML } from './components/CsgoRep/RequestData.js';
// import { HandleCsgoRepHTML } from './components/CsgoRep/HandleData.js';

// // STEAMREP
// import { RequestSteamRepHTML } from './components/SteamRep/RequestData.js';

// const steamId = '76561199095221628';
// const testing = async () => {
//     // const CsgoRepHTML = await RequestCsgoRepHTML(steamId);
//     // const HandledData = new HandleCsgoRepHTML();
//     // console.log(HandledData.GetTotalDeals(CsgoRepHTML));
//     // console.log(HandledData.GetPositiveDeals(CsgoRepHTML));
//     // console.log(HandledData.GetNeutralDeals(CsgoRepHTML));
//     // console.log(HandledData.GetBannedStatus(CsgoRepHTML));
//     // console.log(HandledData.GetCashDeals(CsgoRepHTML));
//     // console.log(HandledData.GetCryptoDeals(CsgoRepHTML));
//     // console.log(HandledData.GetBalanceDeals(CsgoRepHTML));
//     // console.log(HandledData.GetAverageRepsOfDeals(CsgoRepHTML));
//     // console.log(HandledData.GetAmountOfGoingFirst(CsgoRepHTML));
//     // console.log(HandledData.GetAmountOfGoingSecond(CsgoRepHTML));
//     console.log(await RequestSteamRepHTML(steamId));
// };
// testing();

import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('http://localhost:3001/api', (req, res) => {
    res.send('<h1>Thank you for contacting</h1>');
});

app.listen(port, () => {
    console.log(`Node running on port: ${port}`);
});
