let editordiv = document.getElementById("editor")
let btnsdiv = document.getElementById("welcome")
let openbtn = document.getElementById("btn1")
let newbtn = document.getElementById("btn2")
let filenamediv = document.getElementById("filename")
let filecontent;
let filename;


document.getElementById('myfl').onchange = function(){
    var myfl = this.files[0];
    console.log(myfl);
    filename = myfl.name
    console.log(myfl.readAsText);
    var reader = new FileReader();
    reader.onload = function(progressEvent){
      console.log(this.result);
      filecontent = this.result
      updateEditor(filecontent,filename);
    };
    reader.readAsText(myfl);
};

editordiv.style.visibility = "hidden"

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}