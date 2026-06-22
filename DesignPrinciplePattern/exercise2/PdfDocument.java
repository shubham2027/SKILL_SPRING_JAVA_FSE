package DesignPrinciplePattern.exercise2;

public class PdfDocument extends Document {
    public PdfDocument(String fileName) {
        super(fileName);
        System.out.println("  Created PDF document: " + fileName);
    }

    @Override
    public void open() {
        System.out.println("  Opening PDF: " + fileName);
    }

    @Override
    public void save() {
        System.out.println("  Saving PDF: " + fileName);
    }

    @Override
    public void print() {
        System.out.println("  Printing PDF: " + fileName);
    }
}