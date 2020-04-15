class Api::ItemsController < ApplicationController


  def index
    render json: Item.all
  end

  def create
    item = Item.new(item_params)

    if item.save
      render json: item
    else
      render json:{message:'sorry not working'}
    end

  end

  private


  def item_params
    params.require(:item).permit(:name,:image,:description,:likes)
  end


end
