FROM python:3.11

WORKDIR /app

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y build-essential libpq-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --upgrade pip setuptools wheel
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Collecte des fichiers statiques
WORKDIR /app/djangoApp/monSiteWeb
RUN python manage.py collectstatic --noinput

# Lancement
ENV DJANGO_SETTINGS_MODULE=monSiteWeb.settings
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "monSiteWeb.wsgi:application"]
