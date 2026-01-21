export const useApi = () => {
  const config = useRuntimeConfig()
  const base = config.public.apiBase

  // A helper to format the full URL
  const getUrl = (endpoint: string) => {
    // Removes double slashes if they occur
    return `${base}/${endpoint}`.replace(/([^:]\/)\/+/g, "$1")
  }

  return {
    base,
    getUrl
  }
}