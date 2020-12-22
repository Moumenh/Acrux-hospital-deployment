from django.db import models
from users.models import UserAccount
from doctor.models import Doctor
# Create your models here.

class Patient(models.Model):
    user_Id = models.OneToOneField(UserAccount,on_delete=models.CASCADE, related_name="patient")
    role = models.CharField(max_length=10,default='patient')
    BloodType = models.CharField(max_length=10)
    image = models.CharField(max_length=250)

    def __str__(self):
        return self.user_Id.name


class DoctorPatient(models.Model):
    patientId = models.ForeignKey(Patient,on_delete=models.CASCADE, related_name='doctors')
    doctorId = models.ForeignKey(Doctor,on_delete=models.CASCADE, related_name='patients')

    class Meta:
        unique_together = ('patientId','doctorId')

    def __str__(self):
        return "%s %s" % (self.doctorId.doctor.name, self.patientId.user_Id.name)