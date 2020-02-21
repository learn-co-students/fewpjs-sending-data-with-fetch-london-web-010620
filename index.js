function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }
  // const USERS_URLS ='http://localhost:3000/users'

  // const getUsers = fetch(USERS_URLS).then(response => response.json())
  
  // const submitData = (name,email)=>{
  //   return fetch(USERS_URLS,{
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/users",
  //       "Content-Type": "application/users"
  //     },
  //     body: JSON.stringify({name,email})
  //   }).then(response => response.json())
  //     .then(object => document.body.innerHTML = object[ "id" ])
  //     .catch(error => document.body.innerHTML = error.message)
  // };