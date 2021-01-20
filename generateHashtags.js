function generateHashtag (str) {
    let newArray = ['#'];
    let stringArray = str.replace(/ {1,}/g, ' ').trim().split(' ');
    if(stringArray[0] === '') return false
    for(let i = 0; i < stringArray.length; i++){
      newArray.push(stringArray[i][0].toUpperCase() + stringArray[i].substring(1))
    }
    if(newArray.join('').length > 140) return false
    return newArray.join('')
}
console.log(generateHashtag('this is a test to    see if    the amo      '))