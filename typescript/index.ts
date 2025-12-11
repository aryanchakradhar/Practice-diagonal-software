type user = {
    name: string;
    age: number;
}



function total<A,B> (value1:A, value2: B): A | B {
    return value1 || value2;
}

let abc = total<user, number>({name:"afjkdn", age:97},7878767)