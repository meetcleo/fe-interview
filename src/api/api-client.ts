import axios from 'axios';

import { appSettings } from '../shared/app-settings';

export const apiClient = axios.create({
  baseURL: appSettings.baseApiUrl,
  timeout: 1000,
});
