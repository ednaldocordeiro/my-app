axios.get('http://localhost:8000/users').then(response => response.data)
  .then(data => {
    Array.from(document.querySelectorAll('.name')).map((item, index) => item.innerHTML = data[index].name)
    return data
  })
  .then(data => { 
    Array.from(document.querySelectorAll('.instagram-link')).map((item, index) => item.href = data[index].url) 
    return data 
})