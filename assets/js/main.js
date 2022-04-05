const releaseName = document.querySelector('.input-releaseName');
const inputValue = document.querySelector('.input-value');
const inputDate = document.querySelector('.input-date');
const btnFooterSidebar = document.querySelector('.btn-footer-sidebar');
const typeSelect = document.querySelector('.type-select');
const listReleasesMain = document.querySelector('.list-releases-main');
const liContainer = document.querySelector('.li-container');
const formSidebar = document.querySelector('.sidebad-inputs');


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
  
    cleanInput();
    
});




function excluiLi(){
    document.addEventListener('click', function(e){
        const el = e.target;

        if(el.classList.contains('img-trash')){
        const a = el.parentElement;
        a.parentElement.remove();
        }
    });
}

function getItemTask(){
    let nodeList = document.querySelectorAll('.img-trash');
    //console.log(nodeList);
    nodeList.forEach((item,index,array) => {
        item.addEventListener('click',function(e){
            excluiItemStorage(index);
            
        })
    });
};

function excluiItemStorage(index){
    if(index === null) return;
    if(index === undefined) return;
    console.log(index)
    const tasks = localStorage.getItem('tasks');
    const list = JSON.parse(tasks);
    delete list[index];
    
    const newList = list.filter(function(i){
        return i;//Retira espaço vazio
    });

    console.log(newList);
    
    const tarefasJSON = JSON.stringify(newList);
    localStorage.setItem(`tasks`, tarefasJSON);
}


//Renderiza os elementos na tela a partir do que foi verificado com o getStorage.
function createLiStorage(list){
    for(const task of list){ 
        createExpense(task[0], task[1],task[2],task[3]);
    }
};

getStorage();//Recria os List's com base no storage.
getItemTask();//Varre os elementos e retorna o seus indices.
excluiItemStorage();//Vai no Storage e exclui o elemento respectivo.
excluiLi();//Exclui o List quando clico no elemento img-trash.
