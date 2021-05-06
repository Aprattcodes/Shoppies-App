/*Here is your key: 3f094384

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=3f094384*/

const api = "http://www.omdbapi.com/?i=tt3896198&apikey=3f094384";

fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data);
            });