// generate a given type of chart using d3 //

// generate data for a pie chart
    function makePieData(inData, inColumn){
    console.log("inColumn: " + inColumn);
        var outObjArr = [];
        
        var outObj = inData.reduce(function(count, element){
        	count[element[inColumn]] = (count[element[inColumn]] || 0) + 1;
        	return count;
        }, {});

        Object.keys(outObj).forEach(function(key, index){
        	var outObjEle = {};
        	outObjEle[inColumn] = key;
        	outObjEle.Count = outObj[key];
        	outObjArr.push(outObjEle);
        
        });
        
        return outObjArr;
    }   
    
// generate data for a bar chart
    function makeBarData(inData, inColumn){
        var outData;
        
        return outData;        
    }  

// generate data for a scatter plot
    function makeScatterData(inData, inColumn){
        var outData;
        
        return outData;        
    }   

// create a pie chart
    function makePieChart(inData, inColumn){

//    var inData = [{"Age": "20yrs", "Count":10},{"Age": "20yrs", "Count":20},{"Age": "20yrs", "Count":50}];    
  
    var width = 750;                        //width
    var height = 550;                            //height
    var radius = Math.min(width, height)/2;                            //radius
    
    var color = d3.scale.category20c();     //builtin range of colors
        
        var vis = d3.select("body")
        .append("svg:svg")              //create the SVG element inside the <body>
        .data([inData])                   //associate our data with the document
            .attr("width", width)           //set the width and height of our visualization (these will be attributes of the <svg> tag
            .attr("height", height)
        .append("svg:g")                //make a group to hold our pie chart
            .attr("transform", "translate(" + radius + "," + radius + ")")    //move the center of the pie chart from 0, 0 to radius, radius

    var arc = d3.svg.arc()              //this will create <path> elements for us using arc data
        .outerRadius(radius);

    var pie = d3.layout.pie()           //this will create arc data for us given a list of values
        .value(function(d) { return d.Count; });    //we must tell it out to access the value of each element in our data array

    var arcs = vis.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
        .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
        .enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
            .append("svg:g")                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
                .attr("class", "slice");    //allow us to style things in the slices (like text)

        arcs.append("svg:path")
                .attr("fill", function(d, i) { return color(i); } ) //set the color for each slice to be chosen from the color function defined above
                .attr("d", arc);                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function

        arcs.append("svg:text")                                     //add a label to each slice
                .attr("transform", function(d) {                    //set the label's origin to the center of the arc
                //we have to make sure to set these before calling arc.centroid
                d.innerRadius = radius/2;
                d.outerRadius = radius/2 + 10;
                return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
            })
            .attr("text-anchor", "middle")                          //center the text on it's origin
            .text(function(d, i) { return inData[i].Age + " years"; });        //get the label from our original data array

        arcs.append("svg:text")                                     //add a label to each slice
                .attr("transform", function(d) {                    //set the label's origin to the center of the arc
                //we have to make sure to set these before calling arc.centroid
                d.innerRadius = 0;
                d.outerRadius = radius/3;
                return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
            })
            .attr("text-anchor", "middle")                          //center the text on it's origin
            .text(function(d, i) { return inData[i].Count; });        //get the label from our original data array
            
    }
        
        
// create a bar chart
    function makeBarChart(inData, inColumn){
        
    }   

// create a scatter plot
    function makeScatterPlot(inData, inColumn){
        
    }   

// prepare the data and generate the appropriate chart
    function makeChart(chartInData, chartSelectedColumn, chartInputType){

        var chartInputData;
        
        switch(chartInputType) {
            case "pie":
                chartInputData = makePieData(chartInData, chartSelectedColumn)    
                console.log("chartInputData: " + JSON.stringify(chartInputData));
                makePieChart(chartInputData, chartSelectedColumn);
                break;
            case "bar":
                chartInputData = makeBarData(chartInData, chartSelectedColumn)                   
                makeBarChart(chartInputData, chartSelectedColumn);
                break;
            case "scatter":
                chartInputData = makeScatterData(chartInData, chartSelectedColumn)                   
                makeScatterPlot(chartInputData, chartSelectedColumn);
                break;
            default:
                alert("No Chart Type Selected");
        };
    }