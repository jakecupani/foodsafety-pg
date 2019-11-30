let markers;
function resetMap() {
    try {
        markers.clearLayers();
    }
    catch {
        console.log('no markers made yet');
    }
}
function loadData(filters) {
    // console.log("fetch");
    function foodList (newdata) {
        let foodlist = "";
        for (let i = 0; i < newdata.length; i += 1) {
          let obj = newdata[i];
          foodlist += "<li>"+obj.name+": "+obj.inspection_results+"</li>";
        }
        document.querySelector("#listing").innerHTML = "<ol>"+foodlist+"</ol>";
        return newdata;
      }
    let raw_data;

    // confirm code is running on click
    if(raw_data) {
        console.log("there is data");
    }
    else {
        console.log("there is not data");
    }
    fetch('/api')
        .then(res => res.json())
        .then(res => {
            raw_data = res;
            console.log("the raw data",raw_data);
            if (filters) {
                console.log("there are filters");
                newdata = res.data.filter(el => filters.includes(el.category));
            }
            else {
                console.log("there are no filters");
                newdata = res.data;
            }
            console.log(newdata);
            return newdata;
        
        })
        .then(res => {
            let places = new Array();
            let names = new Array();
            for (i = 0; i < res.length; i++) {
                let obj = res[i]["geocoded_column_1"];
                try {
                    places.push(L.geoJSON(obj).bindPopup(res[i].name));
                    names.push(res[i].name + res[i].address_line_1);
                }
                catch {
                    console.log("This did not work");
                    continue;
                }

            }
            console.log("places",places);
            resetMap();
            markers = L.layerGroup(places).addTo(mymap);
            foodList(res);
            return res;
        });
}
