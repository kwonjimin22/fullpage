$(function () {
  // 대상을 변수에 저장
  const $btnTop = $('.btn-top');
  const $header = $('#header');

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

    // 영역에 로딩이 되고 나서
    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);
      console.log('로딩된 후 : ' + anchorLink, index, loadedSection);

      if (anchorLink === 'sec4') {
        $btnTop.fadeIn();
      }
    },

    // 영역에서 떠날 때
    onLeave: function (index, nextIndex, direction) {
      var leavingSection = $(this);
      console.log('영역에서 떠날 때 : ' + index, nextIndex, direction, leavingSection);

      if (index === 4 && direction === 'up') {
        $btnTop.fadeOut();
      }

      if (direction === 'down') {
        $header.addClass('hide');
      } else {
        $header.removeClass('hide');
      }
    },
  });

  // 처음에는 숨기고

  $btnTop.hide();

  // btn-top 버튼을 클릭했을 때
  $btnTop.on('click', function (e) {
    e.preventDefault();

    // fullpage 메서드 : 원하는 영역 이동
    $.fn.fullpage.moveTo(1);
  });

  $('.btn-silent').on('click', function () {
    $.fn.fullpage.silentMoveTo(1);
  });

  // btn-up 버튼을 클릭했을 때 한 영역 위로 이동
  $('.btn-up').on('click', function () {
    $.fn.fullpage.moveSectionUp();
  });

  // btn-down 버튼을 클릭했을 때 한 영역 아래로 이동
  $('.btn-down').on('click', function () {
    $.fn.fullpage.moveSectionDown();
  });
});
