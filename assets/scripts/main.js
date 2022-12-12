function toggleAddTask() {
	var form = document.querySelector(".formTask");
	var btn = document.getElementById("toggle-btn")
	if (form.style.display === "none") {
		form.style.display = "block";
		btn.style.backgroundColor = "#BA0F30";
		btn.innerHTML = "Close";
	}
	else {
		form.style.display = "none";
		btn.style.backgroundColor = "#9370DB";
		btn.innerHTML = "Add Task";
	}
}


// var list = document.createElement("div");
// var containerTask = document.querySelector(".pendingTask");
// list.className = "list";
// list.setAttribute("id","listId");
// containerTask.appendChild(list);

// let addTask = document.getElementById('btn');
// addTask.addEventListener('click', displayAddTask);

// //Add Tasks to pending status

// function displayAddTask(ev)  {
// 	ev.preventDefault();
// 	let taskTitle = document.getElementById('task-title').value;
// 	let taskDesc = document.getElementById('task-desc').value;
// 	let html = `<div class="card">
// 				<div id="checkStatusId" class="checklist"><input type="checkbox" id=""></div>
// 				<div class="title">${taskTitle}</div>
// 				<div class="description">${taskDesc}</div>
// 				<div class="div"><i id="btnDelete" class="fa-lg fa-solid fa-trash-can"></i></div>
// 				</div>`
// 	list.insertAdjacentHTML("beforeend", html);
// 	document.querySelector('form').reset();

// //Delete Task
// 	var del = document.getElementById('btnDelete');
// 	del.addEventListener('click', function () {
// 					let removeEl = this.parentNode.parentNode;
// 					let parent = this.parentNode.parentNode.parentNode;
// 					console.log(removeEl);
// 					console.log(parent);
// 					parent.removeChild(removeEl);
// 				})

// //Update Task status
// var status = document.getElementById('checkStatusId');
// status.addEventListener('change', function() {
// 			let removeEl = this.parentNode;
// 			// console.log(removeEl);
// 			if(!status.checked){
// 				status.setAttribute("checked",true);

// 				let containerDone = document.querySelector(".doneTask");
// 				// // console.log(containerDone);
// 				// console.log(list);
// 				// containerDone.appendChild(list);
// 				// list.insertAdjacentHTML("beforeend", removeEl);
// 				// removeEl.style.display = "none";

// 				// var doneList = document.createElement("div");
// 				// doneList.className = "subList";
// 				// doneList.id = "doneListId";
// 				// doneList.innerHTML = removeEl.innerHTML;
// 				// done.appendChild(doneList);
// 				// removeEl.style.display = "none";
// 			}
// 		})

// }

const addTask = (ev) => {
	ev.preventDefault();
	let task = {
		title: document.getElementById('task-title').value,
		desc: document.getElementById('task-desc').value
	}

	  	var subList = document.createElement("div");
		subList.className = "subList";
		subList.setAttribute("id","subListId");
		var checkbox = document.createElement("input");
		checkbox.type = 'checkbox';
		checkbox.setAttribute("id","checkId");
		var del = document.createElement("button");
		del.setAttribute('id','delBtnId');
		var link = document.createElement("link");
		link.className = "fa-lg fa-solid fa-trash-can";

		var label = document.createElement("label");
		var para = document.createElement("p");

		var titleDiv = document.createTextNode(task.title);
		var descDiv = document.createTextNode(task.desc)

		// document.getElementById("listId").appendChild(subList.firstChild);

		document.querySelector(".list").appendChild(subList);
		subList.appendChild(checkbox);
		label.appendChild(titleDiv);
		para.appendChild(descDiv);
		subList.appendChild(label);
		subList.appendChild(para);
		del.appendChild(link);
		subList.appendChild(del);

		// let checkId = document.getElementById("checkId");

		checkbox.addEventListener('change',() => {
			let removeEl = checkbox.parentNode;
			// console.log(removeEl);
			var check = document.getElementById("checkId");
			if(!checkId.checked){
				check.setAttribute("checked",true);
				console.log(check);
				let done = document.getElementById("doneListId");
				var doneList = document.createElement("div");
				doneList.className = "subList";
				doneList.id = "doneListId";
				doneList.innerHTML = removeEl.innerHTML;
				done.appendChild(doneList);
				removeEl.style.display = "none";
			}

			// this.HTMLDivElement.checked = true;

		})
		var deleteTask= () => {
			let removeEl = this.parentNode;
			let parent = this.parentNode.parentNode;
			// console.log(removeEl);
			parent.removeChild(removeEl);
		}

		del.addEventListener('click', deleteTask)

	  document.querySelector('form').reset();
	}

	document.getElementById('btn').addEventListener('click', addTask);