import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {config} from "./config";

const app = initializeApp(config);
export const analytics = getAnalytics(app);
export { app as firebaseApp }