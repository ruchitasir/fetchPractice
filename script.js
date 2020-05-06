const API_URL = 'https://api.kanye.rest/'
const displayQuote = () => {
    console.log('About to display a quote...!')
    fetch(API_URL)
    .then((response) => {
       
        return response.json()
    })
    .then((data) => {
        console.log('SUCCESS', data.quote)
        document.getElementById('quote').textContent = data.quote
    })
    .catch((err) => {
        console.log('Oh noes an error', err)
    })
    // Anatomy of FETCH
    // fetch(API_URL) this initiates the call to the API
    // .then(...) handles the response, turns into JSON
    // .then(data) received the data from previous .then()
    //      here is where you'd want to do something with the
    //      data that we got back
    // .catch(error) Only happens when something goes wrong
}
displayQuote()


document.getElementById('refresh').addEventListener('click',displayQuote)