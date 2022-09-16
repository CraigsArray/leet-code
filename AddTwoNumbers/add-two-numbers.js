/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//Note: My first thought was to convert them into arrays as I hadn't worked with lists enough
//but we should maintain the linked-list datatype

/*
var addTwoNumbers = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    
    let newNode = new ListNode(0);
    let newHead = newNode;

    function traverse(l1, l2, carry){
        if (!l1) return l2;
        if (!l2) return l1;
        let sum = l1 + l2 + carry;
        if (sum > 10){
            carry = sum % 10;
            sum = parseInt(sum/10);
        }
        newHead.next = new ListNode(sum);
        newHead = newHead.next;
        traverse(l1.next, l2.next, carry);
        
    }


 var addTwoNumbers = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let num1 = [];
    let num2 = [];
    function traverse(node, num){
        if(!node) return;
        traverse(node.next, num);
        num.push(node.val);
        
    }
    traverse(l1, num1);
    traverse(l2, num2);

    console.log(num1, num2)
    console.log(parseInt(num1.join('')) + parseInt(num2.join('')))
    let sum = (parseInt(num1.join('')) + parseInt(num2.join(''))).toString();
    //sum is correct...but it's not a list...
};*/