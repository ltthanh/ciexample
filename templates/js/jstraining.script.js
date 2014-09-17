/* 
 * jstraining.script.js
 * This file is used for JavascriptTraining.html
 * 
 * @project : Javascript Training
 * @author  : thanh
 * @created : 10/09/2014
 * 
 */

var jstr = {};

var w = $(document).width();
var h = $(document).height();

jstr = function() {
    this.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };
    this.validate = function(formid) {
        $('#' + formid).on('submit', function() {
            // Find all input inside form
            var _b = $('#' + formid).find('input');
            var options = {
                "text": "Please enter your data",
                "email": "Email is not valid",
                "password": "Password not blank and minimum 8 character",
                "passwordretype": "Password doesn't match"
            };
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            var _pwd = '';
            var isSubmit = false;
            var isMailValid = false;
            _b.each(function() {
                if ($(this).attr('type') !== 'reset' && $(this).attr('type') !== 'submit' && $(this).attr('type') !== 'button') {
                    if (!$(this).val()) {
                        $(this).parent().find("span").remove();
                        $(this).parent().find("i").remove();
                        $(this).addClass('error');
                        $(this).parent().append("<i class='fa fa-times-circle error'></i>"); // fa-check-circle 
                        $(this).parent().append("<span class='message error'>" + options.text + "</span>");
                        $(this).parent().find("span").slideDown();
                    } else {
                        // Remove span and i and class error
                        $(this).parent().find("span").remove();
                        $(this).parent().find("i").remove();
                        $(this).removeClass('error');

                        // Check email address
                        if ($(this).attr('type') === 'email') {
                            if (!pattern.test($(this).val())) {
                                $(this).addClass('error');
                                $(this).parent().append("<i class='fa fa-times-circle error'></i>"); // fa-check-circle 
                                $(this).parent().append("<span class='message error'>" + options.email + "</span>");
                                $(this).parent().find("span").slideDown();
                            } else {
                                $(this).parent().append("<i class='fa fa-check-circle success'></i>"); // fa-check-circle 
                                isMailValid = true;
                            }
                        }
                        // Check text field
                        if ($(this).attr('type') === 'text') {
                            $(this).parent().append("<i class='fa fa-check-circle success'></i>"); // fa-check-circle 
                        }
                        // Check password field
                        if ($(this).attr('type') === 'password') {
                            if (_pwd === '') {
                                _pwd = $(this).val();
                            } else {
                                if ($(this).val() !== _pwd) {
                                    $(this).addClass('error');
                                    $(this).parent().append("<i class='fa fa-times-circle error'></i>"); // fa-check-circle 
                                    $(this).parent().append("<span class='message error'>" + options.passwordretype + "</span>");
                                    $(this).parent().find("span").slideDown();
                                } else {
                                    if (isMailValid) {
                                        isSubmit = true;
                                    } else {
                                        isSubmit = false;
                                    }
                                }
                            }
                        }
                    }
                }
            });
            return isSubmit;
        });
    };

    this.modal = function(obj) {
        // obj is object cliked to show modal
        obj.off('click').on('click', function() {
            var _a = $(this).attr('data');
            h = $(document).height() - $('#' + _a).height();
            w = $(document).width() - $('#' + _a).width();
            $('#' + _a).css('top', h / 2 + "px");
            $('#' + _a).css('left', w / 2 + "px");
            $('body').append("<div class='cover-modal'></div>");
            $('.cover-modal').fadeIn();
            $('#' + _a).fadeIn("slow", function() {
                $('.cover-modal').off('mouseup').on('mouseup', function(e) {
                    $('#' + _a).fadeOut();
                    $(this).remove();
                });
            });
        });
    };

    this.closeModal = function() {
        $('.modal .close').off('click').on('click', function() {
            $('body').find('div.cover-modal').fadeOut();
            $('body').find('div.cover-modal').remove();
            $(this).parent().parent().fadeOut("fast", function() {
            });
        });
    };

    this.tab = function(obj) {
        var hTab = obj.find('.header-tab');
        var bTab = obj.find('.body-tab');

        hTab.children().off('click').on('click', function() {
            hTab.children().removeClass('active');
            $(this).addClass('active');
            var _data = $(this).attr('data-tab');
            bTab.children().hide().removeClass('active');
            $(_data).fadeIn().addClass('active');
        });

    };

    this.acordition = function(obj) {
        obj.find('.header-acd').on('click', function() {
            var _parent = $(this).parent();
            obj.find('.content-acd').each(function() {
                if ($(this).hasClass('active')) {
                    $(this).slideUp();
                    $(this).parent().find('.header-acd').removeClass('active');
                }
            });
            _parent.find('.content-acd').slideToggle().addClass('active');
            _parent.find('.header-acd').addClass('active');
        });
    };
};

$(document).ready(function() {
    var objJstr = new jstr();
    // form validation
    objJstr.validate('form-signup');
    // Show popup
    objJstr.modal($('.btn-modal'));
    // close modal
    objJstr.closeModal();
    // tab
    objJstr.tab($('#jstr-tab'));
    // acordition
    objJstr.acordition($('#jstr-acordition'));
});