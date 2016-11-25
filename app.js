$(document).ready(function () {
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
		$(this).toggleClass('open');
        $('.logoList').toggleClass('off');
    });
	$(window).on('resize', function (){
		var width = $(window).outerWidth();
        console.log(width);
	})
    $('.scrollSpace1').mousedown(function () {
        var ammond =$('.ammond');
        
       
        var wid = $(this).width();
		var target = $('.ScrollPointer1').width();
		
       
            var position = event.clientX - $(this).offset().left-target/2;
            var scrolPointer = $('.ScrollPointer1').css('position', 'relative');
        
            var ten = wid-target/2;
            
            var first = ten*0.1;
            var second = ten*0.2;
            var third = ten*0.3;
            var four = ten*0.4;
            var five = ten*0.5;
            var six = ten*0.6;
            var seven = ten*0.7;
            var eight = ten*0.8;
            var nine = ten*0.9;    
            
            if (position>wid-target) {
                position=wid-target;
                
            }
            if (position < 0) {
                position = 0;
                 
            }
            if (position<=first) {
               ammond.text('100') 
            }
            if (position>first && position<=second) {
                ammond.text('200') 
            }
            if (position>second && position<=third) {
                ammond.text('300') 
            }
            if (position>third && position<=four) {
                ammond.text('400') 
            }
            if (position>four && position<=five) {
                ammond.text('500') 
            }
            if (position>five && position<=six) {
                ammond.text('600') 
            }
            if (position>six && position<=seven) {
                ammond.text('700') 
            }
            if (position>seven && position<=eight) {
                ammond.text('800') 
            }
            if (position>eight && position<=nine) {
                ammond.text('900') 
            }
            if (position>nine) {
                ammond.text('10 000') 
            }
            position + 'px';
            
            scrolPointer.css('left', position);
            
        
        
});
    $('.scrollSpace2').mousedown(function () {
           var wid = $(this).width();
		   var target = $('.ScrollPointer2').width();
           var position = event.clientX- $(this).offset().left-target/2,
                scrolPointer = $('.ScrollPointer2').css('position', 'relative');
            if (position>wid-target) {
                position=wid-target;
                
            }
            else if (position < 0) {
                position= 0;
            }
            var time = $('.time');
            var ten = wid-target/2;
            
            var first = ten*0.1;
            var second = ten*0.2;
            var third = ten*0.3;
            var four = ten*0.4;
            var five = ten*0.5;
            var six = ten*0.6;
            var seven = ten*0.7;
            var eight = ten*0.8;
            var nine = ten*0.9;
            
            if (position<=first) {
               time.text('10 dni') 
            }
            if (position>first && position<=second) {
                time.text('20 dni') 
            }
            if (position>second && position<=third) {
                time.text('30 dni') 
            }
            if (position>third && position<=four) {
                time.text('40 dni') 
            }
            if (position>four && position<=five) {
                time.text('3 mieśiące') 
            }
            if (position>five && position<=six) {
                time.text('6 miesięcy') 
            }
            if (position>six && position<=seven) {
                time.text('9 miesięcy') 
            }
            if (position>seven && position<=eight) {
                time.text('1 rok') 
            }
            if (position>eight && position<=nine) {
                time.text('18 miesięcy') 
            }
            if (position>nine) {
                time.text('2 lata') 
            }
            position + 'px';
            scrolPointer.css('left', position);
 });
     $("body > header > div.bottomLogo > div.logoList > div:nth-child(1)").click(function (){
         $('html, body').animate({
             scrollTop: $("body > nav").offset().top
          }, 1500);
     });
	 $("body > header > div.bottomLogo > div.logoList > div:nth-child(2)").click(function (){
         $('html, body').animate({
             scrollTop: $("body > div").offset().top
          }, 1500);
     });
    $("body > header > div.bottomLogo > div.logoList > div:nth-child(3)").click(function (){
         $('html, body').animate({
             scrollTop: $("body > footer").offset().top
          }, 1500);
     });
       
});
