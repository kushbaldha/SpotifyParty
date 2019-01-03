
function getHashParams() {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  while ( e = r.exec(q)) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

var params = getHashParams();
console.log(document);
console.log(document.getElementById('results-template'));
var access_token = params.access_token,
    refresh_token = params.refresh_token,
    error = params.error;
    resultsPlaceholder = document.getElementById('results'),
    templateSource = document.getElementById('results-template').innerHTML,
    template = Handlebars.compile(templateSource),

    console.log('Client-side code running');

    document.getElementById('search-form').addEventListener('submit', function (e) {
        e.preventDefault();
        searchAlbums(document.getElementById('query').value);
    }, false);

var searchAlbums = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
        data: {
            q: query,
            type: 'album'
        },
        success: function (response) {
            resultsPlaceholder.innerHTML = template(response);
            console.log(response);
        }
    });
};



console.log(access_token);
