import "../styles/globals.css"
import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Layout from "../src/components/Layout"
import { AuthProvider } from "../src/auth/auth"
import { ToastProvider } from "../src/hooks/toast"

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <ToastProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AuthProvider>
    </ToastProvider>
  )
}

export default MyApp
