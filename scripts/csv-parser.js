// code for parsing included csv survey data file //
    var csvData;            // var for storing csv data as array
    var csvColumns;         // var for storing csv column names
    var popElement = "";    // var for holding and passing generated html button elements
    var dummyData = "helloji";
    
// dummy data for testing the pie-chart  
    dummyData = [
        {label: "age10-20", count:20},
        {label: "age20-30", count:5},
        {label: "age30-40", count:9},
        {label: "age40-50", count:13}
    ];    

// generate pie-chart on button-click (debugging mode)
    function printButton(columnIndex){
        console.log("button index " + " " + columnIndex);  
    }               
    
        
// load and parse the included csv data file, with d3
console.log("loading csv data");
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
        
// create the pie-chart
        var width = 360;
        var height = 360;
        var radius = 150;
        var color = d3.scaleOrdinal(d3.schemeCategory20b);
// create the pie-chart svg element; set its attributes, group it and center it
        var svg = d3.select("#pieChart")
            .append("svg")
            .attr("width",width)
            .attr("height",height)
            .append("g")
            .attr("transform", "translate(" + (width/2) + "," + (height/2) +")");
// create the pie-chart arc and start/end angles    
        var arc = d3.arc()
            .innerRadius(0) //since it's a pie not an annulus
            .outerRadius(radius);
        var pie = d3.pie()
            .value(function (d) {return d.count}) //count of a particular propery will decide the size of pie-slices
            .sort(null); //disable the default behaviour of sorting-of-the-entries to prevent animation mess-up
// create the actual pie-chart
        var path = svg.selectAll("path")
            .data(pie(dummyData))
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", function(d,i){
                return color(d.data.label)
            });    
    });
  
