from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    #return HttpResponse("<h1><center>Welcome to the Home Page!</center></h1>")
    return render(request, "application/contact.html")