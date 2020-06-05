#　chat space設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :group,  through:  :user
- has_many :chat

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user_id
- belongs_to :group_id

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|group_users|string|null: false|
|user_id|integer|null: false|
### Association
- belongs_to :user,  through:  :group
- belongs_to :chat


## chatsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group




