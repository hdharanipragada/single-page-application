window.onhashchange = fnHasChange;

/*
 * Called when the hash changes on index.html
 * Uses the global variable modules to
 * find the module HTML to fetch using AJAX
 * from the hash value that changed.
 */

function fnHasChange(oEv) {
    // Home,Exercises etc have '#', we are not making any AJAX call for that
    if (location.hash.length < 2) {
        return;
    }
    fnGetModule(modules[location.hash]);
}

/*
 * Makes the AJAX call to get the HTML source
 * of the module.
 * Set is in the 'moduleid' div so the module is displayed
 */

function fnGetModule(uri) {
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', uri);
    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('moduleid').innerHTML = oEv.currentTarget.responseText;
            }
        }
    };

    oXhr.send();
}

function fnGetMenu(){

    document.getElementById('navmenu').style.display='block';
}