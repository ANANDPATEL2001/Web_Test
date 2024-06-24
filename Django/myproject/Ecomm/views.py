from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def EcommHome(request):
    return render(request, 'ecomm/index.html')

def newEcommHome(request):
    return HttpResponse('newEcommHome page')

def about(request):
    return HttpResponse('Ecomm about page')

def newEcommAbout(request):
    return HttpResponse('new Ecomm About page')