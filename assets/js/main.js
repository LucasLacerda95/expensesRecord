const releaseName = document.querySelector('.input-releaseName');
const inputValue = document.querySelector('.input-value');
const inputDate = document.querySelector('.input-date');
const btnFooterSidebar = document.querySelector('.btn-footer-sidebar');
const typeSelect = document.querySelector('.type-select');
const listReleasesMain = document.querySelector('.list-releases-main');
const liContainer = document.querySelector('.li-container');
const formSidebar = document.querySelector('.sidebad-inputs');
let listaDeTarefas = [];



//Desativa o envio do formulário.
formSidebar.onsubmit = function(event){
    event.preventDefault(); 
};

//Verifica se existe algum registro no storage e exibe na tela
function getStorage(){
    const tasks = localStorage.getItem('tasks');
    const list = JSON.parse(tasks);
    
    if(list === null) return;//Se o Storage estiver limpo não gera erro...

    createLiStorage(list);
};


getStorage();//Recria os List's com base no storage.
//Captura o evento de click do botão, faz uma verificação simples e chama a funçao.

btnFooterSidebar.addEventListener('click', function(){
    if(!releaseName.value) return;
    if(!inputValue.value) return;
    if(!inputDate.value) return;
    if(!typeSelect.value) return;
    
    //Recebe a data em string e altera para o formato padrão..
    const parseInputDate = new Date(inputDate.value).toLocaleDateString('pt-BR', {
        timeZone: 'UTC'
    });
    
    //Recebe o valor em forma de string, converte para float e coloca no modo currency.
    const parseInputValue = parseFloat(inputValue.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    //createBalance(inputValue.value, typeSelect.value);
    createExpense(releaseName.value, parseInputValue, parseInputDate, typeSelect.value);
    window.location.reload();
    cleanInput();
});

getItemTask();

function excluiLi(item){     
        const a = item.parentElement;
        a.parentElement.remove();
}

function getItemTask(){
    let nodeList = document.querySelectorAll('.img-trash');
    
    nodeList.forEach((item,index,array) => {
        item.addEventListener('click',function(e){
            window.location.reload();
            deleteTasksStorage(index);
            window.location.reload();
            excluiLi(item);
        })
    });
};

//Renderiza os elementos na tela a partir do que foi verificado com o getStorage.
function createLiStorage(list){
    
    for(const task of list){ 
        if(list===null || task ===null) return;
        createExpense(task[0], task[1],task[2],task[3]);
    }
};
