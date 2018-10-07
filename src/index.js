module.exports = function solveSudoku(matrix) {
  let m=matrix;
  
  function solve(matrix) {
    var i, j, b, k;
    for (i = 0; i <= 8; i++) {
      for (j = 0; j <= 8; j++) {
        if (!matrix[i][j]) {
          for (k = 1; k <= 9; k++) {
            if (insert(matrix, i, j, k)) {
              matrix[i][j] = k;
              b = solve(matrix);
              if (b) { return true; }
              matrix[i][j] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  function insert(matrix, i, j, k) {
    var a, b;
    for (a = 0; a <= 8; a++) {
      if (a != i && matrix[a][j] == k) {
        return false;
      }
    }
    for (a = 0; a <= 8; a++) {
      if (a != j && matrix[i][a] == k) {
        return false;
      }
    }
    var y = Math.floor((i / 3)) * 3,
        x = Math.floor((j / 3)) * 3;
    for (a = 0; a < 3; a++) {
      for (b = 0; b < 3; b++) {
        if (a != i && b != j && matrix[y + a][x + b] == k) {
          return false;
        }
      }
    }
    return true;
  }
  solve(m);
  return m;
}
