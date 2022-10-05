let magicians = ["Gin","YoYo","Charlis"]

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
make_greate(magicians)