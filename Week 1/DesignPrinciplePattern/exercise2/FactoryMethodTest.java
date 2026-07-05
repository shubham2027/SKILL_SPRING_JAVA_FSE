package DesignPrinciplePattern.exercise2;

public class FactoryMethodTest {
    public static void main(String[] args) {
        System.out.println("Factory Method Pattern Demo\n");

        // Create the factories
        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

        // Use the factories to create documents
        System.out.println("Creating Word document:");
        Document wordDoc = wordFactory.createDocument("Report.docx");
        wordDoc.open();
        wordDoc.save();
        wordDoc.print();

        System.out.println("\nCreating PDF document:");
        Document pdfDoc = pdfFactory.createDocument("Manual.pdf");
        pdfDoc.open();
        pdfDoc.save();
        pdfDoc.print();

        System.out.println("\nCreating Excel document:");
        Document excelDoc = excelFactory.createDocument("Budget.xlsx");
        excelDoc.open();
        excelDoc.save();
        excelDoc.print();

        // Verification 
        System.out.println("\nVerification");
        System.out.println("wordDoc is WordDocument? " + (wordDoc instanceof WordDocument));
        System.out.println("pdfDoc is PdfDocument?   " + (pdfDoc instanceof PdfDocument));
        System.out.println("excelDoc is ExcelDocument? " + (excelDoc instanceof ExcelDocument));
    }
}


/*
FactoryMethodTest never uses new with concrete class,
it only talks to abstract DocumentFactory and Document classes.

The factory then decide which concrete class to instantiate.


//output

Factory Method Pattern Demo

Creating Word document:
  Created Word document: Report.docx
  Opening Word: Report.docx
  Saving Word: Report.docx
  Printing Word: Report.docx

Creating PDF document:
  Created PDF document: Manual.pdf
  Opening PDF: Manual.pdf
  Saving PDF: Manual.pdf
  Printing PDF: Manual.pdf

Creating Excel document:
  Created Excel document: Budget.xlsx
  Opening Excel: Budget.xlsx
  Saving Excel: Budget.xlsx
  Printing Excel: Budget.xlsx

Verification
wordDoc is WordDocument? true
pdfDoc is PdfDocument?   true
excelDoc is ExcelDocument? true













*/