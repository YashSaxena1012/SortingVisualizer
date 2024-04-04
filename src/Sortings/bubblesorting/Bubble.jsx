const Bubble = (array) => {
    const animate = [];
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < (array.length - i - 1); j++) {
            animate.push([j, j + 1, false]);
            if (array[j] > array[j + 1]) {
                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                animate.push([j, j + 1, true]);
            }
        }
    }
    return animate;
}

export default Bubble