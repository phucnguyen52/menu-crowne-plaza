$(document).ready(function() {
    for(var i = 0; i <= 19; i++) {
        $('.RS').append('<div class="RS'+i+'" style="margin-top:20px;"> </div>');
    }
	
	$('.RS0').append('<img src="images/RS0.jpg" alt="RS0)" id="RS0" >');
	
	for(var i = 0; i <= 4; i++) {
        $('.RS1').append('<img src="images/RS1 (' + (i+1) + ').jpg" alt="RS1(' + i + ')" ' + (i!=0 ? (i != 4 ? 'class="menu-post"':'') : '') + ' id="RS1_' + i + '" >');
    }
	
	$('.RS2').append('<img src="images/RS2.jpg" alt="RS2)" id="RS2" >');

    for(var i = 0; i <= 10; i++) {
        $('.RS3').append('<img src="images/RS3 (' + (i+1) + ').jpg" alt="RS3(' + i + ')" ' + (i!=0 ? (i != 10 ? 'class="menu-post"':'') : '') + ' id="RS3_' + i + '" >');
    }

    for(var i = 0; i <= 6; i++) {
        $('.RS4').append('<img src="images/RS4 (' + (i+1) + ').jpg" alt="RS4(' + i + ')" ' + (i!=0 ? (i != 6 ? 'class="menu-post"':'') : '') + ' id="RS4_' + i + '" >');
    }

    for(var i = 0; i <= 5; i++) {
        $('.RS5').append('<img src="images/RS5 (' + (i+1) + ').jpg" alt="RS5(' + i + ')" ' + (i!=0 ? (i != 5 ? 'class="menu-post"':'') : '') + ' id="RS5_' + i + '" >');
    }

    for(var i = 0; i <= 7; i++) {
        $('.RS6').append('<img src="images/RS6 (' + (i+1) + ').jpg" alt="RS6(' + i + ')" ' + (i!=0 ? (i != 7 ? 'class="menu-post"':'') : '') + ' id="RS6_' + i + '" >');
    }

    for(var i = 0; i <= 6; i++) {
        $('.RS7').append('<img src="images/RS7 (' + (i+1) + ').jpg" alt="RS7(' + i + ')" ' + (i!=0 ? (i != 6 ? 'class="menu-post"':'') : '') + ' id="RS7_' + i + '" >');
    }

    for(var i = 0; i <= 6; i++) {
        $('.RS8').append('<img src="images/RS8 (' + (i+1) + ').jpg" alt="RS8(' + i + ')" ' + (i!=0 ? (i != 6 ? 'class="menu-post"':'') : '') + ' id="RS8_' + i + '" >');
    }

    for(var i = 0; i <= 5; i++) {
        $('.RS9').append('<img src="images/RS9 (' + (i+1) + ').jpg" alt="RS9(' + i + ')" ' + (i!=0 ? (i != 5 ? 'class="menu-post"':'') : '') + ' id="RS9_' + i + '" >');
    }

    for(var i = 0; i <= 11; i++) {
        $('.RS10').append('<img src="images/RS10 (' + (i+1) + ').jpg" alt="RS10(' + i + ')" ' + (i!=0 ? (i != 11 ? 'class="menu-post"':'') : '') + ' id="RS10_' + i + '" >');
    }

    for(var i = 0; i <= 4; i++) {
        $('.RS11').append('<img src="images/RS11 (' + (i+1) + ').jpg" alt="RS11(' + i + ')" ' + (i!=0 ? (i != 4 ? 'class="menu-post"':'') : '') + ' id="RS11_' + i + '" >');
    }

	for(var i = 0; i <= 5; i++) {
        $('.RS12').append('<img src="images/RS12 (' + (i+1) + ').jpg" alt="RS12(' + i + ')" ' + (i!=0 ? (i != 5 ? 'class="menu-post"':'') : '') + ' id="RS12_' + i + '" >');
    }

    for(var i = 0; i <= 9; i++) {
        $('.RS13').append('<img src="images/RS13 (' + (i+1) + ').jpg" alt="RS13(' + i + ')" ' + (i!=0 ? (i != 9 ? 'class="menu-post"':'') : '') + ' id="RS13_' + i + '" >');
    }

	$('.RS14').append('<img src="images/RS14.jpg" alt="RS14)" id="RS14" >');
	
	for(var i = 0; i <= 11; i++) {
        $('.RS15').append('<img src="images/RS15 (' + (i+1) + ').jpg" alt="RS15(' + i + ')" ' + 'class="menu-post"' + ' id="RS15_' + i + '" >');
    }

    for(var i = 0; i <= 6; i++) {
        $('.RS16').append('<img src="images/RS16 (' + (i+1) + ').jpg" alt="RS16(' + i + ')" ' + (i != 6 ? 'class="menu-post"':'') + ' id="RS16_' + i + '" >');
    }

    $('.RS17').append('<img src="images/RS17.jpg" alt="RS17)" id="RS17" >');
	$('.RS18').append('<img src="images/RS18.jpg" alt="RS18)" id="RS18" >');
	$('.RS19').append('<img src="images/RS19.jpg" alt="RS19)" id="RS19" >');
});
