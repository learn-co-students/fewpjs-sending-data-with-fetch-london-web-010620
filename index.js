const URL = "http://localhost:3000/users"
let body = document.querySelector("body")


function submitData(name, email) {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name: name, email: email})
  }

  return fetch(URL, configObj)
    .then(response => response.json())
    .then(user => body.textContent = user.id)
    .catch(error => body.textContent = error.message)
}

