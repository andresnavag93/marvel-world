import { api } from "./api";

export const get = async (url, optionals = "") => {
  try {
    let req = await fetch(
      api.baseRoute.debug +
        url +
        "?apikey=" +
        api.credentials.publicKey +
        "&ts=" +
        api.credentials.ts +
        "&hash=" +
        api.credentials.hash +
        optionals,
      {
        method: "GET",
        headers: {},
      }
    );
    let json = await req.json();
    // console.log("HTTP GET ", json);
    return json;
  } catch (err) {
    // console.log("HTTP GET ERROR", err);
    throw Error(err);
  }
};
