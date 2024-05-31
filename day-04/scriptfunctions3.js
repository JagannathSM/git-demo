// ALL FUNCTIONS ARE ARROW FUNCTIONS

arr = [12,23,11,10,54]

// TO PRINT ODD NUMBERS IN ARRAY
var oddnum = (arr) => {
    var out = [];
    for(var i =0;i<arr.length;i++){
        if(arr[i]%2!=0){
            out.push(arr[i]);
        }
    }
    console.log(`Arrow function Output for odd elements in array-${out}`);
}
oddnum(arr);


//SUM OF ALL NUMBERS IN ARRAY
var sumarrayele = (arr) => {
    var sum = 0;
    for(var i =0;i<arr.length;i++){
        sum=sum+arr[i];
    }
console.log(`Arrow function Output for addition of elements-${sum}`);
}
sumarrayele(arr);


//PRIMENUMBERS IN AN ARRAY
var prime_ele = (arr) => {
    var out1 = [];
    var count=0;
    for(var i =0;i<arr.length;i++){
        for(var j=1;j<=arr[i];j++){
            if(arr[i]%j==0){
                count++;
            }
        }
        if(count==2){
            out1.push(arr[i]);
        }
        count=0;
    }
console.log(`Arrow function Output for prime numbers in array-${out1}`);
}
prime_ele(arr);


//PALINDROMES IN ARRAY
var arr1 = ['MALAYALAM',121,'BODY',1987,212];
var palindrom_ele = (arr) => {
    var out2 = [];
    for(var i=0;i<arr.length;i++){
        var test = [];
        var temp = [];
          var s= String(arr[i]);
          test = s.split('');
          test.reverse();
          temp = test.join('');
          if(arr[i]==temp){
              out2.push(arr1[i]);
          }
      }
console.log(`Arrow function Output for palindrome numbers in array-${out2}`);
}
palindrom_ele(arr1);


// CONVERT ALL STRINGS TO TITLE CAPS
var str = "arrow function last problem"
var title_caps = (a) => {
    var result = [];
    var array = a.split(' ');
    for(var i=0;i<array.length;i++){
        var inarr = array[i].split('');
        var place = inarr[0].toUpperCase();
        inarr[0]=place;
        var outarray = inarr.join('');
        result.push(outarray);
    }
    console.log(`Arrow function Output for array K times-${result.join(' ')}`);
}
title_caps(str);