package DesignPrinciplePattern.exercise2;

public abstract class DocumentFactory {
    // Factory method – to be implemented by concrete factories
    public abstract Document createDocument(String fileName);
}
