// for (let i = 0; i < 6; i++) {
//     console.log(i);
// }

function countNumber(number) {
    if (number > 5) {
        return;
    }
    console.log(number);
    countNumber(number + 1);
}
countNumber(1);