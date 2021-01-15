function zeros (n) {
  let counter = BigInt(1);

  for(let i = BigInt(1); i <= n; i++){
    counter *= i
    }

   return counter.toString().match(/0*$/g).join('').split('').length
  }

  console.log(zeros(22))

  