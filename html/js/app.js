(function() {
    var $j = jQuery.noConflict();

    var APP = {};

    APP.init = function() {
        console.log("init");
        APP.processLocalStorage();
        // console.log(localStorage);
        APP.handleStorageEvent();
        $j('#_key').focus();

        // catch on click of button getlStorage
        $j('#getlStorage').click(function(e) {
            var arrItem = APP.getDataLocalStorage(1);
            console.log(arrItem.name);
            console.log(arrItem.age);
        });

        // catch enter on valua input field
        $j('#_value').keypress(function(e) {
            if(e.keyCode === 13) {
                if($j('#_key').val().trim() != "" && $j('#_value').val().trim() != ""){
                    APP.setDataLocalStorage(
                        $j('#_key').val(), 
                        $j('#_value').val()
                        );
                    $j('#_key').focus();
                } else {
                    alert("Please enter your data");
                }
                
            }
        });

        // catch on click of button enData
        $j('#enData').click(function(e) {
            if($j('#_key').val().trim() != "" && $j('#_value').val().trim() != ""){
                APP.setDataLocalStorage(
                    $j('#_key').val(), 
                    $j('#_value').val()
                    );
                $j('#_key').focus();
            } else {
                alert("Please enter your data");
            }
            
        });

        // catch click of button btnRmItems
        $j('#btnRmItems').click(function(e) {
            var r = confirm("Do you want to remove all item ?");
            if(r == true) {
                localStorage.clear();
                APP.checkLocalStorage();    
            } else {
                alert("No thing happen!");
            }
            
        });

        // catch event on rm_key
        $j('#rm_key')
        .change(function(e) {
            // e.preventDefault();
            if($j(this).val().trim().length > 0) {
                $j('#btnRmItem').removeClass('disabled');
            } else {
                $j('#btnRmItem').addClass('disabled');
            }
        });
        // remove a item if have
        $j('#btnRmItem').click(function(e) {
            var r = confirm("Do u want to remove item with key " + $j('#rm_key').val().trim());
            if(r == true) {
                if(APP.getDataLocalStorage($j('#rm_key').val().trim()) !== null) {
                    APP.removeItem($j('#rm_key').val().trim());
                    APP.checkLocalStorage();
                    alert("Removed item with key " + $j('#rm_key').val().trim())
                    $j('#rm_key').val("");

                } else {
                    alert("No data for deleting");
                }
                
            } else {
                alert("Nothing happend!");
            }
            
        });

        // catch click event on btnGetDataLS
        $j('#btnGetDataLS').click(function(e) {
            console.log(typeof APP.getDataLocalStorage($j('#rm_key').val().trim()));
        });

        // catch get html content
        $j('.btn-gethtml').on('click', function(e) {
            var $btn = $j(this).button('loading'),
                $input_url = $j('#input_url'),
                $val_url = $input_url.val(),
                regURL = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi,
                regex = new RegExp(regURL);
            // get content html 
            if ( $input_url.val() != "" ) {
                // $j('#html-content').load("http://google.com");
                $j('#html-content').text("");
                $j.ajax({
                    url: $val_url,
                    type: 'GET',
                    success: function(res) {
                        console.log(res);
                        for (var key in res) {
                            console.log(res[key]);
                        }
                        // var headline = $(res.responseText).find('a.tsh').text();
                        $j('#input_url').parent().removeClass('has-error');
                        $j('#html-content').text(res.responseText);
                        var $html = $j.parseHTML(res.responseText);
                        console.log($html);
                        // $j.map($html, function(val, i) {
                        //     console.log(typeof(val));
                        // });
                        $btn.button('reset');
                    },
                    error: function(e) {
                        // alert("Loi");
                        // console.log(e);
                        if( e.responseText ) {
                            if( e.statusText == 'OK' ) {
                                var $obj = e.responseText;
                                $obj = $obj.replace('json(', '');
                                $obj = $obj.replace(')', '');
                                $obj = $j.parseJSON($obj);
                                console.log($obj);
                                var $temp;
                                for (var key in $obj) {
                                    $temp = "<p>" + $obj[key].typename + "</p>";
                                    $j('#html-content').append($temp);
                                }
                                $btn.button('reset');    
                            } else {
                                console.error("Error!!!");
                            }
                        }
                    }
                });
            } else {
                $j('#input_url').parent().addClass('has-error');
                $btn.button('reset');
            }
        });

    };

    /**
     * @function checkLocalStorage
     * @return []
     * @
     **/
     APP.checkLocalStorage = function() {
        if(localStorage.length <= 0) {
            $j('#slStorage').text("NO DATA");
        } else {
            $j('#slStorage').text("HAS DATA WITH LENGTH IS " + localStorage.length);
        }
    };

    /**
     * 
     *
     *
     **/
     APP.processLocalStorage = function() {
        if(APP.isSupportLocalStorage()) {
            APP.checkLocalStorage();
        } else {
            alert("No support localStorage");
        }
    };

    /**
     * @function setDataLocalStorage
     * @param : k -> key
     *          v -> value
     * @return 
     **/
     APP.setDataLocalStorage = function(k, v) {
        localStorage.setItem(k, v);
        alert("Add item success!");
        $j('#_key').val("");
        $j('#_value').val("");
        APP.checkLocalStorage();
    };

    APP.getDataLocalStorage = function(k) {
        return localStorage.getItem(k);
    };

    APP.removeItem = function(k) {
        return localStorage.removeItem(k);
    }

    APP.handleStorageEvent = function() {
        if(window.addEventListener) {
            window.addEventListener("storage", fu_handle_storage, false);
        } else {
            window.attachEvent("onstorage", fu_handle_storage);
        }
    }

    function fu_handle_storage(e) {
        if(!e) {e = window.event;}
        else {console.log(e);}
    };

    /**
     *
     * @function isSupportLocalStorage
     * @param []
     * @return boolean
     *
     **/
     APP.isSupportLocalStorage = function() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch(e) {
            return false;
        }
    }

    $j(document).ready(function() {
        APP.init();
    })

})();