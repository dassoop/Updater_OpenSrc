const path = require('path')
const { app } = require('electron')

module.exports = 
{
    req: async (req, res) => {
        switch(req.reqType)
        {
            case 'version':
                return await getVersion(req, res);
            default:
                return res.error.push('Invalid request type');
        }
    }
}

function getVersion(req, res)
{
    res.body.version = app.getVersion();
    return res;
}


