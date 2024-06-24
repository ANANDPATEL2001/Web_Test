# I have created this file -- Anand

from django.http import HttpResponse
from django.shortcuts import render
# Every function in 'django' needs a 'request' parameter & 'views' return a response associated with it i.e. 'HttpResponse'

def home(request) : 
    return HttpResponse("Default Home")

def newHome(request) : 
    return HttpResponse("New Home")

def about(request) : 
    return HttpResponse("<a href='/'>back</a><h1>About</h1>")
# We can integrate the 'HTML' content with the 'HttpResponse' 

def newAbout(request) : 
    return HttpResponse("<a href='/'>back</a>     New About")
# Pyhton 'HttpResponse' only consider the first(only 1) space applied rest ignored

def templateIndex(request):
    params = {'name' : "Anand", 'age' : "22"}
    # print(request)
    return render(request, 'index.html', params)
# render function takes 3 arguments namely ('request' parameter, name of template file & params to be passed to the template file)

def process(request):
    dummyText = request.POST.get('testValue', 'default')
    checkValue = request.POST.get('checkValue', 'off')
    # print(dummyText, checkValue)
    count=0
    punchuations = '''!"#$%&'()*+, -./:;<=>?@[\]^_`{|}~'''
    newText = ''
    for char in dummyText:
        if char not in punchuations:
            newText += char
            
    if checkValue == 'on':
        for char in newText:
            count += 1
        
        params = {'newText' : newText, 'count' : count}
        return render(request, 'analyse.html',params)
    else:
        return HttpResponse("Error Occured")