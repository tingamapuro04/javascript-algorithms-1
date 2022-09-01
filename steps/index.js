console.log('#'.repeat(4));

function Steps (n) {
  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i).concat(' '.repeat(n-i)))
  }
}
Steps(6)