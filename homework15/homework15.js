function* createIdGenerator() {
    for (let i = 1; ; i++) {
        yield i
    };
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log('...');



function* newFontGenerator(el) {
    for (let i=1; ; i++) {
        let fontSize = yield el;
        if (fontSize === 'up') {
            el += 2
        } else if (fontSize === 'down') {
            el -= 2
        }
    }
}

let ip = newFontGenerator(14);

console.log(ip.next().value + 'px');
console.log(ip.next('up').value + 'px');
console.log(ip.next('up').value + 'px');
console.log(ip.next().value + 'px');
console.log(ip.next('down').value + 'px');
console.log(ip.next('down').value + 'px');
console.log(ip.next('down').value + 'px');
console.log(ip.next().value + 'px');


