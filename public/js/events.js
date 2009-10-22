function showDialog(dialog) {
    var el = $(dialog);
    el.css({
        left: ($(document).width() / 2) - (el.width() / 2),
        top: ($(document).height() / 2) - (el.height() / 2)
    });
    $(dialog + " input").each(function() {
        this.value = "";
    });
    el.show();
    $(dialog + " input")[0].focus();
}

$(document).ready(function(){
    $(".button").hover(
        function () {
            var el = $(this);
            el.removeClass('button');
            el.addClass('over-button');
        },
        function () {
            var el = $(this);
            el.removeClass('over-button');
            el.addClass('button');
        }
        );

    $(".button").mousedown(function(){
        var el = $(this);
        el.removeClass('button');
        el.addClass('pressed-button');
    });

    $(".button").mouseup(function(){
        var el = $(this);
        el.removeClass('pressed-button');
        el.addClass('button');
    });
    $("input.animated_txt").focus(function(){
        if ($(this).val() == $(this).attr("title")){
            $(this).val("");
            $(this).toggleClass("search-default");
        }
    });
    $("input.animated_txt").blur(function(){
        if ($(this).val() == ""){
            $(this).val($(this).attr("title"));
            $(this).toggleClass("search-default");
        }
    });
    $("input#search").blur(function () {
        if(this.value == '') {
            this.value='Search'; this.className='search-default';
        }
    });

    $("input#search").focus(function () {
        if(this.value == 'Search') {
            this.value='';
            this.className='';
        }
    });
    $(".exvo-dialog").draggable({
        containment: 'window',
        cursor: 'move'
    });
    $("input.checkbox").imageTick({ // the selector can be a class as well, target your radios or checkboxes
        tick_image_path: "images/exvo_components/checkbox/check.png",  // the image you want to use as a selected state of the radio/checkbox
        no_tick_image_path: "images/exvo_components/checkbox/no_check.png", // image you want to use as a non selected state
        image_tick_class: "checkbox_img" // the class you want to apply to all images that are dynamically created
    });
});