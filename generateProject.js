const fs = require('fs');
var rimraf = require('rimraf');
rimraf.sync('./script-src/deps-out/');

var dir = './script-src/deps-out/';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

var data = fs.readFileSync('./script-src/deps/Class-1.ts').toString();


let numberOfFiles = 1000;

let codeToWriteOnMain = '';

while(numberOfFiles--){
    let className = 'Class' + numberOfFiles;
    let dataToWrite = data.replace('CLASS', className);
  
    let method = `public [METHOD](): void { 
        console.log('from method 1');
    }
    `;

    let property = `\tpublic [PROPERTY];\n`;

    let numberOfMethods = 50;
    let methods = '';



    while(numberOfMethods--){
        methods += method.replace('[METHOD]', 'method'+numberOfMethods);
    }
    dataToWrite = dataToWrite.replace('//[METHODS]', methods);


    let numberOfProperties = 50;
    let properties = '';
    let types = ['number', 'string'];

    while(numberOfProperties--){
        properties += property.replace('[PROPERTY]', 'property'+numberOfProperties+':'+types[Math.floor(Math.random() * types.length)]);
    }
    dataToWrite = dataToWrite.replace('// [PROPERTIES]', properties);

    let numberOfUnions = 50;
    let unions = '';

    while(numberOfUnions--){
        unions += property.replace('[PROPERTY]', 'union'+numberOfUnions+':'+types[Math.floor(Math.random() * types.length)] + ' | ' + types[Math.floor(Math.random() * types.length)]);
    }
    dataToWrite = dataToWrite.replace('// [UNIONS]', unions);

    let pathName = './script-src/deps-out/';
    let fileName = 'Class' + numberOfFiles + '.ts';
    fs.writeFileSync(pathName + fileName, dataToWrite);
    codeToWriteOnMain += 'import { ' + className + ' } from \'deps-out/' + className + '\';';
    codeToWriteOnMain += '\n';
}

fs.writeFileSync('./script-src/main.ts', codeToWriteOnMain);