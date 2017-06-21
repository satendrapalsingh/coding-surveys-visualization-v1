// code for uploading and parsing local map.json file //

var mapJSON;
// check if FileReader API supported by user's browser //
if (!window.FileReader) {
  alert('Sorry, the Filereader API is not supported by your browser.');
}

// load the local map JSON file in arr var mapJSON //
function loadFile(){
  var input, file, fr;

  input = document.getElementById("mapfile");
  if (!input){
      alert("input filename not found");
      return;
  }
  else if (!input.files){
      alert("files property of filereader not supported by your browser");
      return;
  }
  else if (!input.files[0]){
      alert("select file(s) before clicking the load button");
      return;
  }
  else {
      file = input.files[0];
      fr = new FileReader();
      fr.onload = receivedText;
      fr.readAsText(file);
  }
  
  function receivedText(text){
   var lines = text.target.result;
   mapJSON = JSON.parse(lines);
// append the mapJSON data to HTML elements for display in the browser //
    document.getElementById("jsonData").innerHTML = getAllProps(mapJSON);
  }
  
// function to print object properties recursively //
function getAllProps(obj){
  
  return Object.keys(obj);
}

};



