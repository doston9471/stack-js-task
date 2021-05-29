class Stack{  
  constructor(...elements) {
    this.elements = elements;
    this.size = this.elements.length;
    this.top = this.elements[this.size - 1];
  }

  push(element)
  {
    this.elements.push(element);
    this.size = this.elements.length;
  }

  isEmpty() {
    return this.elements.length == 0;
  }

  pop() {
    if (this.elements.length == 0) {
      return null;
    } else {
      return this.elements.pop();
    }
  }
  peek() {
    return this.top;
  }

  swap() {
    if (this.elements.length == 0) {
      return null;
    } else {
      let topEl = this.elements[this.size - 1];
      let newTopEl = this.elements[this.size - 2];

      this.elements[this.size - 1] = this.elements[this.size - 2];
      this.elements[this.size - 2] = topEl;
      this.top = newTopEl;

      return this.top;
    }
  }
}
module.exports = Stack;