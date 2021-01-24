function solution(input, markers) {
      const arr = []
      for(let i = 0; i < markers.length; i++){
         if(markers[i] === '$'){
            markers[i] = '\\$'
          }
          newmarker = `${markers[i]}.*`
          newmarker = new RegExp(newmarker,"g")
          arr.push(newmarker)
      }
      for(let i = 0; i < arr.length; i++){
          input = input.replace(arr[i], '')
      }
  return input.trim().split(' ').join('').split(' ')[0].replace(/,/g, ', ')
  };

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))
console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]))

