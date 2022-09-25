Rails.application.routes.draw do
	# Route for users
	scope "user" do
		post "login"	   => "user#login"
		post "register"	   => "user#register"
		post "update_user" => "user#update_user"
	end
end
