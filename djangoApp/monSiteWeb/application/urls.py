from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('biographie/', views.biographie, name='biographie'),
    path('contact/', views.contact, name='contact'),
]