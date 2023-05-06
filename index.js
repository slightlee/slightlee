// index.js
const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';
/**
 * DATA is the object that contains all
 * the data to be provided to Mustache
 * Notice the "name" and "date" property.
 * https://blog.csdn.net/tonyzhangcn/article/details/7285160
 */
let DATA = {
    name: '明天',
    occupation: '一位代码爱好者',
    date: new Date().toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        // hour: '2-digit',
        // minute: '2-digit',
        // second: '2-digit',
        // hour12: false
    }).replace(/\//g, '-'),
};
/**
 * A - We open 'main.mustache'
 * B - We ask Mustache to render our file with the data
 * C - We create a README.md file with the generated output
 */
function generateReadMe() {
    fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
        if (err) throw err;
        const output = Mustache.render(data.toString(), DATA);
        fs.writeFileSync('README.md', output);
    });
}
generateReadMe();

/**
 * 注意:
 * 根目录执行 node index.js 自动生成README.md
 */
