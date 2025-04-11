const uiMaker = (data) => {
    let temp = `<div id="box">
  <div id="moon">
    <div id="hole1" class="hole"></div>
    <div id="hole2" class="hole"></div>
    <div id="hole3" class="hole"></div>
    <div id="hole4" class="hole"></div>
    <div id="hole5" class="hole"></div>
    <div id="hole6" class="hole"></div>
    <div id="hole7" class="hole"></div>
  </div>
  <div id="floor1" class="floor light"></div>
  <div id="floor2" class="floor light"></div>
  <div id="floor3" class="floor light"></div>
  <div id="floor4" class="floor dark"></div>
  <div id="floor5" class="floor dark"></div>
  <div id="info">
    <span id="temp">${data.main.temp}°</span>
    <div id="stats">
      <span>Wind: N ${data.wind.speed}</span>
      <span>Humidity: ${data.main.humidity}%</span>
    </div>
    <div id="next">
      <span>FRI<b>${data.main.feels_like} °</b></span>
      <span>SAT<b>${data.main.temp_max} °</b></span>
    </div>
  </div>
  <div id="drop1" class="drop"></div>
  <div id="drop2" class="drop"></div>
  <div id="drop3" class="drop"></div>
  <div id="drop4" class="drop"></div>
  <div id="drop5" class="drop away"></div>
  <div id="drop6" class="drop away"></div>
  <div id="drop7" class="drop away"></div>
  <div id="drop8" class="drop away"></div>
  </div>`;
    document.getElementById("Results").innerHTML = temp;
};

const getdata = async (city) => {
    let req = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d315d8f912016571dd6ce6747b9c5b7&units=metric`
    );
    let res = await req.json();
    uiMaker(res);
};
const getvalue = async (lat, long) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2d315d8f912016571dd6ce6747b9c5b7&units=metric`);
    let res = await req.json();
    uiMaker(res);
};
document.getElementById("search").addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        let city = e.target.value;
        getdata(city);
    }
});
///////////////

const getlocation = () => {
    navigator.geolocation.getCurrentPosition((pes) => {
        console.log(pes);
        const lat = pes.coords.latitude;
        const long = pes.coords.longitude;
        console.log(lat, long)
        getvalue(lat, long)

    })
}
getlocation();