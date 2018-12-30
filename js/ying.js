window.onload=function(){
    var closeBtn=document.getElementById("closeBtn");
    var freeTitle=document.getElementById("free-title");
    var freeWeekBor=document.getElementsByClassName("freeWeek-bor")[0];
    freeTitle.onclick=function(){
        freeWeekBor.style.display="block";
    };
    closeBtn.onclick=function(){
        freeWeekBor.style.display="none";
    };

    ///*查询的必须是大于4并且小于501的纯数字*/
    var counting=myForm.counting;
    var query=myForm.query;
    var queryTip=document.getElementsByClassName("query-tip-bor")[0];
    var querying=document.getElementsByClassName("querying-bor")[0];
    var queried=document.getElementsByClassName("queried")[0];
    var regCou=/^\+?[1-9][0-9]*$/;
    var flag=false;//用来查询的范围
    query.onclick=function(){
        var countingValue=counting.value;
        console.log(countingValue);
       if(regCou.test(countingValue)){
           if(countingValue>4&&countingValue<501){
               flag=true;
               queried.innerHTML=countingValue;
               querying.style.display="block";

           }else{
               flag=false;
               queryTip.style.display="block";
               return false;
           }
       }else if(!regCou.test(countingValue)){
           flag=false;
           queryTip.style.display="block";
           return false;
       }
    };

    //点击收起querying部分
    var packBtn=document.getElementsByClassName("pack-btn")[0];
    packBtn.onclick=function(){
        querying.style.display="none";
    }

    //以下是fixed-lt部分
    //点击改变fixed-lt部分
    var li=document.querySelectorAll(".fixed-lt-body>li>a");
    var dot=document.querySelectorAll(".fixed-lt-body>li>a>i");
    var num;
    for(var j=0;j<dot.length;j++){
        li[j].index=j;
        li[j].onclick=function(){
            var index=this.index;
            num=index;
            for(var i=0;i<dot.length;i++){
                li[i].style.color="#666";
                dot[i].style.backgroundPosition="-175px -17px";
                dot[i].style.marginTop="8px";
            }
            li[num].style.color="#2a61a1";
            dot[num].style.backgroundPosition="-200px -19px";
            dot[num].style.marginTop="10px";
            //并且根据点击判断滚轮的位置
            if(num=1){
                document.body.scrollTop=420;
            }else if(num=2){
                document.body.scrollTop=840;
            }else{
                document.body.scrollTop=0;
            }
        }
    }

    //根据滚动条的高度改变fixed-lt部分
    document.onscroll=function(){
        if(document.body.scrollTop>420&&document.body.scrollTop<840){
            num=1;
        }else if(document.body.scrollTop>840){
            num=2;
        }else{
            num=0;
        }
        for(var i=0;i<dot.length;i++){
            li[i].style.color="#666";
            dot[i].style.backgroundPosition="-175px -17px";
            dot[i].style.marginTop="8px";
        }
        li[num].style.color="#2a61a1";
        dot[num].style.backgroundPosition="-200px -19px";
        dot[num].style.marginTop="10px";
    }


};