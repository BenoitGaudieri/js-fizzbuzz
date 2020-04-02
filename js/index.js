var result = "";

for (i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        result += "<span class='gradient--red'>FizzBuzz</span>";
    } else if (i % 5 == 0) {
        result += "<span class='gradient--blue'>Buzz</span>";
    } else if (i % 3 == 0) {
        result += "<span class='gradient--green'>Fizz</span>";
    } else {
        result += i;
    }
    if (i != 100) {
        result += "<span class='gradient--blk'>, </span>";
    } else {
        result += "<span class='gradient--red'>.</span>";
    }
}

console.log(result);
document.getElementById(
    "output"
).innerHTML = `<p class='animated swing too-much'>${result}</p>`;
