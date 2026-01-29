from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('biographie/', views.biographie, name='biographie'),
    path('contact/', views.contact_view, name='contact'),
    path('success/', views.success, name='success'),
]