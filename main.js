
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
    let result = (c-b)/a;
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
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
function five(){
    console.log("5. User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.")
    let a = +prompt ('please enter the value of A:');
    let b = +prompt ('please enter the value of B:');
    let c = +prompt ('please enter the value of C:');
    console.log(a);
    console.log(b);
    console.log(c);
    if(a == 0)
        return "D = 0";
    let res = {};
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0)
        return "D < 0";
    res = D;
    if(D == 0)
        res = (-b + Math.sqrt(D)) / (2 * a);
    else if(D > 0){
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        res = tmp;
    }
    return res;
}
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
function six(){
    console.log("The user enters a two-digit number. Print the literal representation of this number to the console. For example, typing '25' will display 'twenty five' in the console, and '13' will display 'thirteen'.")
    let a = +prompt ('please enter the value of A:');
    console.log(a);
    const string1 = "A string primitive";
    // не могу без array сделать
    
}
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
function seven(){
    console.log("7. User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle with radius r? (the center of the circle is at the origin)")
    let x = +prompt ('please enter the value of X:');
    let y = +prompt ('please enter the value of Y:');
    let r = +prompt ('please enter the value of R:');
    console.log(x);
    console.log(y);
    console.log(r);
    

    if(x**2 + y**2 < r**2)
    {
        console.log("Inside");
    }
    else if(x**2 + y**2 == r**2)
    {
        console.log("On the circle");
    }
    else
    {
        console.log("Outside");
    }
    
}

seven()



