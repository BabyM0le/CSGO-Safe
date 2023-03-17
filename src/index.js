import { RequestCsgoRepHTML } from './components/CsgoRep/RequestData.js';
import { HandleCsgoRepHTML } from './components/CsgoRep/HandleData.js';

const steamId = '76561199095221628';
const testing = async () => {
    const CsgoRepHTML = await RequestCsgoRepHTML(steamId);
    const HandledData = new HandleCsgoRepHTML();
    console.log(HandledData.GetTotalValue(CsgoRepHTML));
};
testing();
