const word = " to leave some space at the beggining of every firsyt lineword-spacing:to leave space between two wordsletterpacingto leave space between two letterline-height:to leave space between two lines "

const long = word.split(" ").reduce((acc,curr)=>(acc>curr ? acc:curr));

console.log(long)