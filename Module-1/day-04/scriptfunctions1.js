// ALL FUNCTIONS ARE ANONYMOUS FUNCTIONS

var arr = [1,2,3,4,5];

// SUM OF ALL NUMBERS IN AN ARRAY
var addition = function (arr){
    var sum = 0;
    for(var i =0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log("Anonymous function Output for addition of elements"+"-"+addition(arr));


// PRINT ODD NUMBERS IN AN ARRAY
var oddnumber = function (arr){
    var out = [];
    for(var i =0;i<arr.length;i++){
        if(arr[i]%2!=0){
            out.push(arr[i]);
        }
    }
    return out;
}
console.log("Anonymous function Output for oddnumbers"+"-"+oddnumber(arr));


// RETURN ALL PRIME NUMBERS IN AN ARRAY
var primenumber = function (arr){
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
    return out1;
}
console.log("Anonymous function Output for Primenumbers"+"-"+primenumber(arr));


// RETURN ALL PALINDROMES IN AN ARRAY
var arr1 = ['MALAYALAM',121,1224,1987];
var out2 = [];
var palindromenumber = function(arr){
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
    return out2;
}
console.log("Anonymous function Output for Palindromenumbers"+"-"+palindromenumber(arr1));


// RETURN MEDIAN OF 2 SORTED ARRAY OF SAME SIZE
var a1 = [1,5,7,3];
var a2 = [43,12,11,6];
var median2array = function (arr1,arr2){
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    var a = arr1[arr1.length-1];
    var b = arr2[0]
    var mediansum = (a+b)/2;
    return mediansum;
}
console.log("Anonymous function Output for median of 2 arr"+"-"+median2array(a1,a2));


// REMOVE DUPLICATES FROM AN ARRAY
var arr2 = [1,1,23,2,3,4,3];
var duplicatearray = function(arr){
    var output = arr2.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    return output;
}
console.log("Anonymous function Output for revome of duplicate ele"+"-"+duplicatearray(arr2));


// ROTATE AN ARRAY IN 'K' TIMES
var arr3 = [1,2,3,4,55];
function rotateArray1(nums, k) {
    for (let i = 0; i < k; i++) {
        const lastElement = nums.pop();
        nums.unshift(lastElement);
    }
} 
rotateArray1(arr3, 2);
console.log("Anonymous function Output for rotate array ele K times"+"-"+arr3);


// CONVERT ALL THE STRINGS TO TITLE CAPS IN STRING ARRAY
var str = "hello world good to see you"
var result = [];
var stringtotitlecaps = function (a){
    var array = a.split(' ');
    for(var i=0;i<array.length;i++){
        var inarr = array[i].split('');
        var place = inarr[0].toUpperCase();
        inarr[0]=place;
        var outarray = inarr.join('');
        result.push(outarray);
    }
    return(result.join(' '));
}
console.log("Anonymous function Output for string to title caps"+"-"+stringtotitlecaps(str));