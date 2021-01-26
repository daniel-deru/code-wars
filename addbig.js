function add(a, b) {
    let addArr = []
    let biggest = a;
    let smallest = b;
    if(a.length != b.length){
      biggest = a.length > b.length ? a: b;
      smallest = a.length < b.length ? a: b;
    }
    let missing = biggest.split('').splice(0, biggest.length-smallest.length).reverse()
    biggest = biggest.split('') 
    biggest.splice(0,biggest.length-smallest.length)
    biggest = biggest.join('')
    for(let i = biggest.length-1; i > -1; i--){ addArr.push(parseInt(biggest[i])+parseInt(smallest[i])) }
    addArr = addArr.concat(missing.map((element) => parseInt(element))).concat([0])
     for(let i = 0; i < addArr.length; i++){
       if(addArr[i] > 9){
         addArr[i] = addArr[i]-10
         addArr[i+1] = addArr[i+1]+1
       }
     }
    return addArr.reverse().join('').toString().replace(/^0/, '')
  }

 
  console.log(add('1372', '69'))
  console.log(add('888', '222'))
  console.log(add('1', '1'))
  console.log(add('123', '456'))
  console.log(add('12', '456'))
  console.log(add('101', '100'))
  console.log(add('63829983432984289347293874', '90938498237058927340892374089'))


  function add2(a,b){
    return (BigInt(a)+BigInt(b)).toString()
  }
