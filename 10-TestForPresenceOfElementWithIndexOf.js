function quickCheck(arr, elem) {

    if (arr.indexOf(elem) < 0) {

        return false;

    }

    return true;

}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));  