console.log('#'.repeat(4));

function Steps (n) {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n-i).concat('#'.repeat(i)))
  }
}
Steps(6)