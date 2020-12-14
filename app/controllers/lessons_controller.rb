class LessonsController < ApplicationController

    def create
        @lesson = Lesson.new(lesson_params)
        if @lesson.save
            render json: { message: 'Created!', lesson: @lesson}
        end
    end

    def get_lessons
        lessons = Lesson.all
        render json: { lessons: lessons }
    end

    def get_lesson
        lesson = Lesson.find(params[:id])
        render json: { lesson: lesson }
    end

    def search
       lessons = Lesson.search(params[:param])
       if lessons
         render json: { lessons: lessons, message: "#{lessons.count} lessons are available."}
       else
         render json: { message: "No lecture exists", lessons: nil }
       end
    end
    private
    def lesson_params
        params.permit(:title, :description, :image)
    end
end