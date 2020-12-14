class Lesson < ApplicationRecord
    belongs_to :user
    has_many :videos

    def self.search(param)
        to_send_back = (title(param) + description(param)).uniq
        return nil unless to_send_back
        to_send_back
    end

    def self.title(param)
        matches('title', param)
    end

    def self.description(param)
        matches('description', param)
    end

    def self.matches(field_name, param)
        where("#{field_name} like ?","%#{param}%")
    end
end
