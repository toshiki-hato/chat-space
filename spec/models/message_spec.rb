require 'rails_helper'

RSpec.describe Message, type: :model do
  describe '#create' do
    context 'can save' do
# この中にメッセージを保存できる場合のテストを記述
      it 'is valid with content' do
        expect(build(:message, image:  nil)).to be_valid
      end

      it 'is valid with image' do
        expect(build(:message, content:  nil)).to be_valid
       end

      it 'is valid with content and image' do
        expect(build(:message)).to be_valid
      end
    end


    context 'can not save' do
# この中にメッセージを保存できない場合のテストを記述
      it 'is valid with content' do
        expect(build(:message)).to be_valid
      end

      it 'is valid with content' do
        expect(build(:message, image:  nil)).to be_valid
      end

      it 'is valid with image' do
        expect(build(:message, content:  nil)).to be_valid
       end
       
    end
  end
end