
package com.library;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public class BookRepository {

    private final List<Book> books = new ArrayList<>();

    public void save(Book book) {
        books.add(book);
    }

    public List<Book> findAll() {
        return new ArrayList<>(books);
    }
}