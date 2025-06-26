import type { AxiosHeaders, AxiosInstance, AxiosResponse } from 'axios'
import { AxiosError } from 'axios'
import { createAxiosInstance } from './axios-instance'

export type TSuccessResponse<TData> = {
  status_code: number
  success: true
  message: string
  data: TData
}

type BaseServiceConfig = {
  params?: Record<string, unknown>
  headers?: AxiosHeaders
  timeout?: number
}

export abstract class BaseService {
  protected clientUrl: string
  protected apiInstance: AxiosInstance

  constructor(
    url: string,
    version: 'v1' | 'v2' = 'v1',
    headers?: Record<string, string>
  ) {
    this.clientUrl = url
    this.apiInstance = createAxiosInstance(this.clientUrl, version, headers)
  }

  protected async handleRequest<TData>(
    request: Promise<AxiosResponse<TSuccessResponse<TData>>>
  ): Promise<TData> {
    try {
      const response = await request
      return response.data.data
    } catch (e) {
      if (e instanceof AxiosError) {
        // Logger.log(e.response?.data)
        throw new Error(e.response?.data?.message || e.message)
      }
      throw new Error('Something went wrong while processing your request')
    }
  }

  public async get<TData>(
    url: string,
    config?: BaseServiceConfig & {
      responseType?: 'json' | 'blob' | 'text' | 'arraybuffer'
    }
  ): Promise<TData> {
    return this.handleRequest(
      this.apiInstance.get(url, {
        ...config,
        responseType: config?.responseType || 'json',
      })
    )
  }

  public async post<TResponse, TData>(
    url: string,
    data?: TData,
    config?: BaseServiceConfig
  ): Promise<TResponse> {
    return this.handleRequest(this.apiInstance.post(url, data, config))
  }

  public async put<TResponse, TData>(
    url: string,
    data?: TData,
    config?: BaseServiceConfig
  ): Promise<TResponse> {
    return this.handleRequest(this.apiInstance.put(url, data, config))
  }

  public async delete<TData>(
    url: string,
    config?: BaseServiceConfig
  ): Promise<TData> {
    return this.handleRequest(this.apiInstance.delete(url, config))
  }
}
