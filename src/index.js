// CSGOREP
import { RequestCsgoRepHTML } from './components/CsgoRep/RequestData.js';
import { HandleCsgoRepHTML } from './components/CsgoRep/HandleData.js';

// STEAMREP
import { RequestSteamRepHTML } from './components/SteamRep/RequestData.js';

const steamId = '76561199095221628';
const testing = async () => {
    // const CsgoRepHTML = await RequestCsgoRepHTML(steamId);
    // const HandledData = new HandleCsgoRepHTML();
    // console.log(HandledData.GetTotalDeals(CsgoRepHTML));
    // console.log(HandledData.GetPositiveDeals(CsgoRepHTML));
    // console.log(HandledData.GetNeutralDeals(CsgoRepHTML));
    // console.log(HandledData.GetBannedStatus(CsgoRepHTML));
    // console.log(HandledData.GetCashDeals(CsgoRepHTML));
    // console.log(HandledData.GetCryptoDeals(CsgoRepHTML));
    // console.log(HandledData.GetBalanceDeals(CsgoRepHTML));
    // console.log(HandledData.GetAverageRepsOfDeals(CsgoRepHTML));
    // console.log(HandledData.GetAmountOfGoingFirst(CsgoRepHTML));
    // console.log(HandledData.GetAmountOfGoingSecond(CsgoRepHTML));
    console.log(await RequestSteamRepHTML(steamId));
};
testing();
