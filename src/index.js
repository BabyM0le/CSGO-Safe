import { RequestCsgoRepData } from './components/CsgoRep/RequestData.js';
import { HandleCsgoRepData } from './components/CsgoRep/HandleData.js';

const steamId = '76561199095221628';
const testing  = async () => {
    let data = await RequestCsgoRepData(steamId)
    // console.log(data)
    console.log(await HandleCsgoRepData(data))
}
testing()