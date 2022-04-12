
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
            document.getElementsByTagName("body")[0].innerHTML=marked.parse(html);
        }
        else {
            document.getElementsByTagName("body")[0].innerHTML="无此文件";
        }
    };
}
$(document).ready(function (){
    if(!c("file"))window.location.href="?file=lists.md"
    r(c("file"));
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})
