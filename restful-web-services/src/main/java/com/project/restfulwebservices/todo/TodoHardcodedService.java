package com.project.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	private static List<Todo> todos = new ArrayList<>();

	private static int idCounter = 0;

	static {
		todos.add(new Todo(++idCounter, "a", "Learn React", new Date(), false));
		todos.add(new Todo(++idCounter, "a", "Learn Spring Boot", new Date(), false));
	}

	public List<Todo> findAll(String user) {
		return todos;
	}

	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if (todo == null) return null;
		todos.remove(todo);
		return todo;
	}

	public Todo findById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}

}
