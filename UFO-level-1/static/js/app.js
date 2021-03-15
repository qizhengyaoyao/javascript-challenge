// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData);
var tbody = d3.select("tbody");

function addUFOdata(UFOdata) {
  var row = tbody.append("tr");

  Object.entries(UFOdata).forEach(function([key, value]) {
    // console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
};

tableData.forEach(addUFOdata);

var button = d3.select("#filter-btn");

button.on("click", runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // console.log(inputValue);
  
    var filteredData = tableData;
    if (inputValue != ""){
      filteredData = tableData.filter(tableData => tableData.datetime == inputValue);
    };

    // console.log(filteredData);
    tbody.html("");

    if(filteredData.length !== 0) {
        filteredData.forEach(addUFOdata);
    }
    else {
        var cell = tbody.append("tr").append("td");
        cell.text("No Data matches the input value.");
        cell.attr("colspan", "7");
    }
  };