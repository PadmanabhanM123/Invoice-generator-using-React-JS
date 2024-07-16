import React, { useContext } from 'react';
import jsPDF from 'jspdf';
import { InvoiceContext } from '../Context/InvoiceContext';

const PDFDownloader = ({ calculateGrandTotal }) => {
  const { invoice } = useContext(InvoiceContext);

  const handleDownload = () => {
    const doc = new jsPDF();
    let yOffset = 10;

    doc.setFontSize(18);
    doc.text('Invoice', 15, yOffset);
    yOffset += 10;

    if (invoice.details) {
      doc.setFontSize(12);
      doc.text(`Client: ${invoice.details.clientName || 'N/A'}`, 15, yOffset);
      yOffset += 10;
      doc.text(`Date: ${invoice.details.date || 'N/A'}`, 15, yOffset);
      yOffset += 10;
    }

    if (invoice.items && invoice.items.length > 0) {
      doc.setFontSize(12);
      invoice.items.forEach((item, index) => {
        const totalAmount = item.quantity * item.amount;
        doc.text(`${item.description || 'No Description'}: ${totalAmount.toFixed(2)}`, 15, yOffset);
        yOffset += 10;
      });

      // Calculate and display grand total
      const grandTotal = calculateGrandTotal();
      doc.setFontSize(14);
      doc.text(`Grand Total: ${grandTotal.toFixed(2)}`, 15, yOffset + 10);
    } else {
      doc.setFontSize(12);
      doc.text('No items added.', 15, yOffset);
    }

    doc.save('invoice.pdf');
  };

  return (
    <button className='pdf' onClick={handleDownload}>
      Download PDF
    </button>
  );
};

export default PDFDownloader;

