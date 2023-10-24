#!/usr/bin/env node

const args = process.argv
const command = args[2]
const fs = require('fs')



function main() {
	switch (command) {
		case '--help':
			showHelp()
			break

		case '--version':
		case '-v':
			showVersion()
			break

		// AQUÍ TU CÓDIGO PARA PROCESAR OTROS COMANDOS
		case '--taskList':
			getTasks()
			break
		case '--show':
			
			getTaskById(args[3])
			break
		
		default:
			console.log(args)
			console.error('comando no definido')
	}
}

main()

function showHelp() {
	console.log('Uso: task <comando>')
	console.log('')
	console.log('Comandos disponibles:')
	console.log('  new <task>: Crear una nueva tarea')
	console.log('  list: Listar todas las tareas')
	console.log('  show <taskId>: Obtener una tarea por su ID')
	console.log('  update <taskId> <taskBody>: Actualizar una tarea')
	console.log('  delete <taskId>: Eliminar una tarea')
	console.log('  clear: Eliminar todas las tareas')
}

function showVersion() {
	console.log('task v1.0.0')
}

function getTasks() {
	// AQUI TU CÓDIGO
	fs.readFile('./data.json', 'utf-8', (err, data) => {
		if(err){
			console.log('se ha producido un error');
		}
		console.log(data);
	} 
	
	)
}

function getTaskById(id) {
	// AQUI TU CÓDIGO
	console.log(id);
	fs.readFile('./data.json', 'utf-8', (err, id) => {
		if(err){
			console.log('se ha producido un error');
		}
		console.log(id);
	})
}


function saveData(newData) {
	// AQUI TU CÓDIGO
}

function createTask(body) {
	// AQUÍ TU CÓDIGO
}

function updateTask(id, body) {
	// AQUI TU CÓDIGO
}

function deleteTask(id) {
	//AQUÍ TU CÓDIGO
}

function clearTasks() {
	//AQUÍ TU CÓDIGO
}
