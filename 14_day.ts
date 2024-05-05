// Question 40
function My_Album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(My_Album("Artist One", "The First Album"));
console.log(My_Album("Artist Two", "The Second Album",34));
console.log(My_Album("Artist Three", "The Third Album"));


// Question 41
console.log("_________________________________________________");


let magician :String[] = ["Magician 1","Magician 2" , "Magician 3"];

function Magician_List (magician : String[]){
     magician.forEach(magician => {
        console.log(magician);
    });
};

Magician_List(magician);


console.log("_________________________________________________");


// Question 42

let magicians :String[] = ["Magician 1","Magician 2" , "Magician 3"];

function Magicians_List (magicians : String[]){
     magicians.forEach(magicians => {
        console.log("The Great! ",magicians);
    });
};

Magicians_List(magicians);

