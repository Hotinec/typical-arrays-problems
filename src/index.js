exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    }

    let result = array[0];
    array.forEach((element) => {
        if (element < result) {
            result = element;
        }
    });

    return result;
};

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    }

    let result = array[0];
    array.forEach((element) => {
        if (element > result) {
            result = element;
        }
    });

    return result;
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    }

    return array.reduce((sum, current) => sum + current, 0) / array.length;
};
