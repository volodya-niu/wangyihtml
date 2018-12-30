/*popup */
.popup{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2000;
}
.popMask {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #000;
    -moz-opacity: 0.6;
    filter: alpha(opacity=60);
    opacity: 0.6;
}
.popMain {
    position: absolute;
    overflow: hidden;
    font-size: 12px;
    border: 1px solid #537695;
    left: 50%;
    width: 384px;
    margin-left: -194px;
    background-color: #fff;
}
.popTitle {
    color: #000;
    height: 44px;
}
.popTitle .text {
    margin-left: 12px;
    line-height: 44px;
    font-size: 16px;
    color: #0154a0;
}
.popTitle .close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px;
    height: 30px;
    overflow: hidden;
    font-size: 12px;
    text-indent: -9999px;
    background: url("img/popup-r-close.png") center no-repeat;
    display: inline-block;
    z-index: 99;
    float: right;
    outline: none;
}
.popContent {
    background: #fff;
    overflow: auto;
    color: #666;
    padding:0 40px 40px;
}
.popContent .info_icon{
    width: 110px;
    height: 110px;
    margin: 0 auto;
    background: center no-repeat;
}
.popContent .info_icon_suc{
    background-image: url("img/popup-suc.png");
}
.popContent .info_icon_info{
    background-image: url("img/popup-info.png");
}
.popContent .info_icon_warn{
    background-image: url("img/popup-warn.png");
}
.popContent .info_icon_fail{
    background-image: url("img/popup-fail.png");
}

.popContent .layer_msg {
    font-size: 24px;
}
.popContent .layer_msg.msg {
    font-size: 14px;
}
.popContent .layer_msg p {
    padding: 10px 0;
    margin: 0;
    font-size: 14px;
}
/*popup end*/