from django.contrib import admin
from patient.models import Patient
from patient.models import DoctorPatient
# Register your models here.
admin.site.register(Patient)
admin.site.register(DoctorPatient)