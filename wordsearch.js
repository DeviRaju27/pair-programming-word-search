const wordSearch = (letters, word) => { 
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) {
       if (l.includes(word))  return true
   }
    const array = [];
    letters.forEach((input, i) => {          
      input.forEach((number, index) => {
        if (i === 0) {  
          array[index] = [number]; 
        } else {
          array[index].push(number);
        }
      });
    });
    let verticalJoin = array.map(ls => ls.join(''))
     for (let m of verticalJoin) {
       if (m.includes(word)) return true
   }
   return false;
  }

module.exports = wordSearch