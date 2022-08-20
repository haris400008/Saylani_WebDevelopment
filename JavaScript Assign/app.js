// ______TASK 1_____
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));



//_____TASK 2_____
function check_Palindrome(text){
       var cstr = text.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
        if(cstr==="") {
            console.log("Nothing Found!");
            return false;
        }

        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
            if (cstr.length === 1) {
                console.log("Entered String is a Palindrome.");
                return true;
            } else {
                ccount = (cstr.length - 1) / 2;
            }
        }

        for (var x = 0; x < ccount; x++) {
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                console.log("Entered String is not a Palindrome.");
                return false;
            }
        }
        console.log("The Entered String is a Palindrome.");
        return true;
    }
    check_Palindrome('eye');
    check_Palindrome('fox');


//_____TASK 3______
function combString(str){
    var lenStr = str.length;
    var result = [];
    var indexCurrent = 0;
    while(indexCurrent < lenStr){
        var char = str.charAt(indexCurrent);
        var x;
        var arrTemp = [char];

        for(x in result) {
            arrTemp.push(""+result[x]+char);
        }
        result = result.concat(arrTemp);
        indexCurrent++;
    }
    return result;
}
console.log(combString("cat"));



//_____TASK 4_____
function alpha(str) {
    var arr = str.split(""); 
    res = arr.sort().join(""); 
    return res; 
  }
  console.log(alpha("internet"));



//_____TASK 5_____
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));



// _____TASK 6_____
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];
  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));



// _____TASK 7_____
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));



// _____TASK 8_____
function prime(n)
{
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
console.log(prime(17));



// _____TASK 9_____
function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('Web Development'));
console.log(detect_data_type(false));



// _____TASK 10_____
function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var numbers = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      numbers.push(arr_num[j]);
    }
  }
    result.push(numbers[1],numbers[numbers.length-2]);
    return result.join(',');
}
console.log(Second_Greatest_Lowest([1,2,3,4,5]));