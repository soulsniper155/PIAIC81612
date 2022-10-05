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

console.log('\n Found a bigger table yahoo .... !');

guests.unshift("Imran","Nabeel")

for(let i=0;i<guests.length;i++) {
    console.log("Please come to dinner Mr/Mr\'s "+ guests[i]);
}
guests.splice(3,0,"Zeshan")

console.log("\n New elements are here \n")
for(let i=0;i<guests.length;i++) {
    console.log("Please come to dinner Mr/Mr\'s "+ guests[i]);
}

console.log('\n Sorry bad news here can\'t invite more than 2 people .... !\n');

for(let i=0;i<4;i++) {
    console.log("Sorry for taday's dinner Mr/Mr\'s "+ guests.pop());
}

console.log('\n Invited Guests are here .... !\n');

for(let i=0;i<guests.length;i++) {
    console.log("Please come to dinner Mr/Mr\'s "+ guests[i]);
}

console.log('\n Removing Last 2 !\n');

for(let i=0;i<2;i++) {
    console.log("Sorry for taday's dinner Mr/Mr\'s "+ guests.pop());
}

console.log(guests);