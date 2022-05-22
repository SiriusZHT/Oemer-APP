var exec = require("child_process").exec;

var cmdStr = "oemer './src/img/flower-1.png'";

exec(cmdStr, function (err, stdout, stderr) {
  if (err) {
    console.log("get weather api error:" + stderr);
  } else {
    // var data = JSON.parse(stdout);
    console.log(stdout);
  }
});
