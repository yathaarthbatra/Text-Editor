export { Stack };

class Stack {
  constructor() {
    this.size = 0;
    this.buffer = 4;
    this.stack = [];
  }

  clear() {
    this.size = 0;
    this.stack = [];
  }
  isEmpty() {
    return this.size === 0;
  }
  top() {
    //returns the top element from the stack
    return this.stack[this.size - 1];
  }

  stack_push(type, char) {
    if (this.isEmpty()) {
      if (type === 0) {
        this.stack.push([type, char]);
      }
    }
    //if stack size is not empty
    else {
      let temp = stack.top();
      if (temp[0] === type && temp[1].length < this.buffer) {
        //if the same operation has to be performed
        //and the string length is less than the buffer
        //then we will concatenate the string
        let top = stack.pop();
        top[1] = char + top[1];
        this.stack.push(top);
      } else {
        this.stack.push([type, char]);
      }
    }
    this.size++;
  }

  stack_pop() {
    if (!this.isEmpty()) {
      this.size--;
      return this.stack.pop();
    } else {
      return [-1, ""];
    }
  }
}
