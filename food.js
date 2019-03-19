// function detail(){
//     window.location.href = 'detail.html';
// }

window.onload = function () {
    var nowDate = new Date();
    $("#headerTime").text(
        nowDate.getFullYear() + "-" + nowDate.getMonth() + "-" + nowDate.getDate()
    )
}
//蔬菜沙拉动画
$("#salad_detaileButton").click(
    function () {
        $("#saladImage").animate({
            height: '150px',
            width: '150px'
        });
        $("#saladName").animate({
            fontSize: '40px',
            bottom: "-70px"
        });
        $("#saladDetail").slideUp();
        $("#salad_todoDetail").attr("style", "display:flex;");
    }
)

$("#salad_closeDetail").click(
    function () {
        $("#saladImage").animate({
            height: '300px',
            width: '300px'
        });
        $("#saladName").animate({
            fontSize: '25px',
            bottom: "+70px"
        });
        $("#saladDetail").slideDown();
        $("#salad_todoDetail").slideUp();
    }
)
//香煎鱼块动画
$("#fish_detaileButton").click(
    function () {
        $("#fishImage").animate({
            height: '150px',
            width: '150px'
        });
        $("#fishName").animate({
            fontSize: '40px',
            bottom: "-70px"
        });
        $("#fishDetail").slideUp();
        $("#fish_todoDetail").attr("style", "display:flex;");
    }
)

$("#fish_closeDetail").click(
    function () {
        $("#fishImage").animate({
            height: '300px',
            width: '300px'
        });
        $("#fishName").animate({
            fontSize: '25px',
            bottom: "+70px"
        });
        $("#fishDetail").slideDown();
        $("#fish_todoDetail").slideUp();
    }
)
//排骨焖饭动画
$("#risotto_detaileButton").click(
    function () {
        $("#risottoImage").animate({
            height: '150px',
            width: '150px'
        });
        $("#risottoName").animate({
            fontSize: '40px',
            bottom: "-70px"
        });
        $("#risottoDetail").slideUp();
        $("#risotto_todoDetail").attr("style", "display:flex;");
    }
)

$("#risotto_closeDetail").click(
    function () {
        $("#risottoImage").animate({
            height: '300px',
            width: '300px'
        });
        $("#risottoName").animate({
            fontSize: '25px',
            bottom: "+70px"
        });
        $("#risottoDetail").slideDown();
        $("#risotto_todoDetail").slideUp();
    }
)