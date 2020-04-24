$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$(document).ready(function(){
    $('.lightbox').click(function(){
        $('.backdrop, .box').css('display', 'block');
        $('.backdrop, .box').animate({'opacity':'.50'}, 300, 'linear');
        $('.box').animate({'opacity':'1.00'}, 300, 'linear');
    });
    $('.close').click(function(){
        close_box();
    });

    $('.backdrop').click(function(){
        close_box();
    });
});

function close_box() {
    $('.backdrop, .box').animate({'opacity':'.50'}, 300, 'linear', function(){
        $('.backdrop, .box').css('display', 'none');
    });
}

$({ Counter: 0 }).animate({
  Counter: $('.cone').text()
}, {
  duration: 10000,
  easing: 'swing',
  step: function() {
    $('.cone').text(Math.ceil(this.Counter));
}
});

$({ Counter: 0 }).animate({
  Counter: $('.ctwo').text()
}, {
  duration: 10000,
  easing: 'swing',
  step: function() {
    $('.ctwo').text(Math.ceil(this.Counter));
}
});

$({ Counter: 0 }).animate({
  Counter: $('.cthree').text()
}, {
  duration: 10000,
  easing: 'swing',
  step: function() {
    $('.cthree').text(Math.ceil(this.Counter));
}
});


function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
}
}

function validateForm1() {
  var x = document.forms["myForm1"]["fname1"].value;
  if (x !== "@") {
    alert("Email must contain @");
    return false;
}
}

function validateForm2() {
  var x = document.forms["myForm2"]["fname2"].value;
  if (x == "") {
    alert("Message must be filled out");
    return false;
}
}
