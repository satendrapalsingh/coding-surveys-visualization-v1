// code for parsing included csv survey data file //

    var csvData;            // var for storing csv data as array
    var csvColumns;         // var for storing csv column names
    var popElement = "";    // var for holding and passing generated html button elements

// debug function, remove definition and calls once done
    function printButton(columnIndex){
        console.log("button index " + " " + columnIndex);  
    }               

// load and parse the included csv data file, with d3
    d3.csv("survey-data/2016-FCC-New-Coders-Survey-Data.csv", function(error, dataset){
        csvData = dataset;
        csvColumns = Object.keys(csvData[0]);

// generate the html for displaying csv columns as buttons, include column index         
        for (var idx in csvColumns){
            popElement += "<button id='" 
                        + csvColumns[idx] 
                        + "'"
                        + " onclick='printButton("
                        + idx
                        +")'"
                        +">" 
                        + csvColumns[idx] 
                        + "</button>" 
                        + "<br>";
        };
// push generated button html into dom        
        document.getElementById("columnIndex").innerHTML = popElement;
    
    });
  