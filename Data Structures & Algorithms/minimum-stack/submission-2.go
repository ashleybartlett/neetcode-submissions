type MinStack struct {
	minStack []int
	stack []int
}

func Constructor() MinStack {
	minStack := MinStack{make([]int, 0), make([]int, 0)}
	return minStack
}

func (this *MinStack) Push(val int) {
	this.stack = append(this.stack, val)

	if len(this.minStack) == 0 {
		this.minStack = append(this.minStack, val)
	} else {
		this.minStack = append(this.minStack, min(val, this.GetMin()))
	}
	
	// fmt.Printf("Push %v | stack %v | minStack %v\n", val, this.stack, this.minStack)
}

func (this *MinStack) Pop() {
	this.stack = this.stack[:len(this.stack) - 1]
	this.minStack = this.minStack[:len(this.minStack) - 1]

	// fmt.Printf("Pop | stack %v | minStack %v\n", this.stack, this.minStack)
}

func (this *MinStack) Top() int {
	return this.stack[len(this.stack) - 1]
}

func (this *MinStack) GetMin() int {
	return this.minStack[len(this.minStack) - 1]
}
