package com.library;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class DependencyInjectionApplication {

    public static void main(String[] args) {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService bookService = context.getBean(BookService.class);
        bookService.addBook(101, "Spring in Action");
        bookService.addBook(102, "Java Concurrency in Practice");

        System.out.println("Books loaded through XML DI:");
        for (Book book : bookService.getBooks()) {
            System.out.println(book);
        }

        context.close();
    }
}