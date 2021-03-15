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
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");
  
    // Get the value property of the input element
    // var inputValue = inputDate.property("value");
  
    // console.log(inputDate);
  
    // Get the filtered data depending on the input conditions
    var filteredData = tableData;
    filteredData = tableData.filter(function filterEnter(data){
      var returnvalue = true;
      if (inputDate!="") {
        returnvalue = returnvalue && (data.datetime == inputDate)
       };
      if (inputCity!="") {
        returnvalue = returnvalue && (data.city == inputCity)
       };
      if (inputState!="") {
        returnvalue = returnvalue && (data.state == inputState)
       };
      if (inputCountry!="") {
        returnvalue = returnvalue && (data.country == inputCountry)
       };
      if (inputShape!="") {
        returnvalue = returnvalue && (data.shape == inputShape)
       };

      return returnvalue;
    });

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