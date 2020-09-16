export function debounce(func,delay = 300){
    let timer = undefined
    return function(){
      if(timer) clearTimeout(timer)
      timer = setTimeout(()=>{
        func()
      },delay)
    }
  }