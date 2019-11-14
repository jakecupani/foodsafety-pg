var map = L.map('mapid').setView([39.09, -76.83], 13);
L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
    {
        attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
        maxZoom: 17,
        minZoom: 9
    }).addTo(map);