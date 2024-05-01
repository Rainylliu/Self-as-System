let scale = 1;

//Get a id is bg1, 赋值给bg1 不可变
const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const three = document.getElementById("three");

const dot = document.getElementById("dot");

//拿到html文件有个id名叫做header的占据的浏览器宽度
const header = document.getElementById("header");
var browserWidth = header.clientWidth;

//点击导航栏事件/方法，有个html传来的参数
function handleNav(param) {
    console.log(param);
    //如果我的参数为字符串home,
    if (param == "home") {
        //浏览器滑动到顶部为0，动作是缓慢的、丝滑的。
        window.scrollTo({
            top: 0,
            behavior:"smooth",
        });
        //拿到的html中有个id叫做dot,操作css属性。 名字.stle.css属性
        dot.style.transform = "translateX(0px)";

    } else if (param == "about") {
        window.scrollTo({
            top: bg1.scrollHeight,
            behavior:"smooth",
        });
        dot.style.transform = "translateX(" + browserWidth / 3 + "px)";
    } else if (param == "dream") {
        window.scrollTo({
            top: bg1.scrollHeight * 2,
            behavior:"smooth",
        });
        dot.style.transform = "translateX(" + browserWidth / 1.5 + "px)";
    }
 }   

const hover1 = document.getElementById("hover_text1");
const p1 = document.getElementById("p1");

const hover2 = document.getElementById("hover_text2");
const p2 = document.getElementById("p2");

const hover3 = document.getElementById("hover_text3");
const p3 = document.getElementById("p3");

const hover4 = document.getElementById("hover_text4");
const p4 = document.getElementById("p4");

const hover5 = document.getElementById("hover_text5");
const p5 = document.getElementById("p5");

const hover6 = document.getElementById("hover_text6");
const p6 = document.getElementById("p6");

const hover7 = document.getElementById("hover_text7");
const p7 = document.getElementById("p7");

const hover8 = document.getElementById("hover_text8");
const p8 = document.getElementById("p8");

const hover9 = document.getElementById("hover_text9");
const p9 = document.getElementById("p9");

const hover10 = document.getElementById("hover_text10");
const p10 = document.getElementById("p10");

const hover11 = document.getElementById("hover_text11");
const p11 = document.getElementById("p11");

const hover12 = document.getElementById("hover_text12");
const p12 = document.getElementById("p12");

const hover13 = document.getElementById("hover_text13");
const p13 = document.getElementById("p13");

const hover14 = document.getElementById("hover_text14");
const p14 = document.getElementById("p14");

const hover15 = document.getElementById("hover_text15");
const p15 = document.getElementById("p15");

const hover16 = document.getElementById("hover_text16");
const p16 = document.getElementById("p16");

const hover17 = document.getElementById("hover_text17");
const p17 = document.getElementById("p17");

const hover18 = document.getElementById("hover_text18");
const p18 = document.getElementById("p18");

const hover19 = document.getElementById("hover_text19");
const p19 = document.getElementById("p19");

const hover20 = document.getElementById("hover_text20");
const p20 = document.getElementById("p20");

const hover21 = document.getElementById("hover_text21");
const p21 = document.getElementById("p21");

 hover1.addEventListener("mouseover", function (event){
    // console.log(e);
    event.stopPropagation();
    event.preventDefault();
    p1.style.display = "block";
    p2.style.display = "none";
    p3.style.display = "none";
 });

 hover2.addEventListener("mouseover", function (event){
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    p1.style.display = "none";
    p2.style.display = "block";
    p3.style.display = "none";
 });

 hover3.addEventListener("mouseover", function (event){
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "block";
 });

 hover4.addEventListener("mouseover", function (event){
    event.stopPropagation();
    event.preventDefault();
    p4.style.display = "block";
    p5.style.display = "none";
    p6.style.display = "none";
});

hover5.addEventListener("mouseover", function (event){
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    p4.style.display = "none";
    p5.style.display = "block";
    p6.style.display = "none";
});

hover6.addEventListener("mouseover", function (event){
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    p4.style.display = "none";
    p5.style.display = "none";
    p6.style.display = "block";
 });

 hover7.addEventListener("mouseover", function (event){
    event.stopPropagation();
    event.preventDefault();
    p7.style.display = "block";
    p8.style.display = "none";
    p9.style.display = "none";
});

hover8.addEventListener("mouseover", function (event){
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    p7.style.display = "none";
    p8.style.display = "block";
    p9.style.display = "none";
});

