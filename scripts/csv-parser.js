// code for parsing included csv survey data file //

    var csvData;            // var for storing csv data as array
    var csvColumns;         // var for storing csv column names
    var popElement = "";    // var for holding and passing generated html button elements

    function printButton(columnIndex){
        console.log("button index " + " " + columnIndex);  
    }               

    d3.csv("survey-data/2016-FCC-New-Coders-Survey-Data.csv", function(error, dataset){
        csvData = dataset;
        csvColumns = Object.keys(csvData[0]);
        
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
        
        document.getElementById("columnIndex").innerHTML = popElement;
    
    });
  