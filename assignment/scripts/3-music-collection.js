console.log('***** Music Collection *****')

let collection = [];
console.log('Items I have in my collection are:', collection);

function addToCollection(title, artist, yearPublished) {
    let album = {
        title,
        artist,
        yearPublished,
    }
    if (collection.length < 20) {
        collection.push(album)
    }
    return album;
}

console.log('Muse album added:', addToCollection('Absolution', 'Muse', 2003))
console.log('The Used album added:', addToCollection('In Love and Death', 'The Used', 2004))
console.log('The Used album added:', addToCollection('Lies for the Liars', 'The Used', 2007))
console.log('Muse album added:', addToCollection('The 2nd Law', 'Muse', 2012))
console.log('Jon Bellion album added:', addToCollection('The Human Condition', 'Jon Bellion', 2016))
console.log('Jon Bellion album added:', addToCollection('Glory Sound Prep', 'Jon Bellion', 2018))

function showCollection() {
    //console log # of items in collection
    console.log('Number of albums in collection are:', collection.length)
    // for (let i = 0; i < collection.length; i++) {
    //     console.log(collection.title[i], 'by', collection.artist[i], ', published in', collection.yearPublished[i])
    // }
}

// console.log(showCollection())
console.log(collection[0].artist)


function findByArtist(artist) {
    for (let i = 0; i < collection.length; i++) {
        if (artist === collection[i].artist) {
            console.log('Matching albums for this artist are:', collection[i])
        }
        else {console.log('Artist not found')}
    }
}

findByArtist('Muse')
findByArtist('Atreyu')
findByArtist('Jon Bellion')