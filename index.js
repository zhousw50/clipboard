function c(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
function r(file) {
    var xhr = new XMLHttpRequest();
    xhr.open('get',file,true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4&&xhr.status == 200){
            var html=xhr.responseText;
            document.getElementById("1").innerHTML=marked.parse(html);
        }
    };
}
function gettime(){
    //if(document.getElementById("date").innerHTML!=Date())
        document.getElementById("date").innerHTML=Date();
}setInterval("gettime()",0.0000000001)
function show(){
    document.getElementById("1").removeAttribute("hidden");
}
setInterval("show()",1000);
if(!c("file"))window.location.href="?file=lists.md"
r(c("file"));
MathJax.Hub.Queue(["Typeset", MathJax.Hub]);