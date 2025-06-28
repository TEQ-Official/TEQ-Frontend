'use client'

import { ReduxProvider } from '@/lib/provider'
import { AppProgressProvider } from '@bprogress/next'
import {
  QueryClient,
  QueryClientProvider,
  isServer,
} from '@tanstack/react-query'
import { type ReactNode } from 'react'

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: false,
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (isServer) {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

export const Providers = ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AppProgressProvider
        height="5px"
        color="#5B4CCC"
        options={{ showSpinner: false }}
        shallowRouting
      >
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </AppProgressProvider>
    </QueryClientProvider>
  )
}
