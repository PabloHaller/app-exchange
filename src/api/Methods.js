import Axios from "axios";

export const baseUrl = "https://topicos.azurewebsites.net/api/";

function doApiGet(suburl, params) {
    return Axios.get(baseUrl + suburl, params);
}

export default { doApiGet };
