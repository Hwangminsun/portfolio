$(function() {
    
  // portfolio 로고 fade
   $(window).scroll(function() {

    if ($(window).scrollTop() >= 300) {

      $('#title_wrapper .first_t').addClass("block_no");
      $('#title_wrapper .second_t').removeClass("block_no");
        
    } else {
      
      $('#title_wrapper .first_t').removeClass("block_no");
      $('#title_wrapper .second_t').addClass("block_no");

    }
  }); // portfolio 로고 fade 끝

  // 해당 위치로 scroll 이동
  $(".nav li a").click(function(e) {

    $.scrollTo(this.hash || 0, 1500);
    e.preventDefault();

  });

    // 스크롤 안되도록

  // $("#modal").on("mousewheel",function(){
  //   return false;
  // }); 

// small li a 스크롤
// #project
$('.ban li').click(function(e){
  e.preventDefault();

  const button_num = $(this).index();
  console.log(button_num);

  // $('.ban li a').removeClass('a_back');
  // $(this).children('a').addClass('a_back');

  // 요소의 스크롤 높이 절대값
  // tapered
  const div = document.getElementById("ban_tapered");
  const divTop = div.getBoundingClientRect().top;
  const absoluteTop = window.pageYOffset + divTop;

  console.log(absoluteTop);
  
  // cocodor
  const div1 = document.getElementById("mo_cocodor");
  const divTop1 = div1.getBoundingClientRect().top;
  const absoluteTop1 = window.pageYOffset + divTop1;
  
  console.log(absoluteTop1);
  
  // Team
  const div2 = document.getElementById("team_arts");
  const divTop2 = div2.getBoundingClientRect().top;
  const absoluteTop2 = window.pageYOffset + divTop2;

    // react page
  const div3 = document.getElementById("pc_react");
  const divTop3 = div3.getBoundingClientRect().top;
  const absoluteTop3 = window.pageYOffset + divTop3;

  // JSON movie page
  const div4 = document.getElementById("pc_movie");
  const divTop4 = div4.getBoundingClientRect().top;
  const absoluteTop4 = window.pageYOffset + divTop4;

    // To do list
  const div5 = document.getElementById("to_do");
  const divTop5 = div5.getBoundingClientRect().top;
  const absoluteTop5 = window.pageYOffset + divTop5;

  // zero waste app
  const div6 = document.getElementById("zero_waste");
  const divTop6 = div6.getBoundingClientRect().top;
  const absoluteTop6 = window.pageYOffset + divTop6;

  if (button_num == 0) {
    $('body, html').animate({ scrollTop: absoluteTop1 - 75+"px" }, 1000);
    /* header 의 높이 : 75px */
  } else if (button_num == 1) {
    $('body, html').animate({ scrollTop: absoluteTop - 75+"px"}, 1000);
    
  } else if (button_num == 2) {
    $('body, html').animate({ scrollTop: absoluteTop2 - 75+"px"}, 1100);
  } else if (button_num == 3) {
    $('body, html').animate({ scrollTop: absoluteTop3 - 75+"px"}, 1100);
  } else if (button_num == 4) {
    $('body, html').animate({ scrollTop: absoluteTop6 - 75+"px"}, 1200);
  } else if (button_num == 5) {
    $('body, html').animate({ scrollTop: absoluteTop5 - 75+"px"}, 1200);
  }
});

// waypoint ani

  

    $(".wp1").waypoint(function() {
      $(".wp1").addClass('animated fadeInUp'); // code_exercise 카테고리 제목, small list 단추
    }, {
      offset: '75%'
    });

    $(".wp2").waypoint(function() {
      $(".wp2").addClass('animated fadeInLeft'); // code_exercise 카테고리 제목, small list 단추
    }, {
      offset: '75%'
    });
  
      $(".wp3").waypoint(function() {
        $(".wp3").addClass('animated fadeInOut'); // 
      }, {
        offset: '75%'
      });
   


    // 예술의전당 후기 토글
    $('.hoogi').click(function(){

      const li_a = $('.project_list > li > ul.content_3 li:nth-child(5)');
      const li_b = $('.project_list > li > ul.content_3 li:nth-child(6)');
      // const li_c = $('.project_list > li > ul.content_3 li:nth-child(7)');
      // const li_d = $('.project_list > li > ul.content_3 li:last-child');

        li_a.slideToggle("100", function() {
    
        });
    
        li_b.slideToggle("100", function() {
    
        });    
    });

    // Animate the scroll to top
  $('aside').click(function() {
        
    $('html, body').animate({scrollTop: 0}, 1000);
    
  });

  $('aside').hide();


  // ===== Scroll to Top visible ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 4000) {        // If page is scrolled more than 50px
        $('aside').fadeIn();    // Fade in the arrow
    } else {
        $('aside').fadeOut();   // Else fade out the arrow
    }
});

// $('.left_box .m_addr').on('mouseenter',function(){

// });

ab();
function ab(){
  $(".slide:nth-child(1)~").hide();
    setInterval(function(){fadeInOut()},3000);
}

let n=0;
function fadeInOut(){

  if(n>2){
    n=0;
  }else{
    $(".slide").eq(n).fadeIn(3000);
    $(".slide").eq(n-1).fadeOut(3000); //마지막 값 찾아줌
    n++;
  }
  }

});