
var mixin = function(){
    this.area = function() {
        return this.x * this.y
    }

}


function Square(){
    this.x = 2
    this.y = 2
}

mixin.apply(Square.prototype)

var s = new Square();
console.log(s.area())