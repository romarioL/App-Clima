window.addEventListener('load', () =>{
	let longitude;
	let latitude;

	if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
             longitude = position.coords.longitude
             latitude = position.coords.latitude


             const api = `https://api.darksky.net/forecast/544a42dae507ce360ad26231c8569bf3/${latitude},${longitude}`
        })
	}else {
		h1.textContent = "Sistema fora do ar. Por favor, habilite seu GPS!"
	}

	fetch(api)
	   .then(response => {
	   	  return response.json()
	   })
	   .then(data => {
	   	console.log(data)
	   })

})