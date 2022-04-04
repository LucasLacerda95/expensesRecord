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
    const listTasks = JSON.parse(tasks);
    
    if(listTasks === null) return;//Se o Storage estiver limpo não gera erro...
    
    for(let task of listTasks){ 
      createExpense(task[0], task[1],task[2],task[3]);
    }
}
getStorage();




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



//Deleta as Li's a partir do botão de apagar
document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('img-trash')){
        const a = el.parentElement;
        const div = a.parentElement;
        div.parentElement.remove();
        removeItemStorage();
    };

});

function removeItemStorage(){
    localStorage.removeItem('tasks');
    getStorage();

}

