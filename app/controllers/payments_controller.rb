class PaymentsController < ApplicationController
   def create

      token = params[:token]
      plan = params[:plan]
      user_id = params[:id]
      charge = params[:charge]
      email = params[:email]
      product = params[:product]

      customer = Stripe::Customer.create(
         :source => token,
         :email => email,
      )
       payment = Payment.new(
          email: email,
          user_id: user_id,
          token: token
      )
      payment.save
      customer_id = customer.id
   
       Stripe::Subscription.create(
        customer: customer_id,
        plan: plan
       )

      current_user.status = product
      if current_user.save
         render json: { payment: payment, user: current_user}
      end
   end 
   def get_info
      customer = Stripe::Customer.retrieve(params[:id])
      subscription = Stripe::Subscription.retrieve(customer.subscriptions.data[0].id)
      render json: { subsc_info: subscription}
   end
end