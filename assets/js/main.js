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




/*-------------------------------------------------------------------------*/
//Captura o evento de click do botão, faz uma verificação simples e chama a funçao.
btnFooterSidebar.addEventListener('click', function(e){
    if(!releaseName.value) return;
    if(!inputValue.value) return;
    if(!inputDate.value) return;
    if(!typeSelect.value) return;
    
    createExpense(releaseName.value, inputValue.value, inputDate.value, typeSelect.value);
    cleanInput();
});

/*-------------------------------------------------------------------------*/

function cleanInput(){
    releaseName.value = '';
    inputDate.value = '';
    inputValue.value = '';
    typeSelect.value = '';
    releaseName.focus();
};

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('img-trash')){
        const a = el.parentElement;
        const div = a.parentElement;
        div.parentElement.remove();
    };
});