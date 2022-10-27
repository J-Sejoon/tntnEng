// var slide = new Slide('#carouselExampleIndicators', {
//     slidesPerView: 3, // 보여지는 슬라이드 수
//     spaceBetween: 50, // 슬라이드 간의 거리(px 단위)
//     loop: true, // 슬라이드 무한 반복
// });
// var slide = new Slide('#carouselExampleIndicators2', {
//     slidesPerView: 3, // 보여지는 슬라이드 수
//     spaceBetween: 50, // 슬라이드 간의 거리(px 단위)
//     loop: true, // 슬라이드 무한 반복
// });

// 스와이프
// $(document).ready(function() {  
//     $("#carouselExampleIndicators").swiperight(function() {  
//         $(this).carousel('next');  
//         });  
//     $("#carouselExampleIndicators").swipeleft(function() {  
//         $(this).carousel('prev');  
// });  
// });  




//자동 슬라이드
$(function(){
    $("#carouselExampleIndicators").carousel({
        interval:1000,
        wrap: true
    })
});

$(function(){
    $("#carouselExampleIndicators_2").carousel({
        interval:1000,
        wrap: true
    })
});