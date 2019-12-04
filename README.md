## membersテーブル
|Column     |Type  |Options    |
|-----------|------|-----------|
|email      |string|null: false|
|password   |string|null: false|
|member_name|string|null: false|
### Association
- has_many :messages
  has_many :member_groups
- has_many :groups, through: :member_groups

## groupsテーブル
|Column    |Type   |Options    |
|----------|-------|-----------|
|group_name|text   |null: false|
### Association
- has_many :member_groups
- has_many :members, through: :member_groups
  has_many :messages

## member_groupsテーブル
|Column   |Type   |Options                       |
|---------|-------|------------------------------|
|member_id|integer|null: false, foreign_key: true|
|group_id |integer|null: false, foreign_key: true|
### Association    
- belongs_to :members
- belongs_to :groups
  
## messagesテーブル
|Column   |Type   |Options                       |
|---------|-------|------------------------------|
|text     |text   |                              |
|image    |string |                              |
|member_id|integer|null: false, foreign_key: true|
|group_id |integer|null: false, foreign_key: true|
<!-- valedatesでtextまたはimageどちらか入力がないと投稿できないよう設定する -->
### Association
- belongs_to :image
  belongs_to :user
  belongs_to :group