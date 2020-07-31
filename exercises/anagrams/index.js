// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
 anagrams('Rail Safety', 'fairy tales');

function anagrams(stringA, stringB){

   return cleanUpStr(stringA) === cleanUpStr(stringB);
}

function cleanUpStr(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}
  
module.exports = anagrams;

// ** Simple solution

// function anagrams(stringA, stringB) {
//    var charMapA = charMap(stringA)
//    var charMapB = charMap(stringB)
   
//    if(Object.keys(charMapA).length != Object.keys(charMapB).length){
//        return false;
//    }

//    for(let char in charMapA){
//        if(charMapA[char] !== charMapB[char]){
//            return false;
//        }
//    }

//    return true;
// }

// function charMap(str){
//     var chars = {};
//     for(let char of str.replace(/[^\w]/g,'').toLowerCase()){
//         if(chars[char]){
//             chars[char]++;
//         }else{
//             chars[char] = 1;
//         }
//     }

//     return chars;
// }