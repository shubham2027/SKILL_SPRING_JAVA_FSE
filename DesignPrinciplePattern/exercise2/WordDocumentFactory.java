package DesignPrinciplePattern.exercise2;

public class WordDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument(String fileName) {
        return new WordDocument(fileName);
    }
}
