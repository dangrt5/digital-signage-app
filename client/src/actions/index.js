import types from "./types";
import axios from "axios";

export async function getLocations() {
  const resp = await axios({
    method: "GET",
    url: "/locations"
  });
  return {
    type: types.GET_LOCATIONS,
    payload: resp.data.locations
  };
}
