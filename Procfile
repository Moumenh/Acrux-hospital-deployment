release: python manage.py makemigrations users day department doctor patient
release: python manage.py migrate
web: gunicorn core.wsgi --log-file -