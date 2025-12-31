export default defineNuxtPlugin(() => {
  if (process.client) {
    // Initialize FlyonUI components
    import('flyonui/flyonui.js').then(() => {
      // FlyonUI is now loaded
      console.log('FlyonUI initialized')
    })
    
    // Initialize theme
    const { initTheme } = useTheme()
    initTheme()
  }
})