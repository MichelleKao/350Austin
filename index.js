
window.onload = () => {
    this.init();
}

function init() {
    console.log('im here');
    $("#get-involved-btn").on("click", function(evt) {
        evt.preventDefault();
        $("#container-title")
            .text('Thank you')
            .addClass('text-center');

        // select title, update title text
        // select content, update content text
        
        $('#container-content-1')
            .addClass('text-center');
        $('#container-content-1 span')
            .text('You have just taken a huge step in making an environmental difference! We are excited to have you on board so we can keep progressing towards getting Fayette taken down.')
       
        // select form, remove form
        // append the last paragraph with icons and back to home anchor ele
        $('#sign-up-form').remove();
        $('#container-content-2')
            .addClass('text-center')
            .append('<span></span>');
        $('#container-content-2 span')
            .text('Check your inbox in a few minutes. We are sending you details about our next strategic meeting!')
        
        const shareAndCalendarTemplate = window.composeShareAndCalendar();
        shareAndCalendarTemplate
            .addClass('col-12 my-3 text-center justify-content-center')
            

        $('#container-wrapper')
            .append(shareAndCalendarTemplate)
            .append('<div class="text-center"><a style="font-size: 0.8rem; text-decoration: underline;">Back To Home</a></div>');
        
        window.addShareEvent();
            
      
        //select the picture, update the picture src from original to new one
        $('#bottom-img')
            .attr('src', 'images/350Austin-divest.jpg')
    })
}

function composeShareAndCalendar() {
    $shareAndCalendar = $('<div></div>');
    const btns = ['share', 'add-to-calendar'];
    btns.forEach(txt => {
        const cleanTxt = txt.split(' ').join('') 
        $shareAndCalendar
            .append(`<button><img src="images/${txt}.png" style="width: 30px;"></button>`)
            .find('button:not(.share-btns)')
            // .html(txt)
            .attr('id', cleanTxt)
            .addClass('btn mx-1 share-btns');
    });
    return $shareAndCalendar;
}

function composeShareOptions() {
    const options = ['instagram', 'facebook', 'twitter', 'google'];
    $shareOptions = $('<span></span>')
        .attr('id', 'share-opts')

    options.forEach(txt => {
      
        $shareOptions
            .append(`<img src="images/${txt}.png">`)
            .find('img:not(.share-opt)')
            // .html(txt)
            .attr('id', txt)
            .css('width', '30px')
            .addClass('mx-1 share-opt');
    })
    return $shareOptions;
}



function addShareEvent() {
    let clicked = false;
    $('#share').on('click', function(evt) {
        evt.preventDefault();
        if (clicked) {
            $('#share-opts').remove();
            $("#AddToCalendar").html('Add To Calendar');
            clicked = false;
        } else {
            $(this).after(window.composeShareOptions());
            $("#AddToCalendar").html('Cal');
            clicked = true;
        }
    })   
}
