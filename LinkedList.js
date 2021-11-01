class Node {

    constructor(data,next=null) {
        this.data = data;
        this.next=next;
    }
}
class LinkedList {
    
    constructor() {
        this.head = null;
        this.size=0;
    }
    add = function addNode(elem) {
        var pointer=this.head;
        var newElem=new Node(elem);
        if(this.head==null) {
            this.head=newElem;
        } else {
            while(pointer.next!=null) {
                pointer=pointer.next;
            }
            elem=newElem;
            pointer.next=elem;
            this.size++;
        }
    }

    printNodes() {
        var pointer=this.head

        do {
            console.log("pointer.data ",pointer.data);
            console.log("pointer.next ",pointer.next);
              pointer=pointer.next
        } while (pointer !=null)
    }

    insertAt(num,index) {
        var newNode=new Node(num);
        var i=0;
        var pointer = this.head;
       while(i<index) {
            pointer=pointer.next;
            i++;
        }
        [pointer.next,newNode.next]=[newNode,pointer.next];
    /*    var temp=pointer.next;
        pointer.next=newNode;
        newNode.next=temp;*/


    }

}
function testLinkedList() {
    ll = new LinkedList();
    ll.add(4);
    ll.add(6);
    ll.add(3);
    ll.printNodes();
    ll.insertAt(60, 1);
    ll.printNodes();

}

testLinkedList();
