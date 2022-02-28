const arr = [656462,445654,885,8668,86755,8767979,879784,54508,86565]

const more = arr.reduce((acc,curr)=>(acc<curr ? acc:curr));

console.log(more)