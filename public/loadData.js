function loadData() {
    // confirm code is running on click
    console.log('fetch');
    fetch('/api')
        .then(res => res.json())
        .then(res => {
            // logging step to check what we got
            console.log(res);
            olstr = "<ol>";
            for (i = 0; i < res.data.length; i++) {
                olstr += "<li>" + res.data[i] + "</li>"
            }
            olstr += "</ol>"
            return olstr;
        })
        .then(codes => document.querySelector(".content").innerHTML = codes);
}