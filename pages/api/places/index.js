import { places } from "../../../lib/db";

export default function handler(request, response) {
  return response.status(200).json(places);
}

// replace the places variable imported from lib/db.js
// with a GET request from your database.
