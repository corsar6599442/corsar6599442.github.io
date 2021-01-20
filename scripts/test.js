function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // та же переменная!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}
varTest()