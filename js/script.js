$(function () {
  // fullpage 초기화
  $('#fullpage').fullpage({
    // 1. 앵커 설정
    anchors: ['sec1', 'sec2', 'sec3', 'sec4'],
    // navigation: true,

    // 2. menu적용(인디케이터 커스텀)
    menu: '#myMenu',
  });
});
