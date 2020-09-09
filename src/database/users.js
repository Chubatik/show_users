let usersData = function(users){
    let queryUsers = [];
    let queryNames = [], queryUrl = [];
    for(let i =0; i < users['usersList'].length; i++ ){
        queryNames.push(users['usersList'][i]['login']); 
    };
    for(let i =0; i < users['usersList'].length; i++ ){
        queryUrl.push(users['usersList'][i]['avatar_url']); 
    };
    for(let i = 0; i < queryNames.length; i++){
        queryUsers.push([queryNames[i],queryUrl[i]]);
    }
    return queryUsers;
}
module.exports = usersData;