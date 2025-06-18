import model.Product;
import util.Search;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(105, "Pen", "Stationery"),
                new Product(101, "Laptop", "Electronics"),
                new Product(109, "Shirt", "Apparel"),
                new Product(102, "Phone", "Electronics"),
                new Product(107, "Book", "Stationery")
        };

        int targetId = 102;

        System.out.println("=== Linear Search ===");
        long start = System.nanoTime();
        Product res1 = Search.linearSearch(products, targetId);
        long end = System.nanoTime();
        System.out.println(res1 != null ? "Found: " + res1 : "Not found.");
        System.out.println("Time: " + (end - start) + " ns");

        System.out.println("\n=== Binary Search ===");
        Search.sortProductsById(products);
        start = System.nanoTime();
        Product res2 = Search.binarySearch(products, targetId);
        end = System.nanoTime();
        System.out.println(res2 != null ? "Found: " + res2 : "Not found.");
        System.out.println("Time: " + (end - start) + " ns");
    }
}
