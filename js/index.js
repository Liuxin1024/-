window.onload = function () {
/*
* 实现功能：点击对应的变换颜色
* 思路 给每一个要点击的绑定点击事件
* 首先要遍历 拿到每个元素
* 点击之后给每一个的class都清空
* 给点击的 加class
* */
  // const wrapper = document.querySelectorAll('.wrapper')
  // const scroll = new BScroll(wrapper,function () {
  //   click(true)
  // })
  var footerGuides = document.querySelectorAll('#app .footer .footer_guide')
  var Sections = document.querySelectorAll('#app .content section')
  for (var i = 0; i < footerGuides.length; i++) {
  //  在这要操作它的每一项 要先拿到它的每一项定一个变量
    var item = footerGuides[i];
    item.index = i;
    /*
    * //  然后给它绑定监听
  //  这个回调 里传两个东西 一个是动作 什么时候传 一个是触发之后的回调
  //  在这用到的动作是 touchend  手指离开才会触发
     给每一项 添加点击事件
     第一遍遍历是要拿到 每一个item 这次遍历是要清除样式
     进来之后重置每一个class的样式
     再给点击的 class 添加 actives
    * */
    item.addEventListener('touchend',function () {
      for (var j = 0; j < footerGuides.length; j++) {
        //重置样式
        footerGuides[j].className = 'footer_guide';
        Sections[j].className = '';
        //修改样式
        this.className = 'footer_guide actives';
        Sections[this.index].className = 'on'
      }
    })
  }


  //轮播图1
  new Swiper ('#swiper1', {
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    //要切回原样式 把下面这行注了
    // effect : 'cube',

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },




  })

  //轮播图2
  new Swiper ('#swiper2', {
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    //要切回原样式 把下面这行注了
    // effect : 'cube',

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },




  })

  //滑动



}