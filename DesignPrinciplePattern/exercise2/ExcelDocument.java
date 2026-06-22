package DesignPrinciplePattern.exercise2;

public class ExcelDocument extends Document {
    public ExcelDocument(String fileName) {
        super(fileName);
        System.out.println("  Created Excel document: " + fileName);
    }

    @Override
    public void open() {
        System.out.println("  Opening Excel: " + fileName);
    }

    @Override
    public void save() {
        System.out.println("  Saving Excel: " + fileName);
    }

    @Override
    public void print() {
        System.out.println("  Printing Excel: " + fileName);
    }
}