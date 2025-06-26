import { APP_CONFIG } from '@/config'
import type {
  AxiosInstance,
  RawAxiosRequestHeaders,
} from 'axios'
import axios from 'axios'

export const createAxiosInstance = (
  clientUrl: string,
  version: 'v1' | 'v2' = 'v1',
  headers?: RawAxiosRequestHeaders
): AxiosInstance => {
  return axios.create({
    timeout: 120000,
    baseURL: `${APP_CONFIG.API_BASE_URL}/api/${version}${clientUrl}/`,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  })
}
