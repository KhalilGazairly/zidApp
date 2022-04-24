export default function ({ $axios, app, store }, inject) {
  // Create a custom axios instance
  const axios = $axios.create({
    headers: {
      common: {
        'Accept': "application/json",
        'Content-Type': 'multipart/form-data',
        
      }
    }
  })

  // Set baseURL to something different


  // Inject to context as $api
  inject('axios', axios)
}
