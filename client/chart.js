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
    };   
    
// generate data for a bar chart
    function makeBarData(inData, inColumn){
        var outData;
        
        return outData;        
    };   

// generate data for a scatter plot
    function makeScatterData(inData, inColumn){
        var outData;
        
        return outData;        
    };   

// create a pie chart
    function makePieChart(inData, inColumn){

    };   
    
// create a bar chart
    function makeBarChart(inData, inColumn){
        
    };   

// create a scatter plot
    function makeScatterPlot(inData, inColumn){
        
    };   

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
        }
    };
