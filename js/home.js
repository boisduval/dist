//  查询
const handleSearch = function () {
  $('.home-search-button').click(function (e) {
    // 获取输入框内容
    const text = $('.home-search-input input').val()
    console.log('输入框: ' + text)
  })
}

//  首页-资讯汇总-导航
const handleZX = function () {
  $('nav.overview').click(function (e) {
    // 清除所有选中状态
    $('nav.overview').removeClass('active')
    $(e.target).addClass('active')

    const name = e.target.innerText
    console.log('当前选中：' + name)
    //  do sth...
  })
}

//  首页-资讯汇总-消息列表
const ZXList = function () {
  let data = [
    {title: '新会陈皮再添国字号头衔！入选全国…', date: '2022-02-02', id: 2},
    {title: '新会陈皮再添国字号头衔！入选全国…', date: '2022-02-02', id: 3},
    {title: '新会陈皮再添国字号头衔！入选全国…', date: '2022-02-02', id: 4},
    {title: '防护、排水给力！10万亩新会柑“汛”…', date: '2022-02-02', id: 5},
    {title: '防护、排水给力！10万亩新会柑“汛”…', date: '2022-02-02', id: 6},
  ]

  let html = '<ul>'
  $.each(data, function (i, item) { //
    html += '<li><h4 class="title">' + item.title + '</h4>' + '<p class="date">' + item.date + '</p>' + '</li>';
  });
  html += '</ul>';
  html += '<a class="overview-list-more">查看更多>></a>'
  $(".overview-list").html(html);

}

//  首页-红黑榜
const redBlack = function () {
  let data = [
    {
      title: '江门新会大红柑正式采摘！新会陈皮全产业链产值超…',
      date: '2022-03-26',
      content: '11月18日，江门新会区庆祝2021年中国农民丰收节暨新会大红柑采摘活动在新会柑之林梅江种植示范基地成功举办，为新会柑种质资源中心今年刚采收的道地新会柑皮举行封箱仪式。目前，新会全区种植新会柑约10万亩，形成药、…'
    },
    {
      title: '江门新会大红柑正式采摘！新会陈皮全产业链产值超…',
      date: '2022-03-12',
      content: '11月18日，江门新会区庆祝2021年中国农民丰收节暨新会大红柑采摘活动在新会柑之林梅江种植示范基地成功举办，为新会柑种质资源中心今年刚采收的道地新会柑皮举行封箱仪式。目前，新会全区种植新会柑约10万亩，形成药、…'
    },
    {
      title: '江门新会大红柑正式采摘！新会陈皮全产业链产值超…',
      date: '2022-03-26',
      content: '11月18日，江门新会区庆祝2021年中国农民丰收节暨新会大红柑采摘活动在新会柑之林梅江种植示范基地成功举办，为新会柑种质资源中心今年刚采收的道地新会柑皮举行封箱仪式。目前，新会全区种植新会柑约10万亩，形成药、…'
    },
    {
      title: '江门新会大红柑正式采摘！新会陈皮全产业链产值超…',
      date: '2022-03-26',
      content: '11月18日，江门新会区庆祝2021年中国农民丰收节暨新会大红柑采摘活动在新会柑之林梅江种植示范基地成功举办，为新会柑种质资源中心今年刚采收的道地新会柑皮举行封箱仪式。目前，新会全区种植新会柑约10万亩，形成药、…'
    },
  ]
  let html = ''
  $.each(data, function (i, item) { //
    html += '<div class="r-b-card">' +
      '<div class="r-b-date">' + item.date.split("-")[2] + '</div>' +
      '<div class="r-b-time">' + item.date.split("-")[0] + '-' + item.date.split("-")[1] + '</div>' +
      '<h4 class="r-b-title">' + item.title + '</h4>' +
      '<p>' + item.content + '</p>' +
      '</div>';
  });
  $(".r-b-list").html(html);
}

//  红黑榜切换
const handleRedBlack = function () {
  $('.r-b-tab').click(function (e) {
    // 清除所有选中状态
    $('.r-b-tab').removeClass('active')
    $(e.target).addClass('active')

    const name = e.target.innerText
    console.log('当前选中：' + name)
    //  do sth...
  })
}

