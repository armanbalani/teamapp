class BlogsController < ApplicationController
  def index
    @all_blogs = Blog.all
    @blogs = Blog.paginate(page: params[:page], per_page: 9)
    @current_page = params[:page]
  end

  def show
  end
end
