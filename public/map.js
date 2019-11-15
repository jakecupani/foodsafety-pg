function loadData() {
    console.log("fetch");
    // confirm code is running on click
    fetch('/api')
        .then(res => res.json())
        .then(res => {
            // console.log(res);
            let geoData = res.data.map(function (data) { return data["geocoded_column_1"] });
            return geoData;
        })
        .then(res => {
            // console.log("data");
            // console.log(res);
            return res;
        });
}

let data = loadData();
let mymap = L.map('mapid').setView([39.045753, -76.641273], 13);

L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png", {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

console.log(data["geocoded_column_1"]);