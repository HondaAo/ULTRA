class UsersController < ApplicationController
    def mylessons
        @lessons = current_user.lessons
        render json: { lessons: @lessons }
    end
    def register
        lesson = Lesson.find(params[:id])
        current_user.lessons.push(lesson)
        if current_user.save
            render json: { message: "Successfully registered!!", user: current_user}
        end
    end
    def get_user
        user = User.find(params[:id])
        render json: { user: user }
    end
end