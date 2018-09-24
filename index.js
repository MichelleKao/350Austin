
window.onload = () => {
    this.init();
}

function init() {
    console.log('im here');
    $("#get-involved-btn").on("click", function(evt) {
        evt.preventDefault();
        const containerTitle = $("#container-title");
        const containerContent = $('#container-content-1');
        const containerWrapper = $('#container-wrapper');
        containerTitle.text('Thank you');

        // select title, update title text
        // select content, update content text

        containerContent.text('You have just taken a huge step in making an environmental difference! We are excited to have you on board so we can keep progressing towards getting Fayette taken down.');
        containerWrapper.addClass('text-center');

        const shareTemplate = $('#container-content-2').add('span');
        $('#sign-up-form').remove();
        shareTemplate.addClass('text-center');
        shareTemplate.text('Check your inbox in a few minutes. We are sending you details about our next strategic meeting!')
        
        const shareAndCalendar = this.composeShareAndCalendar();
        shareTemplate.append(shareAndCalendar);

        // select form, remove form
        // append the last paragraph with icons and back to home anchor ele
        
        //select the picture, update the picture src from original to new one
    })
}

function composeShareAndCalendar() {
    
}

function composeShareOptions() {

}



function addShareEvent() {
    $('#share-icon').on('click', function(evt) {
        evt.preventDefault();

    })
}

