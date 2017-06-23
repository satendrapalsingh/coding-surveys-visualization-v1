// code for parsing included csv survey data file //
    var csvData;            // var for storing csv data as array
    var csvColumns;         // var for storing csv column names
    var popElement = "";    // var for holding and passing generated html button elements
    var dummyData = "helloji";
    

// parse the csv data into csvData with d3 & generate buttons from columns
    d3.csv("survey-data/2016-FCC-New-Coders-Survey-Data.csv", function(error, dataset){
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

// push generated button html into dom        
        document.getElementById("columnIndex").innerHTML = popElement;

    });
  
    


// generate pie-chart on button-click (debugging mode)
    function generateChart(columnIndex){
//        console.log("button index " + " " + columnIndex);  

// dummy data for testing the pie-chart  
        dummyData = [
            ["ages 10-20", 30],
            ["ages 20-30", 40],
            ["ages 30-40", 10],
            ["ages 40-50", 20]
        ];  

// create the pie-chart with c3        
        var chart = c3.generate({
            data: {
                columns: dummyData,
                type: "pie"
           } 
        });
    }               
    

    

