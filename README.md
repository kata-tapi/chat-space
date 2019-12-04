## usersテーブル
|Column     |Type  |Options    |
|-----------|------|-----------|
|email      |string|null: false|
|password   |string|null: false|
|user_name  |string|null: false|
### Association
- has_many :messages
- has_many :user_groups
- has_many :groups, through: :user_groups

## groupsテーブル
|Column    |Type   |Options    |
|----------|-------|-----------|
|group_name|text   |null: false|
### Association
- has_many :user_groups
- has_many :users, through: :user_groups
- has_many :messages

## user_groupsテーブル
|Column   |Type   |Options                       |
|---------|-------|------------------------------|
|user_id  |integer|null: false, foreign_key: true|
|group_id |integer|null: false, foreign_key: true|
### Association    
- belongs_to :users
- belongs_to :groups
  
## messagesテーブル
|Column   |Type   |Options                       |
|---------|-------|------------------------------|
|text     |text   |                              |
|image    |string |                              |
|user_id  |integer|null: false, foreign_key: true|
|group_id |integer|null: false, foreign_key: true|
### Association
- belongs_to :image
- belongs_to :user
- belongs_to :group