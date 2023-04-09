const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

// findMin

const findMin = (...args) => Math.min(...args)

// mergeObjects
mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

//Slice and Dice

// remove a random element in the items array and return a new array without that item.

const removeRandom = items => {
    let i = Math.floor(Math.random() * items.length);
    return [...items.slice(0,i), items.slice(i + 1)];
}

// Return a new array with every item in array1 and array2

const extend = (arr1, arr2) => {
    [...arr1, ...arr2]
}

// Return a new object with all the keys and values from obj and a new key/value pair

const addKeyVal = (obj, key, val) => {
    return { ...obj, [key]: val}
}

// Return a new object with a key removed.

const removeKey =(obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

// Combine two objects and return a new object

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }

//  Return a new object with a modified key and value.

const update = (obj,key,v) => {
    let newObj = {...obj};
    newObj[key] = v;
    return newObj;
}