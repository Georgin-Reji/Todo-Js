var pendingList = document.getElementById("pendingListId")
var done = document.getElementById("doneListId");

// Hide and show

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

const addTask = (ev) => {
	ev.preventDefault();
	var taskTitle = document.getElementById("task-title").value;
	var taskDesc = document.getElementById("task-desc").value;

	if (taskTitle.trim().length == 0 && taskDesc.trim().length == 0) {
		alert("Add one task");
	} else {

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
		var descDiv = document.createTextNode(task.desc);

		subList.appendChild(checkbox);
		label.appendChild(titleDiv);
		para.appendChild(descDiv);
		subList.appendChild(label);
		subList.appendChild(para);
		del.appendChild(link);
		subList.appendChild(del);
		pendingList.appendChild(subList);

	//Moved to Done List

		checkbox.addEventListener('change',() => {

			if (checkbox.checked === false) {

				subList.appendChild(checkbox);
				label.appendChild(titleDiv);
				para.appendChild(descDiv);
				subList.appendChild(label);
				subList.appendChild(para);
				del.appendChild(link);
				subList.appendChild(del);
				pendingList.appendChild(subList);
			}
			else {
				subList.appendChild(checkbox);
				label.appendChild(titleDiv);
				para.appendChild(descDiv);
				subList.appendChild(label);
				subList.appendChild(para);
				del.appendChild(link);
				subList.appendChild(del);
				done.appendChild(subList);
			}
		})


		var deleteTask= (event) => {
			let removeEl = event.target.parentNode.parentNode;
			let parent = removeEl.parentNode;
			parent.removeChild(removeEl);
		}

		del.addEventListener('click', deleteTask)

	  document.querySelector('form').reset();
	}

	}



	document.getElementById('btn').addEventListener('click', addTask);