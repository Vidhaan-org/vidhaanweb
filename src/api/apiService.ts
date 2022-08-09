export enum REST_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const BASE_API_URL = "https://vidhaan-api.herokuapp.com"

export const fetcher = async (url: string) => {
  const customHeaders = new Headers()
  customHeaders.append("Content-Type", "application/json")
  // token && customHeaders.append('Authorization', `Bearer ${token}`)

  const res = await fetch(url, {
    headers: customHeaders,
  })

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  return await res.json()
}

export const sendJsonData = async (
  url: string,
  data: Object = {},
  //   token: string,
  method: REST_METHODS = REST_METHODS.POST
) => {
  const customHeaders = new Headers()
  customHeaders.append("Content-Type", "application/json")
  //   customHeaders.append("Authorization", `Bearer ${token}`)

  // console.log(url, method, data, token)
  // console.log(url)
  // console.log(JSON.stringify(data))

  const response = await fetch(url, {
    method: method,
    headers: customHeaders,
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return await response.json()
}
