const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function getTableHeaders(obj) {
    var tableHeaders = [];
    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    });
    
    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var el = document.getElementById("data");         // create an element for the data
    el.innerHTML = "";                                // clear the inner element. Each time you click on an object it will clear and display
                                                      // rather than adding to the end
    getData(type, function(data) {
        data = data.results;
        
        var tableHeaders = getTableHeaders(data[0]);   // create table headers

        data.forEach(function(item) {
           
            // el.innerHTML += "<p>" + item.name + "</p>";              // display the data in a par element for clarity
        });
        
        el.innerHTML = `<tr>${tableHeaders}</tr>`;
    });
}