const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { items, shippingCost, customerEmail, customerName } = JSON.parse(event.body);

        const lineItems = items.map(item => {
            const name = typeof item.name === 'object'
                ? (item.name.en || item.name.cz || Object.values(item.name)[0])
                : item.name;
            return {
                price_data: {
                    currency: 'eur',
                    product_data: { name: `${name} (Ø${item.diameter})` },
                    unit_amount: Math.round(item.price * 100),
                },
                quantity: item.quantity,
            };
        });

        if (shippingCost > 0) {
            lineItems.push({
                price_data: {
                    currency: 'eur',
                    product_data: { name: 'Shipping / Doprava' },
                    unit_amount: Math.round(shippingCost * 100),
                },
                quantity: 1,
            });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            customer_email: customerEmail,
            success_url: 'https://eshop.navalo.eu/success.html?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'https://eshop.navalo.eu/checkout.html',
            metadata: { customerName },
        });

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: session.url }),
        };
    } catch (error) {
        console.error('Stripe error:', error);
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: error.message }),
        };
    }
};
