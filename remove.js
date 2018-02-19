function removeVowels(str){
    if(str.length === 0) return

    // if(str.indexOf(str[0]) === `a`)
    return(`aeiouAEIOU`.indexOf(str[0]) > -1) ? ""+removeVowels(str.slice(1)) : str[0]+removeVowels(str.slice(1))
    
    
    
}