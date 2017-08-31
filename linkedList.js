
function Node(data,next, prev){
    var self = this;
    this.data = data
    this.next = next;
    this.prev = prev;
}

function LinkedList(){
    var self = this
    var head = undefined
    var tail = undefined

    var count = 0

    self.getCount = function(){
        return count
    }

    self.addNode = function(data){
        let tmp = head
        let node = new Node(data,tmp)
        if(tmp==undefined){
            tail = head = node
            
        }
        else{
           head = node
           tmp.prev = node
            
        }
        count += 1
    }

    self.addToBack = function(data){
         let tmp = tail
         let node = new Node(data)
         if (tail == undefined){
             head = tail = node
         }
         else{
             tail = node
             node.prev = tmp
             tmp.next = node
         }
         
         count += 1
    }
    
    self.addAtPosition = function(index, data){
        let i = 0
        let tmp = head
        while(tmp && i<index){
            tmp = tmp.next
            i+=1
        }

        //insert the node at this index
        let newNode = new Node(data,tmp.next,tmp)
        tmp.prev.next = newNode
        tmp.next.prev = newNode
        count += 1
    }

    

    self.printList = function(){
        let res = []
        let tmp = head
        while(tmp){
            res.push(tmp.data)
            tmp = tmp.next
        }

        console.log(res.join(','))
    }

    self.printListInReverse = function(){
        let res = []
        let tmp = tail
        while(tmp){
            res.push(tmp.data)
            tmp = tmp.prev
        }

        console.log(res.join(','))
    }

}


var list = new LinkedList();

for (let i=0;i<10;i++){
    list.addNode(i)
}

list.addToBack(-1)
list.addAtPosition(2,12)

console.log(list.getCount())
list.printList()
list.printListInReverse()

 