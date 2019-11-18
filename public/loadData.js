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
                }
                catch {
                    console.log("This did not work");
                    continue;
                }

            }
            for(k=0; k<coordinates.length; k++) {
                L.marker(coordinates[k]).addTo(mymap);
            }
            // console.log(coordinates);
            return res;
        });
}