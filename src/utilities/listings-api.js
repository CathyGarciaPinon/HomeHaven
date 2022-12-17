import sendRequest from "./send-request";
const BASE_URL = '/api/listings';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  }

export async function create(listing) {
    return sendRequest(BASE_URL, "POST", listing);
}
export async function deleteListing(id) {
    return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}