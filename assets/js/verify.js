window.onload = function() {
    if (window.location.hostname !== 'cineware.xyz') {
        let newUrl = 'https://cineware.xyz' + window.location.pathname + window.location.search;
        window.location.replace(newUrl);
    }
};
