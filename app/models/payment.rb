class Payment < ApplicationRecord
    attr_accessor :card_number, :card_cvv, :card_expires_month, :card_expires_year
    belongs_to :user
end
