package com.library;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LibraryService {

    private final BookRepository bookRepository;

    @Autowired
    public LibraryService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(int id, String title) {
        bookRepository.save(new Book(id, title));
    }

    public List<Book> getBooks() {
        return bookRepository.findAll();
    }
}