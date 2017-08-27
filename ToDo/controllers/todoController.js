'use strict'
var app = angular.module('ToDo',[]);

app.controller('todoController',function(){
	var self = this;
	self.todoData = [{data: "Task1",done:true},{data:"Task2",done:false}];
	self.toDoLength = function (){
		return self.todoData.length;
	};
	self.remaining = function(){
		var count = 0;
		angular.forEach(self.todoData,function(todo){
			count += todo.done ? 0 : 1;
		});
		return count;
	};
	
	self.addTodo = function(){
		self.todoData.push({data: self.todoText,done:false});
		self.todoText ='';
	};
	
	self.archieve = function(){
			var oldTodos = self.todoData;
			self.todoData = [];
			angular.forEach(oldTodos,function(todo){
				if(!todo.done)self.todoData.push(todo);
			});
	};
});