// var a;
// a = prompt ('Input a value ');

// for (var i=1; i<5; i++) {
//     alert (i);
// }

// var name ='Maksym';
// var surname = 'Marchenko';
// var age = 30;

// var user = {
//     'name':'Maksym',
//     'surname':'Marchenko',
//     'age':30
// }
// alert (user.name)

// var mas = ['Maksym', 'Marchenko', 30];
// alert(mas[1])

// function domagic (a,b) {
//     alert(a+b);
// }
// domagic(10,5); 

var btn = document.getElementById('btn');
btn.onclick=function (e){
    e.preventDefault(); 
    // alert ('Waiting')
    var text = document.querySelector('.intro');
    text.classList.add('red');
    var img = document.querySelector('.planet');
    img.style.display = 'none';
    document.querySelector('.expections').style.marginLeft =  '200px';
}

$(function () {
	$(window).scroll(function() {
	    $('.future').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.skill-free').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
})