window.onload=function(){
     var display=document.getElementById("display");
    var display1=document.getElementById("display1");
    var get=document.getElementById("get");
    var get1=document.getElementById("get1");
    var freeweek=document.getElementById("freeweek");
    var click=document.getElementById("click");
    var icoone=document.getElementById("icoone");
    var icotwo=document.getElementById("icotwo");
    get.setAttribute("class","on");
    get.onclick=function(){
            display.setAttribute("class", "black");
            display1.setAttribute("class","none");
            get.setAttribute("class","on");
            get1.setAttribute("class"," ")
        };
    get1.onclick=function(){
        display1.setAttribute("class","black");
        display.setAttribute("class","none");
        get1.setAttribute("class","on");
        get.setAttribute("class"," ")
    };
freeweek.style.display="none";
    click.onclick=function(){
        freeweek.style.display="block";
    };
    window.onscroll= function(){
        var t = document.documentElement.scrollTop||document.body.scrollTop;
        if(t<=750){
            icoone.style.background= "url(../images/qiye-bg.png) -200px -19px no-repeat";
            icoone.style.color="#2a61a1";
            icotwo.style.background=" url(../images/qiye-bg.png) -175px -17px no-repeat";

        }else{
           icoone.style.background=" url(../images/qiye-bg.png) -175px -17px no-repeat";
            icotwo.style.background= "url(../images/qiye-bg.png) -200px -19px no-repeat";
            icoone.style.color="#2a61a1"
        }
    }
};