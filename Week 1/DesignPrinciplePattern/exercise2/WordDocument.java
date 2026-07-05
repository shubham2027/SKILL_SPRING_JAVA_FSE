package DesignPrinciplePattern.exercise2;

public class WordDocument extends Document {
    public WordDocument(String fileName) {
        super(fileName);
        System.out.println("  Created Word document: " + fileName);
    }

    @Override
    public void open() {
        System.out.println("  Opening Word: " + fileName);
    }

    @Override
    public void save() {
        System.out.println("  Saving Word: " + fileName);
    }

    @Override
    public void print() {
        System.out.println("  Printing Word: " + fileName);
    }
}