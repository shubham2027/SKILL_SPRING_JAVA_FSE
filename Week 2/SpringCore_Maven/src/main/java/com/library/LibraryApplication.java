package com.library;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class LibraryApplication {

    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        LibraryService libraryService = context.getBean(LibraryService.class);
        libraryService.addBook(1, "Clean Code");
        libraryService.addBook(2, "Effective Java");

        System.out.println("Library books:");
        for (Book book : libraryService.getBooks()) {
            System.out.println(book);
        }

        context.close();
    }
}