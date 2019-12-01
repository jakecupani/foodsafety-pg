function popupData(estid) {
    console.log(estid);
    let restaurant;
    for (var i =0; i<raw_data.data.length; i++) {
        if (raw_data.data[i].establishment_id == estid) {
            console.log(raw_data.data[i]);
            restaurant = raw_data.data[i];
        }
    }
    document.getElementById("inspection_results").innerHTML = restaurant.inspection_results;
} 