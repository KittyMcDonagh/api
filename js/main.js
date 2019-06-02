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
    
    var tableRows = [];                             // create table rows as an empty array
    
    var el = document.getElementById("data");         // create an element for the data
    el.innerHTML = "";                                // clear the inner element. Each time you click on an object it will clear and display
                                                      // rather than adding to the end
    getData(type, function(data) {
        data = data.results;
        
        var tableHeaders = getTableHeaders(data[0]);   // create table headers

        data.forEach(function(item) {
            var dataRow = [];                           // create a data row as an empty array
            
            Object.keys(item).forEach(function(key) {
                dataRow.push(`<td>${item[key]}</td>`);    // this will get the value in the key, rather than the key name
            });
            tableRows.push(dataRow);                      // push the data row into the table
            
           
            
        });
        
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
}