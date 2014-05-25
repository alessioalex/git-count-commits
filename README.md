# git-count-commits

Get the total number of commits for a repo and a specific revision by shelling out to git.

## Usage

```js
gitCountCommits(repoPath, revision, callback);
```

Example

```js
var gitCountCommits = require('git-count-commits');
var path = require('path');
var repoPath = path.resolve(process.env.REPO || (__dirname + '/.git'));
var rev = process.env.REV || 'master';

gitCountCommits(repoPath, rev, function(err, commits) {
  if (err) { throw err; }

  console.log('Total commits for %s#%s: \n  = %s', repoPath, rev, commits);
});
```

## Tests

```
npm test
```

## License

MIT
