function loadData() {
    console.log("fetch");
    // confirm code is running on click
    fetch('/api')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            let geoData = res.data.map(function (data) { return data["geocoded_column_1"] });
            return geoData;
        });
}