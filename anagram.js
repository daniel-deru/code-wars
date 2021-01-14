function anagrams(word, words) {
    let key = word.split('').sort().join('');
    let anagramArray = new Array;

    words.forEach(element => {
      let compare = element.split('').sort().join('');
      if(compare == key) anagramArray.push(element)
    });
    return anagramArray
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))