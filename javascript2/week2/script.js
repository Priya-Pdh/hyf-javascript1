fetch("https://www.breakingbadapi.com/api/characters")
   .then(res => res.json())
   .then(data =>
      console.log(data)
      /*
      before you start, make sure to change the script src  in index.html
      to this file src = "objects.js"
      Do you code here
      put yourself some challenges and try to acheive them
      use console logs to see your results
       */
   )