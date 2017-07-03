// parse and visualize csv data //

    var csvData;            // var for storing csv data as array
    var csvColumns;         // var for storing csv column names
    var popElement = "";    // var for holding and passing generated html button elements


// parse the csv data into csvData with d3 & generate buttons from columns
    d3.csv("survey-data/test.csv", function(error, dataset){
        csvData = dataset;
        csvColumns = Object.keys(csvData[0]);

    // generate the html for displaying csv columns as buttons, include column index         
        for (var idx in csvColumns){
            popElement += "<button id='" 
                        + csvColumns[idx] 
                        + "'"
                        + " onclick='generateChart("
                        + idx
                        +")'"
                        +">" 
                        + csvColumns[idx] 
                        + "</button>" 
                        + "<br>";
        };

    // push generated button-html into dom        
        document.getElementById("columnIndex").innerHTML = popElement;

    });

// generate appropriate chart on button-click
    function generateChart(columnIndex){
        
        var selectedColumn = csvColumns[columnIndex];
        var chartTypeLookup = {Age:"pie", Gender:"bar", Income:"scatter"};  //temporary chart-type lookup
        var chartType = chartTypeLookup[selectedColumn];  //get chart-type with selected column

    // generate chart with d3
        makeChart(csvData, selectedColumn, chartType);
        
    }               
    

    

