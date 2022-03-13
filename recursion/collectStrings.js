const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}


const collectStrings = (obj, result = []) => {
    for (const val of Object.values(obj)) {
        if (typeof val === 'string') {
            result = [...result, val];
        } else if (typeof val === 'object') {
            collectStrings(val, result);
        }
    }
    return result;
}

collectStrings(obj) 



