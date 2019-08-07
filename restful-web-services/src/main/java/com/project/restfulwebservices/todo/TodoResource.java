package com.project.restfulwebservices.todo;

import java.net.URI;
import java.util.List;
import com.project.restfulwebservices.todo.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins="http://localhost:4204")
public class TodoResource {

	@Autowired
	private TodoHardcodedService todoService;

	@GetMapping("/users/{user}/todos")
	public List<Todo> getAllTodos(@PathVariable String user) {
		return todoService.findAll(user);
	}
	
	@GetMapping("/users/{user}/todos/{id}")
	public Todo getTodo(@PathVariable String user, @PathVariable long id) {
		return todoService.findById(id);
	}
	
	@DeleteMapping("/users/{user}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String user, @PathVariable long id) {
		Todo todo = todoService.deleteById(id);
		if (todo != null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping("/users/{user}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String user, @PathVariable long id, 
			@RequestBody Todo todo) {
		Todo updatedTodo = todoService.save(todo);
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	@PostMapping("/users/{user}/todos")
	public ResponseEntity<Todo> updateTodo(@PathVariable String user, 
			@RequestBody Todo todo) {
		Todo createdTodo = todoService.save(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("{id}")
		.buildAndExpand(createdTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
		
}
