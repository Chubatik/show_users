
let userData = function(user){
    let queryUser = [];
    let userDesc = [], userLang = [], userHasIssues = [], userHtmlUrl = [];
    for(let i = 0; i < user['repoList'].length; i++){
        userDesc.push(user['repoList'][i]['description']);
    }
    for(let i = 0; i < user['repoList'].length; i++){
        userLang.push(user['repoList'][i]['language']);
    }
    for(let i = 0; i < user['repoList'].length; i++){
        userHasIssues.push(user['repoList'][i]['has_issues']);
    }
    for(let i = 0; i < user['repoList'].length; i++){
        userHtmlUrl.push(user['repoList'][i]['html_url']);
    }
    for(let i = 0; i < userDesc.length; i++){
        queryUser.push([userDesc[i],userLang[i],userHasIssues[i], userHtmlUrl[i]]);
    }
    return queryUser;
}
module.exports = userData;