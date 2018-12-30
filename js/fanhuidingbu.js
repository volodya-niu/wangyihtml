var H=document.getElementsByTagName("body")[0];
H.onscroll=function(){
    var mmedi=document.getElementById("mmedi");
    if (H.scrollTop>-50&&H.scrollTop<2100)
    {
        mmedi.pause();
        btn.value = "播放";
    }else{
        mmedi.play();
        btn.value = "暂停";

    }
}