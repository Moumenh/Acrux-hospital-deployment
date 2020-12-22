from django.db import models
from department.models import Department
from users.models import UserAccount
# Create your models here.

class Doctor(models.Model): 
    doctor = models.OneToOneField(UserAccount,on_delete=models.CASCADE, related_name='doctor')
    department = models.ForeignKey(Department,on_delete=models.CASCADE, related_name='doctors') #one to many relation (related_name) will return  doctors in the department
    role = models.CharField(max_length=10,default='doctor')
    BloodType = models.CharField(max_length=10)
    image = models.CharField(max_length=250)

    def __str__(self):
        return self.doctor.name