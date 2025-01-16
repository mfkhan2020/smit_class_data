
let container = document.getElementById("container");
// let user_inp = document.createElement("input");
// user_inp.setAttribute("type", "text");
// user_inp.setAttribute("placeholder", "Enter your task");
// user_inp.setAttribute("id", "inp1");
// user_inp.setAttribute("class", "input1")
// container.appendChild(user_inp);

// let add_btn = document.createElement("button");
// add_btn.setAttribute("class", "add_btn");
// add_btn.setAttribute("type", "submit");
// add_btn.setAttribute("onclick", "todo_app()");
// container.appendChild(add_btn);



let list_div = document.createElement("div");
list_div.setAttribute("class", "list_div");
container.appendChild(list_div);

function todo_app() {
    let input_data = document.getElementById("inp1").value;
    if (input_data === ""){
        alert("Please Enter Task To Add!");
        return;
    }

    let edit_btn = document.createElement("button");
    edit_btn.setAttribute("class", "edit_btn");
    edit_btn.onclick = function () {
        let new_edited_input = prompt("Edit Your Task", input_data);
        if (new_edited_input !== null || new_edited_input !== "") {
            li_4_div.textContent = new_edited_input;
            li_4_div.appendChild(edit_btn);
            li_4_div.appendChild(del_btn);
        }
    }

    let del_btn = document.createElement("button");
    del_btn.setAttribute("class", "del_btn");
    del_btn.onclick = function () {
        list_div.removeChild(li_4_div);
    }


    let li_4_div = document.createElement("li");
    
    li_4_div.textContent = input_data;
    
    list_div.appendChild(li_4_div);
    li_4_div.appendChild(edit_btn);
    li_4_div.appendChild(del_btn);
}


user_inp.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        todo_app();
    }
});
