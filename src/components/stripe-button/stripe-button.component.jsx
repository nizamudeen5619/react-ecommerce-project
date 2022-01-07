import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100
    const publishableKey='pk_test_51KFA1hSFbqxlbPZKELuWqLo3zJLl6yLc8f1ii4gbmjAxuQiB3QRUJGT5YjUR8rMiDIjyS0yxCEDniHPLEmc6PsD200DgHtWhwX'

    const onToken=token=>{
        console.log(token);
        alert("Payment Succesfull")
    }
        
    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://i.postimg.cc/43sVfMJC/crown.png"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
//https://github.com/azmenak/react-stripe-checkout
export default StripeCheckoutButton