function receivesAFunction(spy) {
    return spy()
}

let returnsANamedFunction = (() => function named(){})

function returnsAnAnonymousFunction() {
    return function(){}
}