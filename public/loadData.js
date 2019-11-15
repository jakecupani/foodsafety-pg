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
                try {
                    coordinates.push(obj.coordinates);
                }
                catch {
                    continue;
                }
                console.log(obj.coordinates);

            }
            // console.log(coordinates);
            return res;
        });
}