package com.ssafy.study.dto;

import java.util.Date;

public class dateDTO {
	private Long id;
	private Date todoDate;
	private String todoContent;

	public dateDTO(Long id, Date todoDate, String todoContent) {
		this.id = id;
		this.todoDate = todoDate;
		this.todoContent = todoContent;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getTodoDate() {
		return todoDate;
	}

	public void setTodoDate(Date todoDate) {
		this.todoDate = todoDate;
	}

	public String getTodoContent() {
		return todoContent;
	}

	public void setTodoContent(String todoContent) {
		this.todoContent = todoContent;
	}
}
