function solution(B) {
    const y = B.length;
    const x = B[0].length;
    let patrolBoats = 0;
    let subMarines = 0;
    let destroyers = 0;

    let grid = [];

    for (let a = 0; a < y; a++) {
        let row = B[a].split("");
        grid.push(row);
    }

    console.log(grid);
    
    for (let a = 0; a < y; a++) {
        for (let b = 0; b < x ; b++) {
            if (grid[a][b] == "#") {
                let count = bfs(grid, a, b, y, x, 0) - 1;
                if (count == 3) destroyers++;
                if (count == 2) subMarines++;
                if (count == 1) patrolBoats++;
            }
        }
    }
    return [patrolBoats, subMarines, destroyers];
}

function bfs(grid, a, b, max_a, max_b, count) {
    
    if (a < 0 || b < 0 || a + 1 > max_a || b + 1 > max_b || grid[a][b] == "Y" || grid[a][b] == ".") {
        return count;
    }

    grid[a][b] = "Y";
    count = 1;
    return bfs(grid, a + 1, b, max_a, max_b, count) + bfs(grid, a , b + 1, max_a, max_b, count);
}


const B = [".##.#", "#.#..", "#...#", "#.##."];

console.log(solution(B));