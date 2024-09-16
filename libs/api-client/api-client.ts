import { config } from "@/config";
import ky from "ky";

export const apiClient = ky.extend({
  prefixUrl: config.apiUrl,
});
