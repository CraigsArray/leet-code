var mergeTwoLists = function(list1, list2) {
    let curr = new ListNode();
    let newlistHead = curr;
    while(list1 !== null && list2 !== null) {
        if(list1.val > list2.val) { //take the smaller node
            curr.next = list2;
            list2 = list2.next;
        } else {
            curr.next = list1;
            list1 = list1.next;
        }
        curr = curr.next; //update current node in new list
    }
    if(list1 !== null){
        curr.next = list1;
        list1 = list1.next;
    }
    if(list2 !== null){
        curr.next = list2;
        list2 = list2.next;
    }
    return newlistHead.next; //Return entire list from the beginning.
};