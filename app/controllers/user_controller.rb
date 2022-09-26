class UserController < ApplicationController
	def login
		response_data = { :status => false, :result => {}, :error => nil }

		begin

		rescue Exception => ex
			response_data[:error] = ex.message
		end

		render :json => response_data
	end

	def register
	end

	def update_user
	end
end
