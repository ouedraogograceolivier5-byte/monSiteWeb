from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request, "application/accueil.html")

def biographie(request):
    return render(request, "application/biographie.html")

def contact(request):
    return render(request, "application/contact.html")