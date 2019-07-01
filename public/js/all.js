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
