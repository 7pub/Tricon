var isFirstLoggedIn = true;
function displayResult(network, loggedIn) {
    var id = loggedIn ? 'loggedIn' : 'notLoggedIn';
    var favicon = faviconUri(network);
    var url = network.domain + network.redirect;
    var el = '<a target="_blank" href="' + url + '" target="_blank" class=network><img src=' + favicon + '><span>' + network.name + '</span></a>';
    if (loggedIn && isFirstLoggedIn) {
        isFirstLoggedIn = false;
        document.getElementById(id).innerHTML = el;
    } else {
        document.getElementById(id).innerHTML += el;
    }
}
leakSocialMediaAccounts(displayResult);
function faviconUri(network) {
    var favicon = network.domain + '/favicon.ico';
    if (network.name === 'Battle.net') {
        favicon = 'https://d9me64que7cqs.cloudfront.net/images/favicon-cb34a003c6f2f637ee8f4f7b406f3b9b120b918c04cabec7f03a760e708977ea9689a1c638f4396def8dce7b202cd007eae91946cc3c4a578aa8b5694226cfc6.ico';
    }
    if (network.name === 'Carbonmade') {
        favicon = 'https://www.carbonmade.com/wp-content/uploads/2019/04/favico2.png';
    }
    if (network.name === 'Meetup') {
        favicon = 'https://secure.meetupstatic.com/s/img/68780390453345256452178/favicon.ico';
    }
    if (network.name === 'Dropbox') {
        favicon = 'https://www.dropbox.com/static/images/favicon.ico';
    }
    if (network.name === 'Youtube') {
        favicon = 'https://www.youtube.com/favicon.ico';
    }
    if (network.name === 'Gmail') {
        favicon = 'https://mail.google.com/favicon.ico';
    }
    return favicon;
}
