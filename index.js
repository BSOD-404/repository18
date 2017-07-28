var a, b, n;

a = 0;
b = 1;
n = b;
for (var i = 1; i <= 404; i++)

{

    document.write(n + '<br>');
    n = a + b;
    a = b;
    b = n;
    
}

function fiboNum(num) {
    if (num ==0) {
        return 0;
    }
    
     if (num ==1) {
        return 1;
    }
    
    //num > 1
    
    return fiboNum(num - 2) + fiboNum(num -1);
} 

var number = parseInt(prompt('Enter your "N" value you want to find here, please:')); //don't really know what the radix parameter is missing here
alert(fiboNum(number));