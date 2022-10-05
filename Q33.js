let array = [1,2,3,4,5,6,7,8,9]
for(i=0;i<array.length;i++){
    if(array[i] == 1){
        console.log('1st')
    }else if(array[i] == 2){
        console.log('2nd')
    }else if(array[i] == 3){
        console.log('3rd')
    }else{
        console.log(array[i] + 'th')
    }
}