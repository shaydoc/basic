var arr = [[1,2,3],
           [1,2,3],
           [1,2,3]]

function SwapXandY(arr2d){
    var res = [[0,0,0],
               [0,0,0],
               [0,0,0]]

    for (var i=0; i<arr2d.length;i++){
       for (var j=0;j<arr2d[i].length;j++){
           res[i][j] = arr2d[arr2d.length-j-1][i]
       }
    }

    return res
}

console.log(SwapXandY(arr))