// generate a given type of chart using d3 //

// generate data for a pie chart
    function makePieData(inData, inColumn){
        var outData;
        
        return outData;
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