hover9.addEventListener("mouseover", function (event){
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    p7.style.display = "none";
    p8.style.display = "none";
    p9.style.display = "block";
 });

 hover10.addEventListener("mouseover", function (event){
    event.stopPropagation();
    event.preventDefault();
    p10.style.display = "block";
    p11.style.display = "none";
    p12.style.display = "none";
});

hover11.addEventListener("mouseover", function (event){
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    p10.style.display = "none";
    p11.style.display = "block";
    p12.style.display = "none";
});

hover12.addEventListener("mouseover", function (event){
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    p10.style.display = "none";
    p11.style.display = "none";
    p12.style.display = "block";
 });

 hover13.addEventListener("mouseover", function (event){
    event.stopPropagation();
    event.preventDefault();
    p13.style.display = "block";
    p14.style.display = "none";
    p15.style.display = "none";
});

hover14.addEventListener("mouseover", function (event){
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    p13.style.display = "none";
    p14.style.display = "block";
    p15.style.display = "none";
});

hover15.addEventListener("mouseover", function (event){
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    p13.style.display = "none";
    p14.style.display = "none";
    p15.style.display = "block";
 });
  hover16.addEventListener("mouseover", function (event){
    event.stopPropagation();
    event.preventDefault();
    p16.style.display = "block";
    p17.style.display = "none";
    p18.style.display = "none";
});

hover17.addEventListener("mouseover", function (event){
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    p16.style.display = "none";
    p17.style.display = "block";
    p18.style.display = "none";
});

hover18.addEventListener("mouseover", function (event){
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    p16.style.display = "none";
    p17.style.display = "none";
    p18.style.display = "block";
 });
 hover19.addEventListener("mouseover", function (event){
    event.stopPropagation();
    event.preventDefault();
    p19.style.display = "block";
    p20.style.display = "none";
    p21.style.display = "none";
});

hover20.addEventListener("mouseover", function (event){
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    p19.style.display = "none";
    p20.style.display = "block";
    p21.style.display = "none";
});

hover21.addEventListener("mouseover", function (event){
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    p19.style.display = "none";
    p20.style.display = "none";
    p21.style.display = "block";
 });
function handleOff() {
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";
    p6.style.display = "none";
    p7.style.display = "none";
    p8.style.display = "none";
    p9.style.display = "none";
    p10.style.display = "none";
    p11.style.display = "none";
    p12.style.display = "none";
    p13.style.display = "none";
    p14.style.display = "none";
    p15.style.display = "none";
    p16.style.display = "none";
    p17.style.display = "none";
    p18.style.display = "none";
    p19.style.display = "none";
    p20.style.display = "none";
    p21.style.display = "none";
    
}

function handleClick(event) {
    if (event.target.getAttribute('data-url')) {
        var url = event.target.getAttribute('data-url');
        window.location.href = url;
    }
}
//圆点伴随着页面滑动。
window.addEventListener("scroll", function(event){
    console.log(window.scrollY);
    if (window.scrollY == 0) {
        dot.style.transform = "translateX(0px)";
    } else if (window.scrollY == bg1.scrollHeight) {
        dot.style.transform = "translateX(" + browserWidth / 3 + "px)";
    } else if (window.scrollY == bg1.scrollHeight * 2) {
        dot.style.transform = "translateX(" + browserWidth / 1.5 + "px)";
    }
})

window.addEventListener('scroll', function() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const totalScrollHeight = document.body.scrollHeight - windowHeight;

    // 根据滚动距离计算标题的透明度，向下滚动时逐渐减少透明度
    const opacity = 1 - scrollY / (windowHeight / 2); // 调整分母以控制消失速度

    // 计算背景图片的放大比例
    const scale1 = 1 + (scrollY / totalScrollHeight) * 0.15; // 图片1放大20%
    const scale2 = 1 + (scrollY / totalScrollHeight) * 0.40; // 图片2放大60%

    // 应用透明度到标题
    document.querySelector('.title').style.opacity = Math.max(opacity, 0);

    // 应用放大效果到背景图片
    bg1.style.transform = `translate(-50%, -50%) scale(${scale1})`;
    bg2.style.transform = `translate(-50%, -50%) scale(${scale2})`;
});

// 假设.box_two直接跟在.box_one后面
const boxTwo = document.querySelector('.box_two');
const boxTwoStart = boxOne.offsetHeight; // 假设.box_two开始的位置

window.addEventListener('scroll', function() {
    // 更新滚动逻辑以包含对.box_two的处理...
    if (scrollY >= boxTwoStart && scrollY < dreamPosition) {
        // 当滚动到.box_two区域时的逻辑
        // 例如，展示.box_two内容，移动.dot等
    }
    // 其他逻辑保持不变...
});
