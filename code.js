async function search() {
    // console.log(inputValue.value);
    if (inputValue.value) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${(inputValue.value).trim()}&appid=593fa7df68e409efba0bb74ef6900707`)
        //   console.log(response);
        response.json().then((data) => {
            console.log(data);
            const code = data.cod
            if (data.cod == 404) {
                alert('Place not found')
            }
            const mainitem = data.weather[0].main
            if (data.weather[0].main == 'Rain') {
                mainbody.style.backgroundImage = "url('https://www.gifcen.com/wp-content/uploads/2023/07/rain-gif.gif'"
                mainbody.style.backgroundRepeat = "no-repeat"
                mainbody.style.backgroundSize = "cover"
                mainbody.style.backgroundPosition = "center"
                heading.style.color = "white"
            }
            else if (data.weather[0].main == 'Clouds') {
                mainbody.style.backgroundImage = "url('https://media3.giphy.com/media/KwZoSJlvep6Vy/giphy.gif?cid=6c09b952cbu3d0gjn4keoyhs57ftfhbulspzno0tsq1ybmfu&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g')"
                mainbody.style.backgroundRepeat = "no-repeat"
                mainbody.style.backgroundSize = "cover"
                mainbody.style.backgroundPosition = "center"
                heading.style.color = "white"
            }
            else if (data.weather[0].main == 'Sunny') {
                mainbody.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/thumbnails/043/500/647/small_2x/under-the-bright-sun-abstract-natural-backgrounds-photo.jpg')"
                mainbody.style.backgroundRepeat = "no-repeat"
                mainbody.style.backgroundSize = "cover"
                mainbody.style.backgroundPosition = "center"
                heading.style.color = "white"
            }
            else if (data.weather[0].main == 'Clear') {
                mainbody.style.backgroundImage = "url('https://i.pinimg.com/originals/c8/ba/30/c8ba30ee61944cc26dbde4022a0a4b72.gif')"
                mainbody.style.backgroundRepeat = "no-repeat"
                mainbody.style.backgroundSize = "cover"
                mainbody.style.backgroundPosition = "center"
                heading.style.color = "white"
            }
            else if (data.weather[0].main == 'Mist') {
                mainbody.style.backgroundImage = "url('https://i.makeagif.com/media/10-16-2018/rjxI8k.gif')"
                mainbody.style.backgroundRepeat = "no-repeat"
                mainbody.style.backgroundSize = "cover"
                mainbody.style.backgroundPosition = "center"
                heading.style.color = "white"
            }
            else if (data.weather[0].main == 'Haze') {
                mainbody.style.backgroundImage = "url('https://images.bhaskarassets.com/web2images/521/2024/12/29/orig_gifs61731548983_1735426967.gif')"
                mainbody.style.backgroundRepeat = "no-repeat"
                mainbody.style.backgroundSize = "cover"
                mainbody.style.backgroundPosition = "center"
                heading.style.color = "black"
            }
            else if (data.weather[0].main == 'Snow') {
                mainbody.style.backgroundImage = "url('https://i.pinimg.com/originals/d6/97/0e/d6970ea7afec467b1534deab0e3d38b1.gif')"
                mainbody.style.backgroundRepeat = "no-repeat"
                mainbody.style.backgroundSize = "cover"
                mainbody.style.backgroundPosition = "center"
                heading.style.color = "black"
            }
            else if (data.weather[0].main == 'Thunderstorm') {
                mainbody.style.backgroundImage = "url('https://media3.giphy.com/media/lkimn0qpby38zMJMY/giphy.gif?cid=6c09b952vi4y9y6fpo9xukm2qzoodw1oeygmb2z1zk2aovh8&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g')"
                mainbody.style.backgroundRepeat = "no-repeat"
                mainbody.style.backgroundSize = "cover"
                mainbody.style.backgroundPosition = "center"
                heading.style.color = "white"
            }
            else {
                mainbody.style.backgroundImage = "url('https://homework.study.com/cimages/videopreview/videopreview-full/weather-definition-and-types_113503.jpg')"
                mainbody.style.backgroundRepeat = "no-repeat"
                mainbody.style.backgroundSize = "cover"
                mainbody.style.backgroundPosition = "center"
                heading.style.color = "white"
            }
            console.log(mainitem);
            const name = data.name
            console.log(name);
            let weather_icon = ''
            // console.log(icon);
            if (data.weather[0].main == "Clouds") {
                weather_icon = 'images/cloud.png'
            }
            else if (data.weather[0].main == "Mist") {
                weather_icon = 'images/mist.png'
            }
            else if (data.weather[0].main == "Clear") {
                weather_icon = 'images/clear.png'
            }
            else if (data.weather[0].main == "Rain") {
                weather_icon = 'images/rain.jpg'
            }
            else if (data.weather[0].main == "Haze") {
                weather_icon = 'images/haze.png'
            }
            else if (data.weather[0].main == "Snow") {
                weather_icon = 'images/snow_icon.webp'
            }
            const temp = Math.floor((data.main.temp) - 273.15)
            console.log(temp);
            const hum = data.main.humidity
            console.log(hum);
            const feels = Math.floor((data.main.feels_like) - 273.15)
            console.log(feels);
            const country = data.sys.country
            console.log(country);
            let currentDate = new Date()
            let year = currentDate.getFullYear()
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            let monthName = months[currentDate.getMonth()]
            let date = currentDate.getDate()
            let hours = currentDate.getHours()
            let minutes = currentDate.getMinutes()
            // let sec = currentDate.getSeconds()
            console.log(` ${date} ${monthName} ${year} ${hours}:${minutes} `);
            const windSpeed = Math.floor(data.wind.speed)
            console.log(windSpeed);
            const pressure = data.main.pressure
            console.log(pressure);

            result.innerHTML = `<div class=" text-center mt-4 ">
                        <h1 style="font-family: EB Garamond, serif; font-weight: 600;color: rgb(228, 227, 227);">${name}</h1>
                        <h2 style="color: aliceblue;font-family: EB Garamond, serif;">${country}</h2>
                       <img  src="${weather_icon}" class="w-25 mt-4" alt="">
                        <h4 style="color: aliceblue;font-family: EB Garamond, serif;font-size:25px"">${mainitem}</h4>
                        <h2 style="color: aliceblue;font-family: EB Garamond, serif;font-size:35px">${temp} °C</h2>
                        <p style="color: aliceblue;font-family: EB Garamond, serif;font-size:16px"">${date} ${monthName} ${year} , ${hours}:${minutes} ${hours >= 12 ? `PM` : `AM`}  IST </h5>
                            <hr style="color: aliceblue;">
                    </div>
                    <div class="row d-flex text-center">
                        <div class="col-6 p-2">
                            <div class="d-flex">
                                <img src="./Assests/1000_F_304781665_WGgUVlAoqepgknMwo8WqMp1hCMYLo2pA-removebg-preview.png" class="w-25" alt="">
                                <h5 class="d-flex align-items-end" style="color:rgb(228, 227, 227);font-family: EB Garamond, serif;">${hum}%</h5>
                            </div>
                                <div>
                                    <h6 style="color:rgb(228, 227, 227);font-family: EB Garamond, serif;font-weight: bold;">Humidity</h6>
                                </div>     
                        </div>
                        <div class="col-6 p-2">
                           <div class="d-flex">
                                <img src="./Assests/thermometer-icon-high-temperature-symbol-vector-6547358-removebg-preview.png" class="w-25" alt="">
                                <h5 class="d-flex align-items-end" style="color: rgb(228, 227, 227);font-family: EB Garamond, serif;">${feels} %</h5>
                            </div>
                                <div>
                                    <h6 style="color:rgb(228, 227, 227);font-family: EB Garamond, serif;font-weight: bold;">Feels-like</h6>
                                </div>    
                        </div>
                    </div>
                    <div class="row d-flex text-center">
                        <div class="col-6 p-2">
                            <div class="d-flex">
                                <img src="./Assests/png-transparent-atmospheric-pressure-computer-icons-gas-bar-pressure-miscellaneous-atmosphere-engineering-removebg-preview.png" class="w-25" alt="">
                                <h5 class="d-flex align-items-end" style="color: rgb(228, 227, 227);font-family: EB Garamond, serif;">${pressure} mbar</h5>
                            </div>
                                <div>
                                    <h6 style="color: rgb(228, 227, 227);font-family: EB Garamond, serif;font-weight: bold;">Pressure</h6>
                                </div>     
                        </div>
                        
                        <div class="col-6 p-2">
                            <div class="d-flex">
                                <img src="./Assests/pngtree-vector-wind-icon-png-image_884000-removebg-preview.png" class="w-25" alt="">
                                <h5 class="d-flex align-items-end" style="color: rgb(228, 227, 227);font-family: EB Garamond, serif;">${windSpeed} km/h</h5>
                            </div>
                                <div>
                                    <h6 style="color: rgb(228, 227, 227);font-family: EB Garamond, serif;font-weight: bold;">Wind-Speed</h6>
                                </div>     
                        </div>
                    </div>`
        })
    }
    else {
        alert(`Please enter the currect location...`)
    }
}