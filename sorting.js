Array.prototype.sortBubbleByShay = function(){
    var arr = this.slice(0)
    for (var i=0;i<arr.length-1;i++){
        for (var j=0;j<=arr.length-2;j++){
               if (arr[j] > arr[j+1]){
                   var tmp = arr[j+1]
                   arr[j+1] = arr[j]
                   arr[j] = tmp
               }
        }
    }
   
    return arr
}


var arr = [99,1,24,35,5,4,11,8,13,9,2,6,3]

var sorted  = arr.sortBubbleByShay()

console.log(arr)
console.log(sorted)