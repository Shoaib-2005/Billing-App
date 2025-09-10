import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Alert,
  Text,
  View,
} from 'react-native';
import { Provider as PaperProvider, DefaultTheme, Card, TextInput, Button } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2196F3',
    accent: '#FF4081',
    background: '#F5F5F5',
    surface: '#FFFFFF',
    text: '#212121',
  },
};

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('1');
  const [taxRate, setTaxRate] = useState('10');
  const [discount, setDiscount] = useState('0');

  const addProduct = () => {
    if (!productName.trim()) {
      Alert.alert('Error', 'Please enter a product name');
      return;
    }

    const price = parseFloat(productPrice);
    const quantity = parseInt(productQuantity);

    if (isNaN(price) || price <= 0) {
      Alert.alert('Error', 'Please enter a valid price');
      return;
    }

    if (isNaN(quantity) || quantity <= 0) {
      Alert.alert('Error', 'Please enter a valid quantity');
      return;
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name: productName.trim(),
      price,
      quantity,
    };

    setProducts([...products, newProduct]);
    setProductName('');
    setProductPrice('');
    setProductQuantity('1');
  };

  const removeProduct = (id: string) => {
    Alert.alert(
      'Remove Product',
      'Are you sure you want to remove this product?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Remove', style: 'destructive', onPress: () => setProducts(products.filter(p => p.id !== id)) },
      ]
    );
  };

  const clearAllProducts = () => {
    Alert.alert(
      'Clear All Products',
      'Are you sure you want to remove all products?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Clear All', style: 'destructive', onPress: () => setProducts([]) },
      ]
    );
  };

  const subtotal = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  const taxAmount = (subtotal * parseFloat(taxRate)) / 100;
  const discountAmount = (subtotal * parseFloat(discount)) / 100;
  const total = subtotal + taxAmount - discountAmount;

  const generateInvoice = () => {
    if (products.length === 0) {
      Alert.alert('No Products', 'Please add at least one product before generating an invoice.');
      return;
    }

    let invoiceText = '=== INVOICE ===\n';
    invoiceText += `Date: ${new Date().toLocaleDateString()}\n`;
    invoiceText += `Invoice #: ${Date.now()}\n\n`;
    
    invoiceText += 'Products:\n';
    products.forEach((product, index) => {
      invoiceText += `${index + 1}. ${product.name}\n`;
      invoiceText += `   Price: $${product.price.toFixed(2)} x ${product.quantity} = $${(product.price * product.quantity).toFixed(2)}\n`;
    });
    
    invoiceText += '\n---\n';
    invoiceText += `Subtotal: $${subtotal.toFixed(2)}\n`;
    invoiceText += `Tax (${taxRate}%): $${taxAmount.toFixed(2)}\n`;
    invoiceText += `Discount (${discount}%): -$${discountAmount.toFixed(2)}\n`;
    invoiceText += `TOTAL: $${total.toFixed(2)}\n`;

    Alert.alert('Invoice Generated', invoiceText, [
      { text: 'OK' },
      { text: 'Copy', onPress: () => console.log('Invoice copied:', invoiceText) }
    ]);
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Card style={styles.headerCard} elevation={2}>
          <View style={styles.headerContent}>
            <Text style={styles.title}>Store Billing App</Text>
            <Text style={styles.subtitle}>Manage products and generate invoices</Text>
          </View>
        </Card>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <Card style={styles.card} elevation={2}>
            <Card.Content>
              <Text style={styles.sectionTitle}>Add Product</Text>
              
              <TextInput
                label="Product Name"
                value={productName}
                onChangeText={setProductName}
                style={styles.input}
                mode="outlined"
                placeholder="Enter product name"
              />
              
              <View style={styles.row}>
                <TextInput
                  label="Price"
                  value={productPrice}
                  onChangeText={setProductPrice}
                  style={[styles.input, styles.halfWidth]}
                  mode="outlined"
                  placeholder="0.00"
                  keyboardType="numeric"
                  left={<TextInput.Affix text="$" />}
                />
                
                <TextInput
                  label="Quantity"
                  value={productQuantity}
                  onChangeText={setProductQuantity}
                  style={[styles.input, styles.halfWidth]}
                  mode="outlined"
                  placeholder="1"
                  keyboardType="numeric"
                />
              </View>

              <Button
                mode="contained"
                onPress={addProduct}
                style={styles.addButton}
                contentStyle={styles.buttonContent}
              >
                Add Product
              </Button>
            </Card.Content>
          </Card>

          <Card style={styles.card} elevation={2}>
            <Card.Content>
              <View style={styles.header}>
                <Text style={styles.sectionTitle}>Products ({products.length})</Text>
                {products.length > 0 && (
                  <Button
                    mode="outlined"
                    onPress={clearAllProducts}
                    compact
                    textColor="#F44336"
                    buttonColor="transparent"
                  >
                    Clear All
                  </Button>
                )}
              </View>
              
              {products.length === 0 ? (
                <View style={styles.emptyState}>
                  <Text style={styles.emptyText}>No products added yet</Text>
                  <Text style={styles.emptySubtext}>Add products using the form above</Text>
                </View>
              ) : (
                products.map((product) => (
                  <View key={product.id} style={styles.productItem}>
                    <View style={styles.productInfo}>
                      <Text style={styles.productName}>{product.name}</Text>
                      <Text style={styles.productDetails}>
                        ${product.price.toFixed(2)} × {product.quantity} = ${(product.price * product.quantity).toFixed(2)}
                      </Text>
                    </View>
                    <Button
                      mode="outlined"
                      onPress={() => removeProduct(product.id)}
                      compact
                      textColor="#F44336"
                    >
                      Remove
                    </Button>
                  </View>
                ))
              )}
            </Card.Content>
          </Card>

          <Card style={styles.card} elevation={2}>
            <Card.Content>
              <Text style={styles.sectionTitle}>Invoice Summary</Text>
              
              <View style={styles.inputRow}>
                <TextInput
                  label="Tax Rate (%)"
                  value={taxRate}
                  onChangeText={setTaxRate}
                  style={styles.halfInput}
                  mode="outlined"
                  keyboardType="numeric"
                />
                
                <TextInput
                  label="Discount (%)"
                  value={discount}
                  onChangeText={setDiscount}
                  style={styles.halfInput}
                  mode="outlined"
                  keyboardType="numeric"
                />
              </View>
              
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Subtotal:</Text>
                <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
              </View>
              
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Tax ({taxRate}%):</Text>
                <Text style={styles.summaryValue}>${taxAmount.toFixed(2)}</Text>
              </View>
              
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Discount ({discount}%):</Text>
                <Text style={[styles.summaryValue, styles.discountValue]}>
                  -${discountAmount.toFixed(2)}
                </Text>
              </View>
              
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>TOTAL:</Text>
                <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
              </View>

              <Button
                mode="contained"
                onPress={generateInvoice}
                style={styles.generateButton}
                disabled={products.length === 0}
              >
                Generate Invoice
              </Button>
            </Card.Content>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerCard: {
    margin: 16,
    marginBottom: 8,
    backgroundColor: '#2196F3',
  },
  headerContent: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#E3F2FD',
    opacity: 0.9,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  halfInput: {
    flex: 0.48,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    flex: 0.48,
  },
  addButton: {
    marginTop: 8,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  productDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  discountValue: {
    color: '#4CAF50',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  generateButton: {
    marginTop: 8,
  },
});

export default App;