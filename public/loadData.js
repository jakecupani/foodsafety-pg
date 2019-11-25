function loadData(filters) {
    // console.log("fetch");
    // confirm code is running on click
    fetch('/api')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            console.log(filters);
            if (filters) {
                console.log("there are filters");
                newdata = res.data.filter(el => el.category == filters);
            }
            else {
                console.log("there are no filters");
                return res.data;
            }

            console.log(newdata);
            return newdata;

            return res;
        })
        .then(res => {
            for (i = 0; i < res.length; i++) {
                let obj = res[i]["geocoded_column_1"];
                try {
                    L.geoJSON(obj).bindPopup(res[i].name).addTo(mymap);

                }
                catch {
                    console.log("This did not work");
                    continue;
                }

            }
            return res;
        });
}