// client side code for parsing & visualizing csv data //

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

// push generated button html into dom        
        document.getElementById("columnIndex").innerHTML = popElement;

    });

// generate pie-chart on button-click (debugging mode)
    function generateChart(columnIndex){
        var chartData = [[]];
        var selectedColumn = csvColumns[columnIndex];
        var chartTypeLookup = {Age:"bar", Gender:"pie", Income:"scatter"};
        var chartType = chartTypeLookup[csvColumns[columnIndex]];
        
        function getChartData(csvDatasetName, selectedColumn){
            var dataArray;
//** code to get & display array element frequency as an array            
            var arrayToCount = [0,1,2,2,2,3,1];
            var countObj = arrayToCount.reduce(function(counter, item) {
                    counter[item] = counter.hasOwnProperty(item) ? counter[item] + 1 : 1;
                    return counter;
                }, {});
            
            console.log(countObj);
// convert count object to count array, fit for consumption by c3            
            var countArray = Object.keys(countObj).map(function(e) {
                return [Number(e), countObj[e]];
            });
            
            console.log(countArray);
//**            
            return dataArray;
        };
        
        chartData = getChartData(csvData, selectedColumn)
        
// create the pie-chart with c3        
        var chart = c3.generate({
            data: {
                columns: chartData,
                type: chartType
           } 
        });
    }               
    

    

