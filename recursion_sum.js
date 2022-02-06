function num(i) {
    if (i == 1) {
        return 1;
    }
    return i + num(--i);
}
console.log(num(5));