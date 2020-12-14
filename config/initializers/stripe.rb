Rails.configuration.stripe = {
    publishable_key: 'pk_test_51HbGBEE3hSvEQEMsT27MYIrZKVeiRZtnd1vsEUoXMdG9nrYv7QuVYgefWAckO4tIqUeCwAx85YSqhK6EDH1LvXfg00qXOyVSp1',
    secret_key: ''
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]