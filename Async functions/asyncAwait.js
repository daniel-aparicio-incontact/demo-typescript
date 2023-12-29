function delay(milliseconds, count) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(count);
        }, milliseconds);
    });
}
async function dramaticWelcome() {
    console.log("Hello");
    for (let i = 0; i < 5; i++) {
        const count = await delay(500, i);
        console.log(count);
    }
    console.log("World!");
}
dramaticWelcome();
