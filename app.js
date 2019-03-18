// from data.js
var tableData = data;

// The table body
var tbody = d3.select("tbody");

// Console.log the data from the JS file
console.log(data);

// Loop through data and console log the objects
data.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append("tr");

    Object.entries(tableData).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value in the  data
        var cell = tbody.append("td");
        // Step 5: Use d3 to update each cell's text with the data values (Date, City, State, Country, Shape, Duration and Comments)
        cell.text(value);
    })   
});

// Select the Filter button
var filter = d3.select("#filter-btn");

filter.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Console log the filtered data
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

})