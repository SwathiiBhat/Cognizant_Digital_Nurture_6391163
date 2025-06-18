package factory;

//public class WordDocumentFactory {
//}
// factory/WordDocumentFactory.java
import document.Document;
import document.WordDocument;

public class WordDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}
