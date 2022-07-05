console.log('***** Music Collection *****')

let collection = []


/**
 * @param {string, string, number} title, artist, yearPublished
 * @return new object with the above properties, added to the end of the collection array
 */

function addToCollection(title, artist, yearPublished){
    console.log('in addToCollection');
    const newObject = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    console.log('new album added:', newObject);
    collection.push(newObject);
    console.log('updated collection:', collection)
    return newObject;
}

addToCollection('Ctrl', 'Sza', 2017);
addToCollection('Z', 'Sza', 2014);
addToCollection('Punisher', 'Phoebe Bridgers', 2020);
addToCollection('Farm to Table', 'Bartees Strange', 2022);
addToCollection('Lush', 'Snail Mail', 2018);
addToCollection('Impossible Weight', 'Deep Sea Diver', 2020);

console.log(collection);


/**
 * @param {array} collectionInput
 */

function showCollection(collectionInput){
    console.log(collectionInput.length)
    for(let i=0; i<collectionInput.length; i++){
        console.log('in for loop')
        console.log(collectionInput[i].title, 'by', collectionInput[i].artist, ', published in', collectionInput[i].yearPublished);
    }
}

// test showCollection function

showCollection(collection);


/**
 * @param {string} artist
 * @return array with matching results. if no results found, return an empty array
 */


function findByArtist(artist){
    let artistAlbums = [];
    for(let i=0; i<collection.length; i++){
        console.log('in findByArtist loop');
        if(collection[i].artist === artist){
            console.log('match!')
            artistAlbums.push(collection[i])
        }
    }
    console.log('artist album list:', artistAlbums);
    return artistAlbums;
}

findByArtist('Sza');
findByArtist('Deep Sea Diver');
findByArtist('Japanese Breakfast');