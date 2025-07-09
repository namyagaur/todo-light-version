 const todoArr=[];
        function addTodo(){
            const displayElement = document.querySelector('.input-todo');
            let value = displayElement.value;
            todoArr.push(value);
            displayElement.value = '';
            displayingTodo();
        }

        function displayingTodo(){
            let todolist = '';
            let html = '';
            for(let i = 0; i<todoArr.length; i++){
                const currentTodo = todoArr[i];
                html = `<div class="todo-item">
                    <input type="checkbox" onchange="toggleStyle(this)">
                    <p class="task-text" style="
                        display:inline;">${currentTodo}
                        </p>
                        <button onclick="
                        todoArr.splice(${i},1);
                        displayingTodo();
                        ">delete</button>
                    </div>`;
                todolist +=html;
            }
            document.querySelector('.main-todo').innerHTML = todolist;
        }

        function toggleStyle(checkbox){
            const textStyle = checkbox.nextElementSibling;
            if(checkbox.checked){
                textStyle.style.textDecoration = 'line-through';
                textStyle.style.fontStyle = 'italic';
            }else{
                textStyle.style.textDecoration = 'none';
                textStyle.style.fontStyle = 'normal';
            }

        }
