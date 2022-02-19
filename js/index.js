window.onload = function () {
    let oLeft = document.querySelector(".btn1");
    let oRight = document.querySelector(".btn2");
    let oImgList = document.querySelector(".banner-p")
    // let oImgList=document.querySelector("banner-p");
    let clonefirstImg = oImgList.firstElementChild.cloneNode('img');
    oImgList.appendChild(clonefirstImg)
    console.log(oImgList)

    let index = 0

    //图片切换，轮播
    function handleRightBtn() {
        index++
        oImgList.style.left = index * -590 + "px"
        // oImgList.style.transition="0.2s ease"
        if (index === 8) {
            index = 0
            setTimeout(() => {
                oImgList.style.left = index * -590 + "px"
                // oImgList.style.transition="none"
            }, 10);

        }

    }
    let circles = document.getElementById('pointer1').getElementsByTagName('a')
    //切换图片小圆点跟着显示效果
    function setcircles() {
        for (let i = 0; i < circles.length; i++) {
            if (i === index) {
                circles[i].classList.add("active")
                // circles[i].className="active"
            } else {
                circles[i].classList.remove("active")
                // circles[i].className=""
            }
            
        }

    }

    //定时器自动切换
    let timer = setInterval(() => {
        handleRightBtn()
        setcircles()
    }, 800);

    //点击右键切换图片
    oRight.addEventListener("click", () => {
        // 清除定时器
        clearInterval(timer)
        //调用图片切换函数
        handleRightBtn()
        //调用小圆点跟着变换的函数
        setcircles()
        //鼠标移出按钮的时候定时器重新开启
        oRight.onmouseout = function () {
            clearInterval(timer)
            timer = setInterval(() => {
                handleRightBtn()
                setcircles()
            }, 800);

        }

    })
 
    //点击左键切换图片
    oLeft.addEventListener('click', () => {
        // 清除定时器
        clearInterval(timer)
        index--;
        if (index === -1) {
            oImgList.style.left = 8 * -590 + "px"
            // oImgList.style.transition="none"
            index = 7
            setTimeout(() => {
                
                oImgList.style.left = index * -590 + "px"
                // oImgList.style.transition="0.2 ease"
            }, 0)
        }
        oImgList.style.left = index * -590 + "px"
        //调用小圆点跟着变换的函数
        setcircles()
        //鼠标移出按钮的时候定时器重新开启
        oLeft.onmouseout = function () {
            clearInterval(timer)
            timer = setInterval(() => {
                handleRightBtn()
                setcircles()
            }, 800);
        }

    })
    let mouse1 = document.querySelector(".banner-p");
    let mouse2 = document.querySelector(".banner-p");
    //鼠标移入图片的时候定时器关闭
    mouse1.onmouseover = function () {
        clearInterval(timer)

    }
    //鼠标移出图片的时候定时器重新开启
    mouse2.onmouseout = function () {
        clearInterval(timer)
        timer = setInterval(() => {
            handleRightBtn()
            setcircles()
        }, 800);
    }
    //鼠标移到圆点切换图片
    for (let i = 0; i < circles.length; i++) {
        circles[i].num=i;
        circles[i].onmouseover=function() {
            clearInterval(timer)
            index=this.num
            oImgList.style.left = index * -590 + "px"
            circles[i].style.cursor="default" 
            setcircles()
        }
        
    }
let nextbtn=document.getElementById('nextbtn')
let imglist2=document.querySelector('.imglist')
let s=0
nextbtn.onclick=function () {
    s++;
    imglist2.style.left=s*-576+"px"
    // imglist2.style.transition="0.6s ease"
    if (s===4) {
        s=0
        setTimeout(() => {
            imglist2.style.left = s * -576 + "px"
            // imglist2.style.transition="none"
        }, 10);
    }
    
}


// 最右侧滚动导航条
let leftlist=document.querySelector('.left-list')
window.onscroll=function(){
    var scrollTop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    console.log(scrollTop)
            if (scrollTop>=688) {
        leftlist.className='left-list1'
       
    }else{
        leftlist.className='left-list'
}
    
}

}
