class VideosController < ApplicationController
    def create 
        if params[:video]
            logger.debug(params[:video])
            video = Cloudinary::Uploader.upload(params[:video], :resource_type => :video)
            lesson_video = Video.create(lesson_id: params[:id], image: params[:image], video: video["url"], title: params[:title])
            render json: { lesson_video: lesson_video, video: video["url"]}
        else
            render json: { message: "Error"}
        end
    end

    def get
        videos = Video.where(lesson_id: params[:id])
        render json: videos
    end
end