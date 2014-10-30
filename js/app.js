(function() {
    var TODOTYPE = {};

    TODOTYPE.init = function() {
        TODOTYPE.addTodoType();
    };

    TODOTYPE.addTodoType = function(obj) {
        $('#btnAddTodotype').off('click').on('click', function(e) {
            // call ajax 
            e.preventDefault();
            var _url = "../todotypes/add/";
            var _data = $('#todotype').val();
            if(_data.trim() != "") {
                _url += _data;
                $.ajax({
                    url: _url,
                    type: "POST",
                    beforeSend: function() {
                        $('#status-loading').show();
                    },
                    success: function() {
                        $('#status-loading').hide();
                        $('#todotype').val("");
                    },
                    error: function() {
                        alert("Loi roi");
                    }
                }).done(function() {
                    console.log("Done");
                    alert("Done");
                });
            } else {
                alert("Please enter your todotype");
            }
        });
    };

    TODOTYPE.init();
})();