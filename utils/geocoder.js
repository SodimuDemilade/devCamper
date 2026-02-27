// import { fetchAdapter, OsmGeocoder } from '@spurreiter/geocoder';

// const adapter = fetchAdapter();
// export const geocoder = new OsmGeocoder(adapter, 
//   { language: 'en', limit: 5, referer: 'https://mysite' });




import NodeGeocoder from "node-geocoder";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null
};

const geocoder = NodeGeocoder(options);

export default geocoder;