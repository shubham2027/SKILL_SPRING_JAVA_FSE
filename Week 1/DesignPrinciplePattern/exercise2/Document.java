package DesignPrinciplePattern.exercise2;

public abstract class Document {
    protected String fileName;

    public Document(String fileName) {
        this.fileName = fileName;
    }

    // Every document must know how to open, save, and print
    public abstract void open();
    public abstract void save();
    public abstract void print();

    public String getFileName() {
        return fileName;
    }
}