//  首页-农户风采-列表
const farmerList = function () {
  let data = [
    {
      title: '2022年江门市“侨都十大工匠”“侨都百优…',
      date: '2022-03-26',
      content: '     为深入贯彻落实习近平新时代中国特色社会主义思想和习近平总书记对技能人才工作的重要指示批示精神，按照市委关于“人才…'
    }, {
      title: '2022年江门市“侨都十大工匠”“侨都百优…',
      date: '2022-03-26',
      content: '     为深入贯彻落实习近平新时代中国特色社会主义思想和习近平总书记对技能人才工作的重要指示批示精神，按照市委关于“人才…'
    }, {
      title: '2022年江门市“侨都十大工匠”“侨都百优…',
      date: '2022-03-26',
      content: '     为深入贯彻落实习近平新时代中国特色社会主义思想和习近平总书记对技能人才工作的重要指示批示精神，按照市委关于“人才…'
    },
  ]

  let html = ''
  $.each(data, function (i, item) { //
    html +=
      '<div class="home-farmer-news">' +
      '<div class="home-farmer-news-date">' +
      '<div class="date">' + item.date.split("-")[2] + '</div>' +
      '<div class="time">' + item.date.split("-")[0] + '-' + item.date.split("-")[1] + '</div>' +
      '</div>' +
      '<div class="home-farmer-news-item">' +
      '<div class="title">' + item.title + '</div>' +
      '<div class="content">' + item.content + '</div>' +
      '</div>' +
      '</div>';

  });
  html += '<a class="home-farmer-more">查看更多>></a>'
  $(".home-farmer-list-box").html(html);
}

//  首页-企业故事
const storyList = function () {
  let data = [
    {
      img: 'static/swiper.png',
      title: '防护、排水给力！10万亩新会柑“汛”速行动',
      content: '\t近期，广东多地受到暴雨持续影响，江门市新会区也迎来持续雨水天气。目前正值10万亩新会柑保果保树的敏感期和关键期，为做好新会柑树防护和雨后管理工作，新会区农业农村局、新会陈皮产业发展中心和新会陈皮行业协会及时发出柑树管护通知，并组织人员走访柑园掌握相关落实情况，总体上看，各柑园暂未受到明显影响。\n' +
        '\t据介绍，新会柑树生长正处于夏梢、根系和幼果三个生长中心营养竞争期，其幼果极容易受外界环境影响而出现落果。经过连日监控，目前个别新会柑种植基地附近内河水位较高，但柑园内部排水正常，暂未受到明显影响…'
    },
    {
      img: 'static/swiper.png',
      title: '防护、排水给力！10万亩新会柑“汛”速行动',
      content: '\t近期，广东多地受到暴雨持续影响，江门市新会区也迎来持续雨水天气。目前正值10万亩新会柑保果保树的敏感期和关键期，为做好新会柑树防护和雨后管理工作，新会区农业农村局、新会陈皮产业发展中心和新会陈皮行业协会及时发出柑树管护通知，并组织人员走访柑园掌握相关落实情况，总体上看，各柑园暂未受到明显影响。\n' +
        '\t据介绍，新会柑树生长正处于夏梢、根系和幼果三个生长中心营养竞争期，其幼果极容易受外界环境影响而出现落果。经过连日监控，目前个别新会柑种植基地附近内河水位较高，但柑园内部排水正常，暂未受到明显影响…'
    },
  ]
  setContent(data[0])
  let html = ''
  $.each(data, function (i, item) { //
    html += '<div class="swiper-slide">' + `<img src="${item.img}" alt=""> ` + '</div>';
  });
  $(".mySwiper .swiper-wrapper").html(html);


  let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay:true,
    on: {
      slideChangeTransitionEnd: function(){
        setContent(data[this.activeIndex])
      },
    },
  });

  function setContent(obj) {
    console.log(obj)
    $('.home-story-article .title').text(obj.title)
    $('.home-story-article .content').text(obj.content)
  }
}
