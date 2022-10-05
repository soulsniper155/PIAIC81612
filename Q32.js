let current_users = ['Ali','usman','zia','raza','umer']
let new_users = ['saim','Ali','usman','moien','hussain']


for(i=0;i<new_users.length;i++){
    for(j=0;j<current_users.length;j++){
        if(new_users[i].toLowerCase() == current_users[j].toLowerCase()){
            console.log("You have to enter new userName.")
            break
         }else{
             console.log("UserName is available.")
             
         }
    }
}
