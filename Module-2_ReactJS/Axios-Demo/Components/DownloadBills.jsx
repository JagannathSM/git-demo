import React from 'react'
import { jsPDF } from 'jspdf';


function DownloadBills() {
    
const generateInvoice = (invoiceData) => {
    console.log("HELLO")
    const doc = new jsPDF();

    // Set title and company information
    doc.setFontSize(18);
    doc.text('INVOICE', 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Invoice Number: ${invoiceData.invoiceNumber}`, 20, 30);
    doc.text(`Invoice Date: ${invoiceData.invoiceDate}`, 20, 35);
    doc.text(`Company: ${invoiceData.sender.company}`, 20, 45);
    doc.text(`Address: ${invoiceData.sender.address}`, 20, 50);
    doc.text(`City: ${invoiceData.sender.city}`, 20, 55);

    // Set client information
    doc.text(`Client: ${invoiceData.client.company}`, 20, 65);
    doc.text(`Address: ${invoiceData.client.address}`, 20, 70);
    doc.text(`City: ${invoiceData.client.city}`, 20, 75);

    // Set product table
    let currentHeight = 85;
    doc.text('Products', 20, currentHeight);
    currentHeight += 5;
    invoiceData.products.forEach((product, index) => {
        doc.text(`${index + 1}. ${product.description}`, 20, currentHeight);
        doc.text(`Quantity: ${product.quantity}`, 120, currentHeight);
        doc.text(`Price: $${product.price}`, 160, currentHeight);
        currentHeight += 5;
    });

    // Save the PDF
    doc.save('invoice.pdf');
    console.log("BYEE")
};


// Example usage
const invoiceData = {
    "invoiceNumber": "2023.0001",
    "invoiceDate": "2023-01-01",
    "sender": {
        "company": "Sample Company",
        "address": "Sample Street 123",
        "city": "Sampletown",
    },
    "client": {
        "company": "Client Corp",
        "address": "Clientstreet 456",
        "city": "Clientcity",
    },
    "products": [
        {
            "quantity": "2",
            "description": "Product 1",
            "price": 33.87
        },
        {
            "quantity": "4",
            "description": "Product 2",
            "price": 10.45
        }
    ]
};


  return (
    <div>
      <button type='button' onClick={()=>generateInvoice(invoiceData)}>Download bills</button>
    </div>
  )
}

export default DownloadBills

