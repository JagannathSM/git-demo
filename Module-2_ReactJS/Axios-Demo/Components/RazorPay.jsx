import React from 'react'

function RazorPay() {

    const handlePayment = async () => {
        const response = await fetch('http://localhost:3000/api/payment/create-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: 500 }), // Amount in INR
        });
    
        const order = await response.json();
    
        const options = {
          key: "rzp_test_rH4grrSuPDLyeO", // Replace with your test key ID
          amount: order.amount,
          currency: order.currency,
          name: 'Your Company Name',
          description: 'Test Transaction',
          order_id: order.id,
          handler: function (response) {
            alert(`Payment ID: ${response.razorpay_payment_id}`);
            alert(`Order ID: ${response.razorpay_order_id}`);
            alert(`Signature: ${response.razorpay_signature}`);
          },
          prefill: {
            name: 'Test User',
            email: 'test@example.com',
            contact: '9999999999',
          },
          theme: {
            color: '#3399cc',
          },
        };
    
        const rzp = new window.Razorpay(options);
        rzp.open();
      };


    return (
        <div className="App">
          <h1>Razorpay Test Payment</h1>
          <button onClick={handlePayment}>Pay Now</button>
        </div>
      );
    }

export default RazorPay

