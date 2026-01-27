# Étape 1 : Choisir une image Python légère
FROM python:3.11-slim

# Étape 2 : Définir le répertoire de travail
WORKDIR /app

# Étape 3 : Installer les dépendances système (PostgreSQL, build tools)
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Étape 4 : Copier requirements.txt et installer les dépendances Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Étape 5 : Copier le reste du projet
COPY . .

# Étape 6 : Collecter les fichiers statiques (optionnel pour blog)
RUN python manage.py collectstatic --noinput

# Étape 7 : Commande de lancement avec Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "monSiteWeb.wsgi:application"]
