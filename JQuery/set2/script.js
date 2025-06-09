/* jQuery Effect */

/* Fade Effect */

/*

fadeIn()
fadeOut()
fadeToggle()
fadeTo()


*/

/*  fadeIn() */

// $(function(){
//     $('#fadeIn').click(function(){
//         $('.box-1').fadeIn(1000 , function(){
//             $('.box-2').fadeIn(2000 , function(){
//                 $('.box-3').fadeIn(3000 , function(){
//                     $('.box-4').fadeIn(4000 , function(){
//                         $('.box-5').fadeIn(5000 , function(){
//                             $('.box-6').fadeIn(6000)
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

/* fadeOut */

// $(function(){
//     $('#fadeOut').on('click' , function(){
//         $('.box-1').fadeOut(1000)
//         $('.box-2').fadeOut(2000)
//         $('.box-3').fadeOut(3000)
//         $('.box-4').fadeOut(4000)
//         $('.box-5').fadeOut(5000)
//         $('.box-6').fadeOut(6000)
//     })
// })

/* fadeToggle */

// $(function(){
//     $('#fadeToggle').on('click' , function(){
//         $('.box-1').fadeToggle(1000)
//         $('.box-2').fadeToggle(2000)
//         $('.box-3').fadeToggle(3000)
//         $('.box-4').fadeToggle(4000)
//         $('.box-5').fadeToggle(5000)
//         $('.box-6').fadeToggle(6000)
//     })
// })

/* fadeTo */

// $(function(){
//     $('#fadeTo').on('click' , function(){
//         $('.box-1').fadeTo(1000 , 0.1)
//         $('.box-2').fadeTo(2000 , 0.2)
//         $('.box-3').fadeTo(3000 , 0.3)
//         $('.box-4').fadeTo(4000 , 0.4)
//         $('.box-5').fadeTo(5000 , 0.5)
//         $('.box-6').fadeTo(6000  , 0.6)
//     })
// })

/* slide Effect */

/*

slideUp
slideDown
slideToggle

*/

/* slideDown */

// $(function(){
//     $('.slide-btn').keydown(function(){
//         $('.slide-content').slideDown(300)
//     })
// })

// $(function(){
//     $('.slide-btn').click(function(){
//         $('.slide-content').slideUp(3000)
//     })
// })

// $(function(){
//     $('.slide-btn').click(function(){
//         $('.slide-content').slideToggle(3000)
//     })
// })

// $(function(){
//     $('.slide-stop').click(function(){
//         $('.slide-content').stop()
//     })
// })

/* jQuery animate */

// $(function(){
//     $('.animate').click(function(){
//         $(this).animate({
//             left:'900px',
//             height:'400px',
//             width:'400px',
//             fontSize:'50px'
//         } , 3000)
//     })
// })

/* jquery get html() , text() , val() */

// $("#html").click(() => {
//   alert($("#heading").html());
// });
// $("#text").click(() => {
//   alert($("#heading").text());
// });
// $("#value").click(() => {
//   alert($("#input").val());
// });

/* jquery set html() , text() , val() */

$("#html").click(() => {
  alert($("#heading").html("<span>This is Heading Tag</span>"));
}); 
$("#text").click(() => {
  alert($("#heading").text("<span>This is Heading Tag</span>"));
});
$("#value").click(() => {
  alert($("#input").val("<span>This is Heading Tag</span>"));
});
