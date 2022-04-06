
function createLi(){
    const li = document.createElement('li');
    li.classList.add('li-container');
    return li;
}

function createButtonDelete(){
    const buttonDelete = document.createElement('div');
    buttonDelete.classList.add('btn-span-li-container');
    buttonDelete.classList.add('li-container-item');
    return buttonDelete;
}

function createReleaseName(){
    const containerNameRelease = document.createElement('div');
    containerNameRelease.classList.add('name-span-li-container');
    containerNameRelease.classList.add('li-container-item');
    return containerNameRelease;
}

function createDate(){
    const date = document.createElement('div');
    date.classList.add('date-span-li-container');
    date.classList.add('li-container-item');
    return date;
}

function createType(){
    const type = document.createElement('div');
    type.classList.add('type-span-li-container');
    type.classList.add('li-container-item');
    return type;
}

function createValue(){
    const value = document.createElement('div');
    value.classList.add('value-span-li-container');
    value.classList.add('li-container-item');
    return value;
}


function createP(){
    const p = document.createElement('p');
    return p;
}


function createExpense(releaseName, inputValue, inputDate, typeSelect){
    const li = createLi();
    const pName = createP();
    const pDate = createP();
    const pType = createP();
    const pValue = createP();
    const contentButton = '<img src="assets/icons/icons8-lixo.svg" class="img-trash">';

    pName.innerText = releaseName;
    pDate.innerText = inputDate;
    pType.innerText = typeSelect;
    pValue.innerText = inputValue;

    const containerNameRelease = createReleaseName();
    const date = createDate();
    const type = createType();
    const value = createValue();
    const buttonDelete = createButtonDelete();
    buttonDelete.innerHTML = contentButton;

    listReleasesMain.appendChild(li);

    li.appendChild(buttonDelete);
    li.appendChild(containerNameRelease);
    li.appendChild(date);
    li.appendChild(type);
    li.appendChild(value);


    containerNameRelease.appendChild(pName);
    date.appendChild(pDate);
    type.appendChild(pType);
    value.appendChild(pValue);
    
    saveTasks(releaseName, inputValue, inputDate, typeSelect);
}

function deleteTasksStorage(index){

    delete listaDeTarefas[index];
    console.log(listaDeTarefas);
    const newListTarefas = listaDeTarefas.filter(function(i){
        return i;//Retira espaço vazio do array
    });

    listaDeTarefas = newListTarefas;
    console.log(listaDeTarefas);

    sendItensStorage(listaDeTarefas);
    
}

function saveTasks(releaseName, inputValue, inputDate, typeSelect){
    const itens = [releaseName,inputValue,inputDate,typeSelect];

       listaDeTarefas.push(itens);
       
       sendItensStorage(listaDeTarefas);
};

//limpa o imput após o clique..
function cleanInput(){
    releaseName.value = '';
    inputDate.value = '';
    inputValue.value = '';
    typeSelect.value = '';
};

//Converte array em JSON e envia para o Storage..
function sendItensStorage(list){
    if(list === undefined) return;
    const tarefasJSON = JSON.stringify(list);
    localStorage.setItem(`tasks`, tarefasJSON);
}


