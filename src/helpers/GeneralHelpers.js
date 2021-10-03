import { createBrowserHistory } from 'history';

export const ucFirst = (string) => {
    if (string)
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export function capitalString(string) {
    let array = string && typeof string === 'string' ? string.split("_") : []
    if (typeof string === 'object')
        Object.keys(string).map(key => {
            array.push(Array.isArray(string[key]) ? string[key].join('. ') : string[key])
        })
    array = array.map(item => {
        return ucFirst(item)
    })
    return array.join(" ")
}

export const history = createBrowserHistory();