async function getRandomChinese(length) {
    let chineseString = [];
    const getSign = () => new Promise((res) => {
        return setTimeout(() => {
            const sign = Date.now().toString().slice(-5);
            let charCode = String.fromCharCode(sign);
            res(charCode);
        }, 50);
    });

    do {
        await getSign().then((el) => chineseString.push(el)); 
    } while (chineseString.length < length);

    return new Promise((res) => {
        setTimeout(() => {
            res(console.log(chineseString.join('')));
        }, length * 50);
    });
} 

getRandomChinese(4);