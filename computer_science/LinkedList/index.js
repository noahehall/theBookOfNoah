/**
 * LinkedList
 * @see https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
 */


import Node from './Node';

export default function SinglyList() {
    this.length = 0;
    this.head = null;
}


SinglyList.prototype.add = function(data) {
    const node = new Node(data);

    // 1st use-case: an empty list
    if (!this.head) {
        this.head = node;
        this.length++;

        return node;
    }

    // 2nd use-case: a non-empty list
    while (this.head.next) this.head = this.head.next;

    this.head.next = node;

    this.length++;

    return node;
};


SinglyList.prototype.searchNodeAt = function(position) {
    let count = 1;
    const message = {failure: 'Failure: non-existent node in this list.'};

    // 1st use-case: an invalid position
    if (this.length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2nd use-case: a valid position
    while (count < position) {
        this.head = this.head.next;
        count++;
    }

    return this.head;
};

SinglyList.prototype.remove = function(position) {
    const message = {failure: 'Failure: non-existent node in this list.'};

    // 1st use-case: an invalid position
    if (position < 0 || position > this.length) {
        throw new Error(message.failure);
    }

    let count = 0,
        currentNode = this.head,
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this.length--;

        return deletedNode;
    }

    // 3rd use-case: any other node is removed

    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this.length--;

    return deletedNode;
};
