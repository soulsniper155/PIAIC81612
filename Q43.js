let magicians = ["Gin","YoYo","Charlis"]
let Copymagicians = magicians.slice()

function showMagician(arra){
    for(i=0;i<arra.length;i++){
        console.log(arra[i])
    }
}
function make_greate(magician){
    magician.pop()
    for(i=0;i<magician.length;i++){
        console.log(magician +" the Great!")
    }
}

showMagician(magicians)
console.log("Great magician")
make_greate(Copymagicians)
console.log("Old Magician ............ !")
showMagician(magicians)


