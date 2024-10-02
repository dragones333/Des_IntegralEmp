const { console } = require('inspector');
const os =require('os');
console.log('Sistema operativo:', os.platform());

const platform= os.platform();
console.log(platform);

const nameOs=os.type();
console.log(nameOs);

const uptimeOS = os.uptime();
console.log(uptimeOS);

const totalMemory = os.totalmem();
console.log(totalMemory/1024);

const cpuArchitecture=os.arch()
console.log(cpuArchitecture);

const cpuCoreLogic=os.cpus();
console.log(cpuCoreLogic);

const networkInterface = os.networkInterfaces();
console.log(networkInterface);

const homeDir=os.homedir();
console.log(homeDir);