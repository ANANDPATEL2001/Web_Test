from django.urls import path
from . import views
# 'views' is the file we have created & imported containg all the functions(controller) to be executed

urlpatterns = [
    path('', views.EcommHome, name='EcommHome'),
    # path('/', views.newEcommHome, name='newEcommHome'),
    # path('/about', views.about, name='ecommAbout'),
    path('about/', views.newEcommAbout, name='newEcommAbout'),
]