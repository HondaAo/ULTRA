class RegistrationsController < ApplicationController

    def signup
        @user = User.new(registrations_params)

        if @user.save
            login!
            render json: { status: :created, user: @user, message: "Successfully registered!" }
        else
            render json: { status: 500, message: "Please check your inputs" }
        end
    end

    private

        def registrations_params
            params.permit(:username, :email, :password, :password_confirmation)
        end

end