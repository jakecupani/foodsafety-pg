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

                newdata = res.data.filter(el => filters.includes(el.category));
            }
            else {
                console.log("there are no filters");
                return res.data;
            }

            function foodList (newdata) {
              let foodlist = "";
              for (let i = 0; i < newdata.length; i += 1) {
                let obj = newdata[i];
                foodlist += "<li>"+obj.name+": "+obj.inspection_results+"</li>";
              }
              document.querySelector("#listing").innerHTML = "<ul>"+foodlist+"<ul>"
              return newdata;
            }
            foodList(newdata)
            console.log(newdata);
            return newdata;
        })
        .then(res => {
            let places = new Array();
            for (i = 0; i < res.length; i++) {
                let obj = res[i]["geocoded_column_1"];
                try {
                    places.push(L.geoJSON(obj).bindPopup(res[i].name));
                }
                catch {
                    console.log("This did not work");
                    continue;
                }

            }
            console.log(places);
            let markers = L.layerGroup(places).addTo(mymap);
            return res;
        });
}
