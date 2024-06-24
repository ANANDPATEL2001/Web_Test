from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def BlogHome(request):
    return render(request, 'blog/index.html')

def newBlogHome(request):
    return HttpResponse('new Blog Home page')