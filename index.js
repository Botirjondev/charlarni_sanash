
// charCount("a", "edabit") вћћ 1

// charCount("c", "Chamber of secrets") вћћ 1

// charCount("b", "big fat bubble") вћћ 4



var str = "edabit ";
var str1 = 'Chamber of secrets';
var str2 = 'big fat bubble';

function rain(str1) {
    var res = str1.match(/e/g).length;
    return res;
}


console.log(rain(str1));
