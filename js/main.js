// This XMLHttpRequest object is an inbuilt object that JavaScript provides to allow us to consume APIs.
// This creates a new instance of the object

var xhr = new XMLHttpRequest();   

// First argument is "GET" method retrieves data from the server. POST, is used when we send data to the server, e.g. loading a file, updating form data.
// Second argument is the url we want to get

xhr.open("GET", "https://swapi.co/api/");

// Send the request
xhr.send();

// This is checking the status of the send request. readyState = 4 means the request has been completed
// this.status = http status code. 200 = ok
// Google "xhr readystate". See mozilla website
// So, if everything is ok we load the data into the "data" div
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

