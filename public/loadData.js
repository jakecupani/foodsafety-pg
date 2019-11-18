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
            coordinates = new Array();
            for (i = 0; i < res.data.length; i++) {
                let obj = res.data[i];
                let count = 0;
                try {
                    coordinates.push(obj.coordinates.reverse());
                    console.log(obj.coordinates);
                    L.marker(coordinates[i]).addTo(mymap);
                }
                catch {
                    console.log("This did not work");
                    continue;
                }

            }
            // console.log(coordinates);
            return res;
        });
}