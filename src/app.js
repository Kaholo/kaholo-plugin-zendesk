var zendesk = require('node-zendesk');


function createUser(action,settings){
    return new Promise((resolve,reject) => {
        var zd_client = zendesk.createClient({
            username:  action.params.USERNAME,
            token: settings.TOKEN || action.params.TOKEN,
            remoteUri: `https://${action.params.COMPAGNY}.zendesk.com/api/v2`,
            oauth:false
          });
          
        var users = {
            user: {
                name: action.params.NAME,
                email: action.params.EMAIL,
            }
        };
        
        zd_client.users.create(users, function (err, req, result) {
            if (err) {
                return reject(err);
            }
            return resolve(result)
        });
    })
}


module.exports = {
    createUser:createUser
}