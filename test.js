const a = {
  ffq: { title: 1 },
  fwq: { title: 2 },
  ffd: { title: 3 }
};


for (let prop in a) {
  console.log("obj." + prop + " = " + a[prop].title);
}

Object.keys(a).forEach(function(key){

  console.log(key,a[key]);

});
