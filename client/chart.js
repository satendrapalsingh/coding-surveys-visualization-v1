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
        var width = 300;
        var height = 300;
        var radius = Math.min(width, height)/2;
        
        var color = d3.scaleOrdinal()
	                .range(["#2C93E8","#838690","#F56C4E"]);

        var pie = d3.pie()
                .value(function(d){return d.Count})(inData);

        var arc = d3.arc()
                .outerRadius(radius-10)
                .innerRadius(0);
            
        var labelArc = d3.arc()
                    .outerRadius(radius-40)
                    .innerRadius(radius-40);
            
        var svg = d3.select("#chart")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width/2 + "," + height/2 + ")");
        
        var g = svg.selectAll("arc")
                .data(pie)
                .enter()
                .append("g")
                .attr("class", "arc");
                
        g.append("path")
            .attr("d", arc)
            .style("fill", function(d){ return color(d.Age);});
            
        g.append("text")
            .attr("transform", function(d) {return "translate(" + labelArc.centroid(d) + ")";})
            .text(function(d) {return d.Age;})
            .style("fill", "#fff");
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