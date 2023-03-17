import { RequestCsgoRepHTML } from './components/CsgoRep/RequestData.js';
import { HandleCsgoRepHTML } from './components/CsgoRep/HandleData.js';

const steamId = '76561198883226994';
const testing = async () => {
    const CsgoRepHTML = await RequestCsgoRepHTML(steamId);
    const HandledData = new HandleCsgoRepHTML();
    console.log(HandledData.GetTotalDeals(CsgoRepHTML));
    console.log(HandledData.GetPositiveReps(CsgoRepHTML));
    console.log(HandledData.GetNeutralReps(CsgoRepHTML));
    console.log(HandledData.GetBannedStatus(CsgoRepHTML));
};
testing();
