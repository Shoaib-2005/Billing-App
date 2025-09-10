# Store Billing App

A comprehensive billing application for stores to manage products, calculate totals, and generate professional invoices. Available as both a React Native mobile app and a standalone HTML website.

## 🌟 Features

### Core Functionality
- ✅ **Product Management**: Add, edit, and remove products with name, price, and quantity
- ✅ **Real-time Calculations**: Automatic calculation of subtotal, taxes, discounts, and total
- ✅ **Invoice Generation**: Professional invoice display with detailed breakdown
- ✅ **Data Persistence**: Automatic local storage using browser localStorage
- ✅ **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### Advanced Features
- ✅ **Tax Calculations**: Customizable tax rate percentage
- ✅ **Discount System**: Apply percentage-based discounts
- ✅ **Print Functionality**: Print invoices directly from the browser
- ✅ **Input Validation**: Comprehensive error handling and validation
- ✅ **Confirmation Dialogs**: Safe product removal with user confirmations
- ✅ **Modern UI**: Clean, professional interface with Material Design principles

## 🚀 Quick Start

### Option 1: HTML Website (Recommended for immediate use)
1. Download the `index.html` file
2. Open it in any web browser
3. Start using the billing app immediately!

### Option 2: React Native Mobile App
1. Clone this repository
2. Install dependencies: `npm install`
3. Run on Android: `npm run android`
4. Run on iOS: `npm run ios`
5. Run on Web: `npm run web`

## 📱 Screenshots

The app features a modern, clean interface with:
- Blue-themed header with professional branding
- Card-based layout for better organization
- Intuitive product management with real-time calculations
- Professional invoice display with detailed breakdowns

## 🛠️ Technology Stack

### HTML Website Version
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with Material Design principles
- **Storage**: Browser localStorage for data persistence
- **Responsive**: Mobile-first responsive design

### React Native Version
- **Framework**: React Native 0.79.5
- **UI Library**: React Native Paper (Material Design)
- **State Management**: React Hooks (useState, useEffect)
- **Storage**: AsyncStorage for local data persistence
- **Language**: TypeScript for type safety

## 📋 Usage Guide

### Adding Products
1. Enter product name in the "Product Name" field
2. Set the price (supports decimal values)
3. Set the quantity (defaults to 1)
4. Click "Add Product" to add to the list

### Managing Products
- **View Products**: All added products are displayed with their details
- **Remove Product**: Click "Remove" button to delete individual products
- **Clear All**: Use "Clear All" button to remove all products at once

### Invoice Generation
1. Set tax rate percentage (default: 10%)
2. Set discount percentage (default: 0%)
3. Review the calculated totals in real-time
4. Click "Generate Invoice" to create a professional invoice
5. Print or share the invoice as needed

### Data Persistence
- All data is automatically saved locally
- Products, tax rate, and discount settings persist between sessions
- No internet connection required for basic functionality

## 🔧 Installation & Setup

### For HTML Website
No installation required! Simply open `index.html` in any modern web browser.

### For React Native Development

#### Prerequisites
- Node.js (v16 or higher)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

#### Installation Steps
```bash
# Clone the repository
git clone https://github.com/Shoaib-2005/Billing-App.git
cd Billing-App

# Install dependencies
npm install

# For iOS (macOS only)
cd ios && pod install && cd ..

# Run the application
npm run android  # For Android
npm run ios      # For iOS
npm run web      # For Web
```

## 📁 Project Structure

```
Billing-App/
├── index.html              # Standalone HTML website
├── App.tsx                 # Main React Native application
├── src/
│   ├── components/         # React Native components
│   │   ├── Header.tsx
│   │   ├── ProductForm.tsx
│   │   ├── ProductList.tsx
│   │   └── InvoiceSummary.tsx
│   └── types/
│       └── index.ts        # TypeScript type definitions
├── android/                # Android-specific files
├── ios/                    # iOS-specific files
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🎯 Key Components

### HTML Website
- **Single File**: Complete application in one HTML file
- **Self-contained**: No external dependencies required
- **Cross-platform**: Works on any device with a web browser
- **Offline Capable**: Functions without internet connection

### React Native App
- **Header Component**: App branding and navigation
- **Product Form**: Input form with validation
- **Product List**: Management interface with controls
- **Invoice Summary**: Calculations and invoice generation

## 🔮 Future Enhancements

### Planned Features
- [ ] **PDF Export**: Generate PDF invoices for printing
- [ ] **Cloud Storage**: Firebase integration for data sync
- [ ] **Email Sharing**: Send invoices via email
- [ ] **Inventory Management**: Track product stock levels
- [ ] **User Authentication**: Multi-user support for store staff
- [ ] **Advanced Analytics**: Sales reports and insights
- [ ] **Barcode Scanning**: Add products by scanning barcodes
- [ ] **Multi-language Support**: Internationalization

### UI/UX Improvements
- [ ] **Dark Mode**: Theme switching capability
- [ ] **Animations**: Smooth transitions and micro-interactions
- [ ] **Customization**: Store branding and color themes
- [ ] **Accessibility**: Screen reader support and accessibility features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Shoaib**
- GitHub: [@Shoaib-2005](https://github.com/Shoaib-2005)

## 🙏 Acknowledgments

- Material Design principles for UI inspiration
- React Native community for excellent documentation
- Expo team for the amazing development platform

## 📞 Support

For support and questions, please create an issue in the project repository or contact the author.

---

**Built with ❤️ for store owners and businesses**

⭐ Star this repository if you find it helpful!
