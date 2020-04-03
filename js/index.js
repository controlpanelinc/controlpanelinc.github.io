'use strict';

var KITIDX = {};

KITIDX.scrollToContact = function(){
    $("html, body").animate({
        scrollTop: $(".section-contact").offset().top
    }, 500);
};

KITIDX.disableSubmit = function() {
    $('#form-submit').attr('disabled', true);
};

KITIDX.enableSubmit = function() {
    $('#form-submit').attr('disabled', false);
};

KITIDX.checkSubmit = function() {
    var formfullname = $('#form-fullname').val();
    var formcompany = $('#form-company').val();
    var formtext = $('#form-reason').val();

    if ((formfullname.length <= 0) ||
        (formcompany.length <= 0) ||
        (formtext.length <= 10) || (formtext.indexOf(' ') < 0)) {
        KITIDX.disableSubmit();
    } else {
        KITIDX.enableSubmit();
    }

};

$(document).ready(function(){
    $('#link-partner').click(KITIDX.scrollToContact);
    $('#button-learnmore').click(KITIDX.scrollToContact);
    KITIDX.disableSubmit();

    $('#form-fullname').on('input',function(e){
        KITIDX.checkSubmit();
    });
    $('#form-company').on('input',function(e){
        KITIDX.checkSubmit();
    });

    $('#form-reason').on('input',function(e){
        KITIDX.checkSubmit();
    });
});