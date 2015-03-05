SELECT * FROM kakaotalk.members as matchingUser
WHERE matchingUser.gender != 'M' 
# 현재 사용자 선호조건 
and matchingUser.`my-company` not in ('nhn', 'neowiz')
and matchingUser.`my-religion` not in ('buddhism', 'christian')
and matchingUser.`birth-year` between (1980 - 2) and (1980 + 3)
and matchingUser.`my-character` in ('발랄', '애교')
and matchingUser.`my-charm` in ('몸매', '성격')
# 상대방 선호조건
and matchingUser.`exclude-company` like '%skplanet%' 
and matchingUser.`exclude-religion` not in ('none') 
and '1980' between (matchingUser.`birth-year` - matchingUser.`uppperlimit`) and (matchingUser.`birth-year` + matchingUser.`lowerlimit`)
and matchingUser.`prefer-character` in ('유머', '애교')
and matchingUser.`prefer-charm` in ('몸매', '얼굴');