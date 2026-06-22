package DesignPrinciplePattern.exercise2;

public class PdfDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument(String fileName) {
        return new PdfDocument(fileName);
    }
}
