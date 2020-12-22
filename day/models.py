from django.db import models
from patient.models import Patient
from doctor.models import Doctor

# Create your models here.
class Day(models.Model):
    date = models.DateField()
    doctorId = models.ForeignKey(Doctor,on_delete=models.CASCADE, related_name='Appointemnt',default=1)

    class Meta:
        unique_together = ('date','doctorId')
    
    def __str__(self):
        return "%s %s" % (self.date.strftime("%b %d %Y"), self.doctorId.doctor.name)

class Hour(models.Model):
    hour = models.CharField(max_length=200,default='9:00 AM')
    isAvailable = models.BooleanField(default=False)
    dayId = models.ForeignKey(Day,on_delete=models.CASCADE, related_name="Hour")
    patientId = models.ForeignKey(Patient,on_delete=models.CASCADE, related_name="Appointments")
    doctorId = models.ForeignKey(Doctor,on_delete=models.CASCADE, related_name='Appointments',default=1)
    
    class Meta:
        unique_together = (('patientId','dayId'),('hour','dayId'),('patientId','hour','dayId'))
        
    def __str__(self):
        return "%s %s" % (self.hour, self.doctorId.doctor.name)