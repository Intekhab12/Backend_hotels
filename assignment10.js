var os = require('os');

console.log('Total memory available : ' ,os.totalmem() + 'bytes');
console.log('Free memory available : ' , os.freemem() + 'bytes');
console.log('Operating System Platform : ' , os.platform() + 'bytes'); 
console.log('Number of CPU pores : ' , os.cpus().length + 'bytes'); 