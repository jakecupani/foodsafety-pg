function loadData() {
    console.log("fetch");
    // confirm code is running on click
    fetch('/api')
        .then(res => res.json())
        .then(res => {
            let geoData = res.map(function (data) { return data["geocoded_column_1"] });
            return geoData;
        })
        .then(res => {
            console.log("data");
            console.log(res);
            return res;
        });
}