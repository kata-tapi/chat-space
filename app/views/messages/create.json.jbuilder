json.text @message.content
json.date @message.created_at.strftime("%Y/%m/%d %H:%M")
json.user @message.user.name
json.image @message.image.url