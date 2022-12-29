export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number / 100)
};

export const getUniqueValues = (data,type) => {
    let unique = data.map((item) => item[type]);
    if (type === 'colors') {
        unique = unique.flat(); //this means we'll get an array instead of arrays of arrays as colors is an array in our api
    }
    return ['all', ...new Set(unique)];
};
