class Solution {
    evalRPN(tokens) {
        const stack = []

        for (let char of tokens) {
            if (char === "+" || char === "-" || char === "*" || char === "/") {
                const b = stack.pop()
                const a = stack.pop()

                if (char === "+") stack.push(a + b)
                else if (char === "-") stack.push(a - b)
                else if (char === "*") stack.push(a * b)
                else if (char === "/") stack.push(Math.trunc(a / b))

            } else {
                stack.push(Number(char))
            }
        }

        return stack[0]
    }
}