window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('minify-button').addEventListener('click', (e) => {
    format(0)
  })

  document.getElementById('format-button').addEventListener('click', (e) => {
    format('    ')
  })

  document.getElementById('formatted').addEventListener('click', (e) => {
    e.preventDefault()
    e.target.select()
  })
  
  function format(space) {
      const unformatted = document.getElementById('unformatted')
      const formatted = document.getElementById('formatted')
      let json

      try {
        removeErrors()
        json = JSON.parse(unformatted.value)
      } catch (e) {
        showError(e)
        return
      }

      const minified = JSON.stringify(json, null, space)
      formatted.value = minified
  }

  function showError(error) {
    const errorEl = document.getElementById('errors')
    errorEl.hidden = false
    errorEl.innerHTML = `Error: ${error}`
  }

  function removeErrors() {
    const errorEl = document.getElementById('errors')
    errorEl.hidden = true
    errorEl.innerHTML = ""
  }
})