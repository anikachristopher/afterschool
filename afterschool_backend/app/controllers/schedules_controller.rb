class SchedulesController < ApplicationController
  before_action :set_schedule, only: [:show, :update, :destroy]

  def index
    schedules = Schedule.all
    render json: ScheduleSerializer.new(schedules)
  end

  def show
    schedule = Schedule.find_by(id: params[:id])
    render json: ScheduleSerializer.new(schedule).serialized_json
  end

  # POST /schedules
  def create
    #if statement using childId - should be associated with a childID to be created. 
    # byebug
    # if params [:child_id]
    #   @child = Child.find_by(child_id: params[:child_id])
    #   @schedule = @child.schedules.build(schedule_params)
    @schedule = Schedule.new(schedule_params)
    if @schedule.save
      render json: ScheduleSerializer.new(@schedule).serialized_json
    else
      render json: @schedule.errors, status: :unprocessable_entity
    end
  end
  
    def destroy
        schedule = Schedule.find_by(id: params[:id])
        if schedule.destroy
            render json: { message: "Deleted"}
        end

    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_schedule
      @schedule = Schedule.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def schedule_params
      params.require(:schedule).permit(:weekday, :subject, :content, :child_id)
    end
end









  # GET /schedules
  # def index
  #   @schedules = Schedule.all
  #   render json: @schedules, except: [:created_at, :updated_at]
  # end


  # GET /schedules/1
  # def show
  #   render json: @schedule
  # end


  