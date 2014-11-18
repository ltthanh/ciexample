(function() {
    // alert("Chao");

    // Flick
    // var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    // $('#loading').text("Loading images .........");
    // $.getJSON( flickerAPI, {
    //     tags: "android",
    //     tagmode: "any",
    //     format: "json"
    // }, function() {
    //     console.log("success");
    // })
    // .done(function( data ) {
    //     console.log(data);
    //     $.each( data.items, function( i, item ) {
    //         $( "<img>" ).addClass('col-lg-1').attr( "src", item.media.m ).appendTo( "#images" );
    //         if ( i === 5000 ) {
    //             return false;
    //         }
    //     });

    //     $('#loading').text("DONE");
    // })
    // .fail(function() {
    //     console.log("error");
    // })
    // ;

    // var urlJson = "http://local.symfony/organisations/49/users.json";
    // $.getJSON(urlJson, {}, function() {

    // })
    // .done(function(data) {
    //     console.log(data);
    // })
    // .fail(function() {
    //     console.log("Fail");
    // });

    // $('#formSer').submit();
    var tmp = $('#formSer').serialize();
    var urlJson = "http://local.symrest/api/user/users.jsonp?callback=call";
    $.ajax({
        url: urlJson,
        type: 'GET',
        dataType: 'jsonp',
        crossDomain : true,
        jsonp: false,
        jsonpCallback : 'call',
        contentType : "application/json",
        data: {},
        success: function(data) {
            console.log(data);
        }
    })
    .done(function() {
        console.log("success");
        $('#loading').text("DONE");
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("error");
        console.log(jqXHR);
        console.log(textStatus);
    })
    .always(function() {
        console.log("complete");
    });
    
    $('#formSer').on('submit', function(e) {
        alert("asdasd");

        console.log($(this).serialize());
        return false;
    });

    // $.ajax({
    //     url: "http://api.stackexchange.com/2.2/tags?site=stackoverflow",
    //     dataType: 'jsonp',
    //     contentType : "application/json",
    //     type: 'GET',
    //     jsonp: 'jsonp',
    //     success: function(data) {
    //         console.log(data);
    //         $.each(data['items'], function(index, item) {
    //              var $tag = item.name;
    //              var $count = item.count;

    //              console.log("Tag : " + $tag + " ---- " + $count);
    //         });
    //     },
    //     error: function() {
    //         alert("Sorry! I can't get the feeds");
    //     }
    // });



})();