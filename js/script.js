$(function () {
  // fullpage 초기화
  $('#fullpage').fullpage({
    // 1. 앵커 설정
    anchors: ['sec1', 'sec2', 'sec3', 'sec4'],
    // navigation: true,

    // 2. menu적용(인디케이터 커스텀)
    menu: '#myMenu',

    // 3. 필요 옵션 적용
    // 스크롤 속도 : 기본값 700
    scrollingSpeed: 1400,

    // 고정시킬 요소
    fixedElements: '#header',

    // 영역 콘텐츠의 세로 정렬
    verticalCentered: false,
  });
});
