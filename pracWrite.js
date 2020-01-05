import * as cp from 'child_process';
import * as fs from 'fs';
import * as os from 'os';

cp.exec('code --list-extensions', (err, stdout, stderr) => {
    if(err) return;

    let extensionArr = stdout.split('\n');
    console.log(stdout);
    extensionArr = extensionArr.slice(0, extensionArr.length -1);
    console.log(stdout);

    let w = '';
    let i = 0;

    extensionArr.forEach(e => {
        i++;
        cp.exec(`code --uninstall-extension ${e}`, (err, stdout, stderr) => { });
        w += `code --install-extension ${e}` + os.EOL;
    });

    if(i > 0) {
        fs.writeFile('extension-mover.txt', w, 'UTF-8', (err) => {
            if(err) return;
            else console.log('Making extension-mover Text File!');
        });
    } else {
        console.log('There\'s no extension!');
    }
});