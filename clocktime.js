function formatDuration (seconds) {
    let arr = []
    let hours = 0
    let days = 0
    let years = 0


    if(seconds === 0) return 'now'
    let minutes = seconds/= 60
    seconds = (seconds % 1)
    minutes -= seconds
    seconds= Math.round(seconds*60)

    if(minutes >= 60){
       hours  = minutes /= 60
        minutes = (minutes % 1)
        hours -= minutes
        minutes = Math.round(minutes*60)
    }
   
    if(hours >= 24){
        days = hours /= 24
        hours = (hours % 1)
        days -= hours
        hours = Math.round(hours*24)
    }
   
    if(days >= 365){
        years = days /= 365
        days = (days % 1)
        years -= days
        days = Math.round(days*365)
    }
  
    let time = {"second":seconds,"minute": minutes, "hour":hours, "day":days, "year":years}
    let keys = Object.keys(time)
    let values = Object.values(time)

   
    for(let i = 0; i < keys.length; i++){ 
        if(values[i] > 1) keys[i] +='s';
    }

    for(let i = keys.length-1; i >= 0; i--){
        if(values[i] != 0)  arr.push(`${values[i]} ${keys[i]}`)
    }

    if(arr.length == 1) return arr[0];
    else if(arr.length == 2) return arr.join(' and ')
    else {
        arr = arr.join(', ')
        let last = arr.lastIndexOf(',')
        let newArr = arr.split('')
        newArr.splice(last,1," and")
    return newArr.join('')
    }
    
  }
  
  console.log(formatDuration(3600))
