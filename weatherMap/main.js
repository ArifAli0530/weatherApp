

const weather = async ()=>{
     const city = document.forms['myform'].cityy.value;

     const key = '9a01f8e0c057f9d149d841293dec9dc6';
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

    const response = await fetch(API)
    const data = await response.json()
    console.log(data)

    document.getElementById('City').textContent = data.name ;

    document.getElementById('country').textContent = data.sys.country ;

    if(data.weather[0].description === 'clear sky'){
        document.getElementById('img').src = './sunny.jpeg';
    }else if(data.weather[0].description === 'haze'){
        document.getElementById('img').src = './snow.jpeg';
    }
    else if(data.weather[0].description === 'heavy intensity rain'){
        document.getElementById('img').src = './rain.jpeg';
    }

const temp = (data.main.temp - 273.5)
    document.getElementById('tem').textContent = temp.toFixed(1);
}
weather()