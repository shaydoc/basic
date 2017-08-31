
var list = [1,2,3,4,5,6]
var str = 'SHAY'

Array.prototype.reverseShay = function(){
    var revList = []
    for(let i=this.length-1; i>=0;i--){
        revList.push(this[i])
    }

    return revList
}

String.prototype.reverseString = function(){
    var revList = []
    for(let i=this.length-1; i>=0;i--){
        revList.push(this[i])
    }
    return revList.join('')
}

Array.prototype.binarySearch = function(target){
    let first = 0, 
        last = this.length - 1

    let mid = 0
   
    while(first<=last){
        mid =  Number((first+last)/2)
        //console.log(mid)
        if (target > this[mid]){
            first = mid+1
        }
        else if (target < this[mid]){
            last = mid-1
        }
        else{
            return mid
        }
    }

    return -1
}

console.log(['A','B','C','D','E','F','G'].binarySearch('B'))
console.log(str.reverseString())
