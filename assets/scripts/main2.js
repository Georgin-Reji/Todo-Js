var pendingList = document.querySelector(".pendingTask")
var done = document.getElementById("doneListId");
var list = document.querySelector(".list");
var arrayPending = [];
var arrayDone = [];



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
	var task = {
		title: document.getElementById('task-title').value,
		desc: document.getElementById('task-desc').value
	}

    arrayPending.push(task);
	var index = arrayPending.length - 1;
	listTasks(arrayPending, index);
	document.querySelector('form').reset();

	// //Task status update

	// var	taskStatus = document.getElementById(taskCheckId);
	// 	function checkStatus() {
	// 	//  if (taskStatus.checked ==true) {
	// 	// 	console.log("its working");
	// 	//  }

	// 	};

}

	function listTasks(array,i) {
			var taskDiv = `<div class="subList">
							<input type="checkbox" id="taskCheckId">
							<label>${array[i].title}</label>
							<p>${array[i].desc}</p>
							<button id="deleteBtn"}><link class="fa-lg fa-solid fa-trash-can"></button>
						</div>`
		console.log(array);
	list.insertAdjacentHTML('beforeend', taskDiv);
	}

	function removeTask(parent) {
		console.log(parent);
	}
	// 	checkbox.addEventListener('change',(event) => {
	// 	let removeEl = checkbox.parentNode;
	// 		var check = event.target;
	// 		if(check.checked) {
	// 			done.insertAdjacentHTML('beforeend',doneList);
	// 			pendingList.removeChild(removeEl);
	// 		}


	// 		var doneCheck = document.querySelector('.doneCheckId');
	// 		// console.log(doneCheck);
	// 		doneCheck.addEventListener('change', (ev) => {
	// 			var notDoneList = doneCheck.parentNode;
	// 			var unCheck = event.target;
	// 			pendingList.appendChild(notDoneList);
	// 			done.removeChild(notDoneList);
	// 		})
	// 	})

	// 	var deleteTask= (event) => {
	// 		let removeEl = event.target.parentNode.parentNode;
	// 		let parent = removeEl.parentNode;
	// 		parent.removeChild(removeEl);
	// 	}

	// 	del.addEventListener('click', deleteTask)

	//   document.querySelector('form').reset();


	document.getElementById('btn').addEventListener('click', addTask);