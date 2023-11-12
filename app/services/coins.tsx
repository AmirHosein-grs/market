import callApi from "../helpers/callApi";

export async function GetCoins() {
  let res = await callApi().get(`/public/markets`);
  return res?.data?.data;
}
