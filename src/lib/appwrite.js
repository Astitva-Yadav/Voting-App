import { Client, Databases } from "appwrite";

const client = new Client();
const DB_ID = "67f95989002b12c3fb59";
const COLLECTION_ID = "67f95a3e0001c1c8304b";

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67f6c655000a7aed0e16");

export const databases = new Databases(client);

export { client, DB_ID, COLLECTION_ID };