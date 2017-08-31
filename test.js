

function TestObj(){
   var self = this

   self.name='Shay'
}

TestObj.prototype.updateName = function(){
    console.log(this.name)
}

function printArray(){
    var arr = [1,2,3]
    console.log(arr.join(';'))
}


var t = new TestObj()

t.updateName()