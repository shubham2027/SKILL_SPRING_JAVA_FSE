# Singleton Solution

### Logger class:
- private static Logger instance – holds the single instance.

- private Logger() – prevents external instantiation.

- public static Logger getInstance() – returns the instance (creates it only once).


### Test class:
- Calls getInstance() multiple times.

- Verifies all references point to the same object using ==.


# Factory Method pattern

### Solution
We have abstract `Document` class that defines the `open()`, `save()`, `print()`.
Three concrete class: `WordDocument`, `PdfDocument`, `ExcelDocument`.


We also have an abstract `DocumentFactory` with a `createDocument()` method.
Three concrete factories: `WordDocumentFactory`, `PdfDocumentFactory`, `ExcelDocumentFactory` – each returns the corresponding document type.

The test class creates documents using the factories and verifies the types.