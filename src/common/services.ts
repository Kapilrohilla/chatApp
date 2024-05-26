import apis from "./apis"

const getDataWithoutToken = () => {

}
async function postDataWithoutToken(data: string, url: string) {
    const api = apis.baseUrl + url;
    const myHeader = new Headers();
    myHeader.append("Content-Type", "applicaiton/json")

    const req = await fetch(api, { body: data, method: "POST", headers: myHeader })
    const json = await req.json();

    return json;
}
async function getDataWithToken(url: string, token: string) {
    const data = await fetch(url, { method: "GET" });
    const json = data.json();
    return json;
}
const services = { getDataWithoutToken, postDataWithoutToken, getDataWithToken }
export default services;