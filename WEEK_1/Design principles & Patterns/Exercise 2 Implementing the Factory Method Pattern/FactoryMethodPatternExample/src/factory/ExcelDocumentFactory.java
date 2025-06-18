package factory;

// factory/ExcelDocumentFactory.java
import document.Document;
import document.ExcelDocument;

public class ExcelDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new ExcelDocument();
    }
}
