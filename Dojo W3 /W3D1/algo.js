function acronym(str) {
    var array = str.split(" ")
    var NewArr= []
    for(var i=0; i< array.length; i++){
        NewArr.push(array[i][0])
    }
    return NewArr.join("").toUpperCase()
}

console.log(acronym("there's no free lunch - gotta pay yer way"));