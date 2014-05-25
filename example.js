"use strict";

var gitCountCommits = require('./');
var path = require('path');
var repoPath = path.resolve(process.env.REPO || (__dirname + '/.git'));
var rev = process.env.REV || 'master';

gitCountCommits(repoPath, rev, function(err, commits) {
  if (err) { throw err; }

  console.log('Total commits for %s#%s: \n  = %s', repoPath, rev, commits);
});
