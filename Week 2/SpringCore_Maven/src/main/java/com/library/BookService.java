package com.library;

import java.util.List;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(int id, String title) {
        bookRepository.save(new Book(id, title));
    }

    public List<Book> getBooks() {
        return bookRepository.findAll();
    }
}