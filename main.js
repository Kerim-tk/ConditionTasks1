
function one(){
    console.log("1. User gives 2 numbers (A and B). Print to the console the result of dividing A by B and the remainder of the division.")
    const a = +prompt ('please enter the value of A:');
    const b = +prompt ('please enter the value of B:');
    console.log(a);
    console.log(b);
    let result = a / b;
    let remainder = a % b;
    console.log("result of dividing:", result);
    console.log("remainder of the division", remainder);
}
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
function two(){
    console.log("2. The user enters 2 values (A and B). Swap the contents of variables A and B (that means the value of variable B must be assigned to variable A, and vice versa).")
    let a = +prompt ('please enter the value of A:');
    let b = +prompt ('please enter the value of B:');
    c = a;
    a = b;
    b = c;
    console.log(a , b);
}
    
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
function three(){
    console.log("3. The user enters 3 non-zero numbers (A, B and C). Print to the console the solution (the value of X) of the standard linear equation, where A*X+B=C.")
    const a = +prompt ('please enter the value of A:');
    const b = +prompt ('please enter the value of B:');
    const c = +prompt ('please enter the value of C:');
    let result = c-b/a;
    console.log(result);
}
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
function four(){
    console.log("4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, if A=B then the result of A*B, if A<B then A-B.")
    let a = +prompt ('please enter the value of A:');
    let b = +prompt ('please enter the value of B:');
    console.log(a);
    console.log(b);
    let result = '';
    if(a > b){
        result = a + b;
    } else if (a == b){
        result = a * b;
    }else if (a < b){
        result = a - b;
    }
    console.log(result);
}

four()

