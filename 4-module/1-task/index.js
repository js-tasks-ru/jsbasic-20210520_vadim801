function makeFriendsList(friends) {
    let list = document.createElement('ul');

    for (const i of friends){
        //let li = document.createElement('li')
       list.innerHTML += `<li>${i.firstName} ${i.lastName}</li>`
    }
    return list;
}
