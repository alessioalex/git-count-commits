"use strict";

var gitExecute = require('git-execute');

module.exports = function(repoPath, rev, callback) {
  if (!callback) {
    callback = rev;
    rev = "HEAD";
  }

  var args = ["rev-list", (rev || "HEAD"), "--count"];

  gitExecute(repoPath, args, function(err, stdout, stderr) {
    if (err) { return callback(err); }

    callback(null, parseInt(stdout.trim(), 10));
  });
};
