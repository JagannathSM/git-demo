// ALL FUNCTIONS ARE IIFE FUNCTIONS


// SUM OF ALL NUMBERS IN AN ARRAY
(function (){
    var sum = 0;
    var arr = [1,2,3,4,5];
    for(var i =0;i<arr.length;i++){
        sum=sum+arr[i];
    }
console.log("IIFE function Output for addition of elements"+"-"+sum);
})();


// PRINT ODD NUMBERS IN AN ARRAY
(function (){
    var out = [];
    var arr = [1,2,3,4,5];
    for(var i =0;i<arr.length;i++){
        if(arr[i]%2!=0){
            out.push(arr[i]);
        }
    }
console.log("IIFE function Output for odd elements in array"+"-"+out);
})();


// RETURN ALL PRIME NUMBERS IN AN ARRAY
(function (){
    var out1 = [];
    var arr=[7,12,33,5,1];
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
console.log("IIFE function Output for prime numbers in array"+"-"+out1);
})();


// RETURN ALL PALINDROMES IN AN ARRAY
(function (){
    var arr1 = ['MALAYALAM',121,1224,1987];
    var out2 = [];
    for(var i=0;i<arr1.length;i++){
        var test = [];
        var temp = [];
          var s= String(arr1[i]);
          test = s.split('');
          test.reverse();
          temp = test.join('');
          if(arr1[i]==temp){
              out2.push(arr1[i]);
          }
      }
console.log("IIFE function Output for palindrome numbers in array"+"-"+out2);
})();


// RETURN MEDIAN OF 2 SORTED ARRAY OF SAME SIZE
(function (){
    var a1 = [1,5,7,3];
    var a2 = [43,12,11,6];
    a1.sort((a,b)=>a-b);
    a2.sort((a,b)=>a-b);
    var a = a1[a1.length-1];
    var b = a2[0]
    var mediansum = (a+b)/2;
    console.log("IIFE function Output for median of 2 arrays"+"-"+mediansum);
})();


// REMOVE DUPLICATES FROM AN ARRAY
(function (){
    var arr2 = [1,1,23,2,3,4,3];
    var output = arr2.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    console.log("IIFE function Output for remove duplicates in array"+"-"+output);
})();


// ROTATE AN ARRAY IN 'K' TIMES
(function (){
    var arr3 = [1,2,3,4,55];
    var k = 3;
    for (let i = 0; i < k; i++) {
        const lastElement = arr3.pop();
        arr3.unshift(lastElement);
    }
    console.log("IIFE function Output for array K times"+"-"+arr3);
})();


// CONVERT ALL THE STRINGS TO TITLE CAPS IN STRING ARRAY
(function (){
    var str = "this is The last one"
    var result = [];
    var array = str.split(' ');
    for(var i=0;i<array.length;i++){
        var inarr = array[i].split('');
        var place = inarr[0].toUpperCase();
        inarr[0]=place;
        var outarray = inarr.join('');
        result.push(outarray);
    }
    console.log("IIFE function Output for array K times"+"-"+result.join(' '));
})();