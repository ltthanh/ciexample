(function() {
    var app = {};
    app.action = {
        edit: 'act-edit',
        call: 'act-call',
        sms : 'act-sms',
        remove : 'act-remove'
    };
    app.init = function() {
        app.initEvent();        
    };

    app.initEvent = function() {
        app.initTab();
        app.setEventOnContact();
        app.setEventActionOnFavourite();
    };

    app.initTab = function() {
        $('#myTab li a').click(function(e) {
            $(this).tab('show');
        });
    };

    app.setEventOnContact = function() {
        $('#list-contact li').click(function(e) {
            alert($(this).text());
        });
        $('#list-contact li > i').click(function(e) {
            e.stopPropagation();
            alert($(this).attr('class'));
            $(this).parent().slideUp('slow');
        });
    };

    app.setEventActionOnFavourite = function() {
        $('[data-action]').click(function(event) {
            var _parent = $(this).parents('.info-cont');
            var _id = _parent.find('#idContact').text();
            var _action = $(this).data('action');
            switch(_action) {
                case(app.action.remove):
                    app.removeFavContact(parseInt(_id));
                    _parent.parent().slideUp('slow');
                    // alert("Remove"); 
                    break;
                case(app.action.edit):
                    alert("Edit");
                    break;
                case(app.action.sms):
                    alert("sms");
                    break;
                case(app.action.call):
                    alert("Call");
                    break;
                default:
                    alert("Nothing");
                    break;
            };
        });
    };

    /**
     * @function : removeFavContact
     * @desc     : remove favourite contact
     *             in database
     * @param    : id of contact
     * @return   : < boolean >
     *
     **/
    app.removeFavContact = function(id) {
        alert("success");
    };

    jQuery(document).ready(function($) {
        app.init();    
    });
})();