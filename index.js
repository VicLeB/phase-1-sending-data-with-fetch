// Add your code here
//fetch post


// const configurationObjecct = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     },
//     body: JSON.stringify(formData)
// };
function submitData(userName, userEmail){
   return fetch('http://localhost:3000/users', {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           "Accept": "application/json",
       },
       body: JSON.stringify({
            name: userName, 
            email: userEmail,
        }),
   })
   .then(response => {
       return response.json()
   })
   .then(object => {
       document.body.innerHTML= object['id']
   })
   .catch((error) => {
      document.body.innerHTML = error.message 
   })
}

//console.log(submitData('emily', 'emily@gmail.com'))


// fetch('http://localhost:4000/dogs', configurationObjecct)
// .then(response => {
//     console.log('hi')
//     return response.json()
// })
// .then(object => console.log(object));