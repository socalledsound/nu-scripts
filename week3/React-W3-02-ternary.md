
Minae script -- using it here as discussed with Jevon

JavaScript - Ternary Operator

The ternary operator is also known as the conditional operator. It's called ternary, meaning 3, because it's the only JavaScript operator that takes 3 operands. The first operand is a condition to be evaluated, followed by a question mark. The second is an expression to execute if the condition is truthy, followed by a colon. The third and final operand is an expression to execute if the condition is falsy. 
This operator is used as a shortcut for the if statement. 

 Let's look at an example in the console.
First, let's look at an if statement. Let's say we have a lightswitch object with a property that keeps track of the lightswitch's on or off state, and a method to turn it off or on.

const lightswitch = {
	switchState: "on",
	flipSwitch() {
        if (this.switchState === "on") {
            this.switchState = "off";
        } else {
            this.switchState = "on";
        }
    }
};

You can see that the current switchState is on : lightswitch
If I use the lightswithc.flipSwitch() method, then I can see that the switchState has changed to off.
And if I call it again, it'll switch back to on. 

Let's try this now with the ternary operator. We can overwrite the switchState method:

lightswitch.flipSwitch = function() {
	(this.switchState === "on") ? this.switchState = "off" : this.switchState = "on";
}
The first operand is the condition to evaluate, just like in an if statement. So we're evaluating here if this.switchState equals on. Then we have a question mark, and this code after it will execute if the condition in the first operand evaluates as truthy. If it evaluates as alsy, then this third operand, after this colon, will execute instead. So if this, then this, else this. 

Let's test that out. The switchstate is currently this. I'll run lightswitch.flipSwitch again. Now you can see it has flipped to this. One more time - and you can see it's flipped back. So you can see it's working the same way as when we used the if statement.

We'll look at one more example. Here's a function. 
function canVote(age) {
	if (age >= 18) {    		return true;
	}
	return false;
}
This function takes an age argument and returns true if it's 18 or over, and false if it's under 18.

Based on the previous example, you might think you can rewrite this with the ternary operator like so:
The condition, question mark, code to execute if condition is truthy, colon, code for falsy..

function canVote(age) {
	(age >= 18) ? return true : return false;
}

This will not work. You cannot use the return statement within a ternary operation, you will just get this error. Because return is a statement, not an expression. However, you can take the result of the ternary operation and return that, like this:

function canVote(age) {
	return (age >= 18) ? true: false;
}

[demo this working]

So that's a couple different ways you can use the ternary operator. Try the Code Challenge for ternary operators to practice this new syntax for yourself. 

