
export default defineNuxtRouteMiddleware(async (to) => {
  const url = "http://127.0.0.1:8000/api/validate_token/"
  const urlb = ""

  const isChecking = useAuthChecking() // Access our global switch
  console.log("Middleware ran")

  if (to.path.startsWith('/admin')) {
    if (process.client) {
      isChecking.value = true // Show overlay immediately when entering admin
      
      const token = localStorage.getItem('FVTOKEN')

      if (!token) {
        isChecking.value = false 
        return navigateTo('/login')
      }

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'token': token }
        })

        const data = await response.json()
        
        if (!response.ok || !data.valid) {
          localStorage.removeItem('FVTOKEN')
          isChecking.value = false
          return navigateTo('/login')
        }
        
        // Success! Hide the overlay
        isChecking.value = false
        
      } catch (e) {
        isChecking.value = false
        return navigateTo('/login')
      }
    }
  } else {
    // If not going to admin, ensure overlay is hidden
    isChecking.value = false
  }
})