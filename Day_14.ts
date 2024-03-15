// Question_1:Album
function make_Album(artist: string, title: string, tracks?:string) {
    const album = { artist, title,tracks};
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

const album1 = make_Album('Taylor Swift', 'love story',"third track");
const album2 = make_Album('Jennie', 'You And Me','track second');
console.log(album1);
console.log(album2);

// Question_2:Magicians

function show_Magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}
const magician_Names: string[] = ['David', 'Harry', 'Penn', 'Teller','Dynamo'];
show_Magicians(magician_Names);

// Question_3:Great_Magicians

function GreatMagicians(Great_Magicians: string[]): void {
    Great_Magicians.forEach(Great_Magicians => console.log(`The Great ${Great_Magicians}`));
}
const Great_Magicians: string[] = ['David', 'Harry', 'Penn', 'Teller','Dynamo'];
GreatMagicians(Great_Magicians);

//Day_14 Complete