function countOnline(usersObj) {

    let onlineUsers = 0;

    for (let user in usersObj) {
        if (usersObj[user].online) {
            onlineUsers += 1;
        }
    }

    return onlineUsers;

}