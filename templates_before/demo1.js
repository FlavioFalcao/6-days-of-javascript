/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 10/6/12
 * Time: 7:21 PM
 * To change this template use File | Settings | File Templates.
 */


var data = [
    { artist: 'Leonard Cohen', title: 'Everybody Knows', plays: 2 },
    { artist: 'Pixies',        title: 'Bone Machine',    plays: 4 },
    { artist: 'Pixies',        title: 'Lovely Day',      plays: 7 },
    { artist: 'PJ Harvey',     title: 'Big Exit',        plays: 1 },
    { artist: 'Tom Waits',     title: 'Martha',          plays: 9 },
    { artist: 'Tom Waits',     title: 'Closing Time',    plays: 5 }
];

var total_plays = function( data ) {
    var total = 0;

    for ( var i=0; i < data.length; i++ ) {
        total += data[i].plays;
    }

    return total;
}

var t = total_plays( data );
// t is now 28

var songs_for_artist = function(data, artist) {
    var criteria = function(el) {
        return el.artist === artist;
    };

    return data.filter( criteria );
};

console.dir( songs_for_artist(data, 'Tom Waits'));
