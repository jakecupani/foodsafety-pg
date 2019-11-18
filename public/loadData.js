function loadData() {
    console.log("fetch");
    // confirm code is running on click
    fetch('/api')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res;
        })
        .then(res => {
            for (i = 0; i < res.data.length; i++) {
                let obj = res.data[i]["geocoded_column_1"];
                try {
                    L.geoJSON(obj).bindPopup("This is " + res.data[i].name).addTo(mymap);
                }
                catch {
                    console.log("This did not work");
                    continue;
                }

            }
            return res;
        });
}