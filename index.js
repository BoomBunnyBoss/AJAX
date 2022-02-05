const requestURL = "https://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no";

const xhr = new XMLHttpRequest();

const response  = new Promise ((resolve, reject) => {
    xhr.open("GET", requestURL);
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4 || xhr.status !== 200) return;
        resolve(JSON.parse(xhr.response));
    } 
});

response.then(data => {
    console.log(data.location.name);
    console.log(data.current.pressure_mb);
    console.log(data.current.temp_c);
})

xhr.send();

// const requestURL =
//   "https://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no";

// const xhr = new XMLHttpRequest();
// xhr.open("GET", requestURL);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState !== 4 || xhr.status !== 200) {
//     return;
//   } 
//   const response = JSON.parse(xhr.response);   
//   console.log(response);
//   console.log(response.location.country);  
// };

// xhr.send();
