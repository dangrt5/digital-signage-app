import types from "./types";
import axios from "axios";

export async function getLocations() {
  const resp = await axios.get("/api/locations");
  console.log("Response data", resp.data);
  return {
    type: types.GET_LOCATIONS,
    payload: resp
  };
}
