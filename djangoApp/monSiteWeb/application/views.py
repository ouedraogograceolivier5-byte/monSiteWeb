from django.shortcuts import render,redirect
from django.core.mail import send_mail
from django.conf import settings
import time

# Create your views here.
def home(request):
    return render(request, "application/accueil.html")

def biographie(request):
    return render(request, "application/biographie.html")

def contact(request):
    return render(request, "application/contact.html")

def contact_view(request):
    if request.method == "POST":
        time.sleep(2)  # Simule un délai de traitement
        nom = request.POST.get("nom")
        email = request.POST.get("email")
        sujet = request.POST.get("sujet")
        message = request.POST.get("message")

        contenu = f"Nom: {nom}\nEmail: {email}\nSujet: {sujet}\nMessage:\n{message}"

        #Envoi vers toi
        send_mail(
            subject=f"Contact: {sujet}",
            message=contenu,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=["oudraogograceolivier5@gmail.com"],
        )

        #Copie automatique au visiteur
        confirmation = (
            f"Bonjour {nom},\n\n"
            "Merci pour votre message. Nous l'avons bien reçu et nous vous répondrons rapidement.\n\n"
            "Résumé de votre demande:\n"
            f"Sujet: {sujet}\nMessage: {message}\n\n"
            "Cordialement,\nL'équipe"
        )

        send_mail(
            subject="Confirmation de réception de votre message",
            message=confirmation,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[email],
        )

        return redirect("success")  # page de confirmation

    return render(request, "application/contact.html")

def success(request):
    return render(request, "application/success.html")