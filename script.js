

function addlist(){

    const itemTittle = document.querySelector('#tittle').value;

    

    if(itemTittle) {

        const boxList = document.querySelector('.list-box');
        const clone = boxList.cloneNode(true);

        clone.querySelector('.span-tittle').textContent = itemTittle;

        clone.classList.remove('hide');
        clone.classList.remove('spim');

        const list = document.querySelector('.section-list');

        list.appendChild(clone);

        //adicionar evento de remover 

        const removeBtn = clone.querySelector('.remove-btn').addEventListener('click',function(){

            removeClone(this);

        });


        //concluir tarefa

        const doneBtn = clone.querySelector('.done-btn').addEventListener('click',function(){

            completClone(this);

        });

        //limpar texto

        document.querySelector('#tittle').value = "";
        

    }


}

// função para remover list

function removeClone(task){
    task.parentNode.remove(true);

}

// função completar tarefa

function completClone (task){
    
    const taskComplet = task.parentNode;

    taskComplet.classList.toggle('spim');

}



const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener("click", function(e){


    e.preventDefault();
    addlist();

} );