//////////////////////////////
//////////////////////////////
///// pratical challenge /////
//////////////////////////////
//////////////////////////////

let count = 0
let count_element = document.getElementById('conter')
function incrementCount(){
    count += 1;
    count_element.innerHTML = count    
}

function decrementCount(){
    if(count <= 0){

    }else{
        count -=1
    }    
    count_element.innerHTML = count 
}

function save(){
    let entries = document.getElementById('entries')
    entries.innerHTML += " -"+count
    count = 0
    count_element.innerHTML = 0
}
