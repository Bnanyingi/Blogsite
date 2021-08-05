from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def aboutus(request):
    return render(request, 'Aboutus.html')

def contact(request):
    return render(request, 'Contact.html')

def other(request):
    return render(request, 'Other.html')

