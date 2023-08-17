$(function() {

    //pc버전 wp
  
    $(".wp1").waypoint(function() {
      $(".wp1").addClass('animated fadeIn delay-02s'); //
    }, {
      offset: '75%'
    });
  
    $(".wp2").waypoint(function() {
      $(".wp2").addClass('animated fadeIn delay-05s'); //pc, tablet 메인 이미지 슬릭
    }, {
      offset: '75%'
    });
  
    $(".wp3").waypoint(function() {
      $(".wp3").addClass('animated fadeIn delay-08s'); // pc, tablet 두번째 화면 시작하는 브랜드 문구
    }, {
      offset: '75%'
    });
    
    $(".wp4").waypoint(function() {
        $(".wp4").addClass('animated fadeIn delay-1s'); // pc, tablet 두번째 화면 시작하는 브랜드 문구
      }, {
        offset: '75%'
      }); 
    
  });