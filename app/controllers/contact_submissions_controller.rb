class ContactSubmissionsController < ApplicationController
  def create
    @submission = ContactSubmission.create(contact_submission_params)
    render :thanks
  end

  def thanks
  end

  private

  def contact_submission_params
    params.require(:contact_submission).permit(:name, :email, :phone, :project)
  end
end