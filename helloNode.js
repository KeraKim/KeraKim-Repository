
function run() {
    console.log('Hello Node!!');
    console.log('3초 후 실행');
}

console.log('시작');
setTimeout(run, 3000);
console.log('끝');
