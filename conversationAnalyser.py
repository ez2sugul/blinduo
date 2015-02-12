#!/usr/bin/python
#-*- coding: utf-8 -*-

import re
dateDict = {}
kakaoText = open('KakaoTalkChats.txt', 'r')


def main(): 
	for line in kakaoText:
		matchObj = re.match(r'([0-9]+년 [0-9]+월 [0-9]+일) .*[0-9]+, (.*) :', line, re.M|re.I)
		if matchObj:
			date = matchObj.group(1)
			user = matchObj.group(2)
#			print "current {0} {1}".format(date, user)
			if date in dateDict:
				if user in dateDict[date].keys():
					dateDict[date][user] += 1
#					print "{1} said {2} times at {0}".format(date, user, dateDict[date][user])
				else:
					dateDict[date][user] = 1
#					print "{1} said {2} times at {0} new".format(date, user, dateDict[date][user])
			else:
				dateDict[date] = {user: 1}
#				print "{1} said {2} times at {0} day opner".format(date, user, dateDict[date][user])


def printDate(dictionary):
	for item in dictionary.keys():
		print item
		for name in dictionary[item]:
			print '{0},{1},{2}'.format(item, name, dictionary[item][name])

def maxByUser(dictionary):
	user = {}
	for date in dictionary.keys():
		for userName in dictionary[date].keys():
			if userName in user:
				user[userName] += dictionary[date][userName]
			else:
				user[userName] = dictionary[date][userName]

	for name in user.keys():
		print '{0} {1}'.format(name, user[name])


#printDate(dateDict)

maxByUser(dateDict)

if __name__ == "__main__":
	main()
