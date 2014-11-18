(function() {
    console.log("Chao");
    $('#myTab li a').click(function(event) {
        $(this).tab('show');
    });

    $('#list-contact li').click(function(event) {
        alert($(this).text());
    });
})();