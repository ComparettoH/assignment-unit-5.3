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