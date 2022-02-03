/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
function cookingStatus(timer) {
    if (timer === undefined) return 'You forgot to set the timer.';
    if (timer > 0) return 'Not done, please wait.';
    return 'Lasagna is done.';
}

function preparationTime(layers, prep_time = 2) {
    return layers.length * prep_time;
}

function quantities(arr) {
    let noodles = 0;
    let sauce = 0;
    for (const item of arr) {
        if (item === 'noodles') noodles += 50;
        if (item === 'sauce') sauce += .2;
    }
    return {
        'noodles': noodles,
        'sauce': sauce
    }
}

function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList.slice(-1)[0]);
}

function scaleRecipe(recipe, portions) {
    const newRecipe = JSON.parse(JSON.stringify(recipe));
    for (const item in newRecipe) {
        newRecipe[item] *= portions/2;
    }
    return newRecipe;
}

export {scaleRecipe, addSecretIngredient, quantities, cookingStatus,preparationTime};