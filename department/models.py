from django.db import models
# Create your models here.

class Department(models.Model):
    title = models.CharField(max_length=250)
    image = models.CharField(max_length=250)
    about = models.CharField(max_length=1000)
  
    def __str__(self):
        return self.title
