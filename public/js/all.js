function addUser(){
            
    window.location.href = '/customers/add';
}


//Users Part
function addACIFMUser(){
            
    window.location.href = '/customers/add';
}
function cancelAdd(){
    
    window.location.href = '/surveys';
}

//Survey Part
function addSurvey(){
    window.location.href = '/surveys/add'
}

function editSurvey(id){
    window.location.href = '/surveys/edit/:' + id
}

function deleteSurvey(id){
    window.location.href = '/surveys/delete/:' + id
}

function confirmedLogin(){
    window.location.href = '/surveys';
}

function lineChanged(){
    var lineSelection = select.options[select.selectedIndex].value;

    if(lineSelection = 'Red'){
        console.log("Red")
    } else if (lineSelection = 'Green') {
        console.log("Green")
    } else {
        
    }
}