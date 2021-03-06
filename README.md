## usersテーブル
|Column     |Type  |Options    |
|-----------|------|-----------|
|email      |string|null: false|
|password   |string|null: false|
|name       |string|null: false|
### Association
- has_many :messages
- has_many :user_groups
- has_many :groups, through: :group_users

## groupsテーブル
|Column    |Type   |Options    |
|----------|-------|-----------|
|name      |string |null: false|
### Association
- has_many :user_groups
- has_many :users, through: :group_users
- has_many :messages

## group_usersテーブル
|Column   |Type   |Options                       |
|---------|-------|------------------------------|
|user_id  |integer|null: false, foreign_key: true|
|group_id |integer|null: false, foreign_key: true|
### Association    
- belongs_to :user
- belongs_to :group
  
## messagesテーブル
|Column   |Type   |Options                       |
|---------|-------|------------------------------|
|text     |text   |                              |
|image    |string |                              |
|user_id  |integer|null: false, foreign_key: true|
|group_id |integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group