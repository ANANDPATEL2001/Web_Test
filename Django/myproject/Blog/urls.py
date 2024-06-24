from django.urls import path
from . import views
# 'views' is the file we have created & imported containg all the functions(controller) to be executed

urlpatterns = [
    path('', views.BlogHome, name='BlogHome'),
    # path('/', views.newBlogHome, name='newBlogHome'),
]