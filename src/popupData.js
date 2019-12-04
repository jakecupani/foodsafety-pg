function popupData(estid) {
    console.log(estid);
    let restaurant;
    for (var i = 0; i < raw_data.data.length; i++) {
        if (raw_data.data[i].establishment_id == estid) {
            console.log(raw_data.data[i]);
            restaurant = raw_data.data[i];
        }
    }
    document.getElementById("name").innerHTML = restaurant.name;
    document.getElementById("address").innerHTML = restaurant.address_line_1;
    // document.getElementById("cleanliness").innerHTML = restaurant.
    document.getElementById("inspection_results").innerHTML = restaurant.inspection_results;
    let api_lookup = restaurant.name + restaurant.address_line_1.split(" ").join("+") + restaurant.city + "+" + restaurant.state + "+" + restaurant.zip;
    console.log(api_lookup);
    let request = "<a target='_blank' id='gmap-request' href='" + "https://www.google.com/maps/search/?api=1&query=" + api_lookup + "'/>";
    console.log(request);
    document.getElementById("location-link").innerHTML = request;
    document.getElementById("gmap-request").innerHTML = "<img width=25% src='google-maps-logo.png'>"
    //https://www.google.com/maps/search/?api=1&query=760+West+Genesee+Street+Syracuse+NY+13204
    //loading in detailed Results
    document.getElementById("detailed-results").innerHTML =
        "<li><strong>" + "Inspection Date: </strong>" + restaurant.inspection_date + "</li>"
        + "<li><strong>" + "Food from approved source: </strong>" + restaurant.food_from_approved_source + "</li>"
        + "<li><strong>" + "Adequate hand washing : </strong>" + restaurant.adequate_hand_washing + "</li>"
        + "<li><strong>" + "Cold holding temperature: </strong>" + restaurant.cold_holding_temperature + "</li>"
        + "<li><strong>" + "Cooking time and temperature: </strong>" + restaurant.cooking_time_and_temperature + "</li>"
        + "<li><strong>" + "Cooling time and temperature: </strong>" + restaurant.cooling_time_and_temperature + "</li>"
        + "<li><strong>" + "Hot and cold running water: </strong>" + restaurant.hot_and_cold_running_water + "</li>"
        + "<li><strong>" + "Hot holding temperature: </strong>" + restaurant.hot_holding_temperature + "</li>"
        + "<li><strong>" + "Ill workers restricted: </strong>" + restaurant.ill_workers_restricted + "</li>"
        + "<li><strong>" + "No bare-hand contact: </strong>" + restaurant.no_bare_hand_contact + "</li>"
        + "<li><strong>" + "Proper sewage disposal: </strong>" + restaurant.proper_sewage_disposal + "</li>"
        + "<li><strong>" + "Reheating time and temperature: </strong>" + restaurant.reheating_time_and_temperature + "</li>"
        + "<li><strong>" + "Rodent and insects: </strong>" + restaurant.rodent_and_insects + "</li>"



}
