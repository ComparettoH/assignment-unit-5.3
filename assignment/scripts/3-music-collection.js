console.log('***** Music Collection *****')

let collection = [];
console.log('Items I have in my collection are:', collection);

function addToCollection(album){
album = {
    title: 'Absolution',
    artist: 'Muse',
    yearPublished: 2003,
    }
if (collection.length < 20){
        collection.push(album)
     return album;}
    else if(collection.length >= 20){
        return false;
    }
}


console.log('albums in collection are:', collection)