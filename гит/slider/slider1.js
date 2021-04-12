(function ($) {
    $('.buttons').css("display", "flex");
    let ulContainer = $('div.view')
        .css('overflow', 'hidden')
        .children('ul');
    let imgs = $('img');
    let imgW = 400;
    let current = 1;

    $('.buttons').children("button").on('click', function () {
        let direction = $(this).data('dir');
        let position = imgW;
        (direction == 'next') ? current++ : current--; 
        

        //сокращенная форма if выше
        /*if (direction == 'next') {
            current++;
        } else {
             current--;
            }
        */
        if (current == 0) {
            current = imgs.length;
            direction = 'next';
            position = imgW * (imgs.length - 1);
        } else if (current - 1 == imgs.length) {
            current = 1;
            position = 0;
        }
        moveSlide(ulContainer, position, direction);
        //console.log(curren);

    });
    function moveSlide(ulContainer, position, direction) {
        
        let sign;
        if (direction && position != 0) { 
            sign = (direction == "next") ? '-=' : '+=';
        }
        let duration = {};
        if (position == 0 || position == imgW*(imgs.length - 1)) {
            duration = { duration: 0 };
        }
        ulContainer.animate({ 'margin-left': sign ? sign + position : position }, duration);
        console.log(direction,sign,position);
    }

})(jQuery);