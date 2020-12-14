class CoursesController < ApplicationController
    
    def get_course
        course = Course.find(params[:id])
        render json: { course: course}
    end
end