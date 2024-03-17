const myObj = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', 'India')
map.set('IN', 'India')
map.set('USA', 'United State of America')

for (const key in map) {
    // console.log(key);
}