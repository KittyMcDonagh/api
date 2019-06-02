const baseURL = "https://swapi.co/api/";            // create constant for the base URL we're using

function getData(type, cb) {                    // pass in type (people, vehicles, films, etc) to getData function
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");              // pass in base URL + type + '/'
    xhr.send();
}

function writeToDocument(type) {              // parameter "type" comes from api - people, films, vehicles, etc
    getData(type, function(data) {            // calling an anonymous function
        document.getElementById("data").innerHTML = data;
    });
}