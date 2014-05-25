"use strict";

var proxyquire = require('proxyquire');
var should = require('should');

describe('git-count-commits', function() {
  it('should delegate correctly', function(done) {
    var repoPath = '/home/node.git';
    var rev = 'master';

    var gitCountCommits = proxyquire.load('./', {
      'git-execute': function(path, args, cb) {
        path.should.eql(repoPath);
        args.should.eql(["rev-list", rev, "--count"]);

        cb(null, '123');
      }
    });

    gitCountCommits(repoPath, rev, function(err, commits) {
      commits.should.eql(123);

      done();
    });
  });
});
