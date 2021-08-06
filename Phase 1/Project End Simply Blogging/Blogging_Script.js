function addblog(){
    var title = document.getElementById("titletext").value;
    var mess = document.getElementById("dmtext").value;
    var imgt = document.getElementById("imgtext").value;


    var blogContent =""
    var startBlog = "<div class='container'><div class='row'>"
     blogcontent ="<img src="+imgt+"><div class='col'>"+title+"</div><div class='col'>"+mess+"</div>"
    var blogend="</div></div>"
    blogContent = startBlog+blogcontent+blogend
    document.getElementById("main").innerHTML=blogContent;


}
