package factory;

//public class PdfDocumentFactory {
//}

// factory/PdfDocumentFactory.java
import document.Document;
import document.PdfDocument;

public class PdfDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
}
