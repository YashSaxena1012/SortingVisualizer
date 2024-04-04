const Quick = (array) => {
    const animate = []
    quickSort(array, animate, 0, array.length - 1)
    return animate;
}
const quickSort = (array, animate, p, q) => {
    if (p < q) {
        let index = partition(array, animate, p, q);
        quickSort(array, animate, p, index - 1)
        quickSort(array, animate, index + 1, q)
    }
    else return;
}
const partition = (array, animate, p, q) => {
    let pivot = array[p];
    let start = p, end = q;
    while (start < end) {
        while (start<=end && array[start] <= pivot) {
            animate.push([start, q, false]);
            start++;
        }
        while (end>=start && array[end] > pivot) {
            animate.push([end, q, false])
            end--;
        }
        if (start < end) {
            animate.push([start, end, false])
            let temp=array[start]
            array[start]=array[end]
            array[end]=temp
            animate.push([start, end, true])
        }
    }
    animate.push([p, end, true])
    let temp=array[p]
    array[p]=array[end]
    array[end]=temp
    return end
}

export default Quick
