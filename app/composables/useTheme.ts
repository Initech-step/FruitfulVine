export const useTheme = () => {
  const getSystemPreference = () => {
    if (process.client) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  }

  const applyTheme = (theme: 'light' | 'dark' | 'system') => {
    if (!process.client) return

    let finalTheme = theme
    if (theme === 'system') {
      finalTheme = getSystemPreference() ? 'dark' : 'light'
    }

    document.documentElement.setAttribute('data-theme', finalTheme)
    localStorage.setItem('theme', theme)
  }

  const initTheme = () => {
    if (!process.client) return

    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' || 'system'
    applyTheme(savedTheme)

    // Listen to system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const currentTheme = localStorage.getItem('theme')
      if (currentTheme === 'system') {
        applyTheme('system')
      }
    })
  }

  return {
    applyTheme,
    initTheme
  }
}