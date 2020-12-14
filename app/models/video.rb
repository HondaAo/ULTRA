class Video < ApplicationRecord
    mount_uploader :video, VideoUploader
    belongs_to :lesson
end
