var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://swapi.co/api/");
xhr.send();

function setData(jsonData) {
    data = jsonData;
    console.log("data = ")
    console.log(data);
    console.log("jsonData = ")
    console.log(jsonData);
}

xhr.onreadystatechange = function() {
    console.log("readyState = "+this.readyState+" status = "+this.status)
    if (this.readyState == 4 && this.status == 200) {
        setData(JSON.parse(this.responseText))          // This passes the data out to the setData function, which will store it in 'data'
        
    };
}

