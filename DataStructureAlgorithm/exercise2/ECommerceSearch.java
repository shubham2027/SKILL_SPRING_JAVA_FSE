class Product {
    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
}


public class ECommerceSearch {

    // Linear Search
    public static Product linearSearch(Product[] products, String target) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(target)) {
                return product;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, String target) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            int comparison = products[mid].productName.compareToIgnoreCase(target);

            if (comparison == 0) {
                return products[mid];
            } else if (comparison < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Apple", "Electronics"),
            new Product(102, "Headphones", "Electronics"),
            new Product(103, "Laptop", "Electronics"),
            new Product(104, "Mouse", "Electronics"),
            new Product(105, "Phone", "Electronics")
        };

        String searchItem = "Laptop";

        Product result1 = linearSearch(products, searchItem);

        if (result1 != null) {
            System.out.println("Linear Search Found:");
            System.out.println(result1.productId + " " +
                               result1.productName + " " +
                               result1.category);
        }

        Product result2 = binarySearch(products, searchItem);

        if (result2 != null) {
            System.out.println("\nBinary Search Found:");
            System.out.println(result2.productId + " " +
                               result2.productName + " " +
                               result2.category);
        }
    }
}