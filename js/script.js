//Search a specific site rather than the entire Web.
function search() {

    var site = 'douglas.ca';
    var lookfor = document.getElementById('txtlookfor').value;

    //console.log(lookfor);
    if (lookfor.length > 0) {
        var query =
            'http://www.google.com/search?q=' +
            encodeURIComponent(lookfor) +
            ' site:' +
            site;

        var ddchoice = document.getElementById('dropdown').value;
        if (ddchoice == 1) {
            var query =
                'http://www.bing.com/search?q=' +
                encodeURIComponent(lookfor) +
                ' site:' +
                site;
        } else {
            var query =
                'http://www.google.com/search?q=' +
                encodeURIComponent(lookfor) +
                ' site:' +
                site;
        }
        location.href = query;
    } else {
        //If textbox was empty, show an alert.
        alert('Please type the word or words for which you want to search.');
    }

}
