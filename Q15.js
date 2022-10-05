let guests = ["Ali","Umer","Saim"]

for(let i=0;i<guests.length;i++) {
    console.log("Please come to dinner Mr/Mr\'s "+ guests[i]);
}

name = guests[1]
console.log("\nSorry, " + name + " can't make it to dinner.")

delete guests[1]
guests[1] = 'Zai Khan'

for(let i=0;i<guests.length;i++) {
    console.log("Please come to dinner Mr/Mr\'s "+ guests[i]);
}