class ContactSubmissionsController < ApplicationController
  def create
    ContactSubmission.create(contact_submission_params)
    redirect_to root_path
  end

  private

  def contact_submission_params
    params.require(:contact_submission).permit(:name, :email, :phone)
  end
end