// fetch('https://fe-api-jquery.firebaseio.com/fe-api-jquery.json')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(movie => {
//             const listRow = document.createElement('li');
//             const movieTitle = document.createElement('h2');
//             movieTitle.innerText = movie.title;
//             listRow.appendChild(movieTitle);
//
//             const movieYear = document.createElement('h3');
//             movieYear.innerText = movie.year;
//             listRow.appendChild(movieYear);
//
//             document.querySelector('.movies').appendChild(listRow);
//         });
//     }).catch(err => console.log(err))

fetch("https://covid-19-data.p.rapidapi.com/report/country/name?date=2021-03-08&name=poland", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "87c5cdf4a9msh342eac1e12a60eap12ce6ajsn45e4dbc771db",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	}
})
.then(response => {
	return response.json()
}).then(data =>{
    console.log(data)
})
.catch(err => {
	console.error(err);
});