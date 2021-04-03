Rails.configuration.stripe = {
    publishable_key: 'pk_test_51HbGBEE3hSvEQEMsT27MYIrZKVeiRZtnd1vsEUoXMdG9nrYv7QuVYgefWAckO4tIqUeCwAx85YSqhK6EDH1LvXfg00qXOyVSp1',
    secret_key: 'sk_test_51HbGBEE3hSvEQEMsvqACtuuzfeFsiYmw6Q6ttXxUpd26evoT09HB8AphtyH6R3qjEeMqA4AtAmrDZdv8UpfMOFUG00tgsURdsV'
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]