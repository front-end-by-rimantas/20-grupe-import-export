import { suma } from './suma.js';
import { dalyba } from './dalyba.js';

function vidurkis(list) {
    let totalSum = 0;
    const count = list.length;

    for (let i = 0; i < count; i++) {
        const number = list[i];
        totalSum = suma(totalSum, number);
    }

    return dalyba(totalSum, count);
}

export { vidurkis }