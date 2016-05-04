var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return `mongodb://${configValues.uname}:${configValues.pwd}@ds013212.mlab.com:13212/nodetodo`;
    }
    
}