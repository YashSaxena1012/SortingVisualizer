import React from "react";

const mergeSort = (arr, animate, l, r) => {
    if (l >= r) {
        return;
    }
    var m = l + parseInt((r - l) / 2);
    mergeSort(arr, animate, l, m);
    mergeSort(arr, animate, m + 1, r);
    merge(arr, animate, l, m, r);
};

const Merge2 = (array) => {
    const animate = [];
    mergeSort(array, animate, 0, array.length - 1);
    return animate;
};

const merge = (array, animate, start, mid, end) => {
    var n1 = mid - start + 1;
    var n2 = end - mid;

    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = array[start + i];
    for (var j = 0; j < n2; j++)
        R[j] = array[mid + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = start;

    while (i < n1 && j < n2) {
        animate.push([i, j, false]);
        if (L[i] <= R[j]) {
            animate.push([k, L[i], true]);
            array[k] = L[i];
            i++;
        }
        else {
            animate.push([k, R[j], true]);
            array[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        animate.push([i, k, false]);
        animate.push([k, L[i], true]);
        array[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        animate.push([j, k, false]);
        animate.push([k, R[j], true]);
        array[k] = R[j];
        j++;
        k++;
    }
};

export default Merge2;
