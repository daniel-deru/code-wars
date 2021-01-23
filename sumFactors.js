function sumOfDivided(lst) {
    let outerArray = []
    const newArray = []
    if(lst.length != 0){
    const max = Math.abs(lst.reduce((a, b) => a + Math.abs(b)));
    for(let i = 2; i < max; i++){
        let isPrime = true;
        for(let j = 2; j < i; j++){
            if(i % j == 0){
                isPrime = false
                break
            }
        }
        if(isPrime){
            const innerArray = []
            innerArray.push(i)
            outerArray.push(innerArray)
        } 
    }
    for(let i = 0; i < outerArray.length; i++){
        for(let j = 0; j < lst.length; j++){
            if(lst[j] % outerArray[i][0] == 0) outerArray[i].push(lst[j])
        }
    }
    for(let i = 0; i < outerArray.length; i++){
        if(outerArray[i].length > 1) newArray.push(outerArray[i])
    }
    newArray.forEach(element => {
        let newElement = 0
        if(element.length > 2){
            newElement -= element[0];
            element.forEach(number => newElement+=number )
            element.splice(1, element.length, newElement)    
        }
    }) 
    return newArray
      } else  return []
  }
console.log(sumOfDivided([15,21,24,30,45]))
