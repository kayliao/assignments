function delayed(n1, n2, delayTime, callback) {
  setTimeout(callback, delayTime, n1 + n2);
}

function delayed2(n1, n2, delayTime) {
  let promise = new Promise(function (resolve, reject) {
    // the function is executed automatically when the promise is constructed

    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve(n1 + n2), delayTime);
  });
  return promise;
}

delayed2(4, 5, 3000).then((result) => {
  console.log(result);
});

delayed2(4, 10, 2000).then((result) => {
  console.log(result);
});

delayed2(4, 5, 3000)
  .then((result) => {
    console.log(result);

    return delayed2(1, 2, 5000);
  })
  .then((result) => {
    console.log(result);
  });

Promise.all([
  delayed2(4, 30, 9000),
  delayed2(5, 10, 5000),
  delayed2(1, 10, 2000),
]).then((values) => {
  console.log(values);
});
