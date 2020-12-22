from patient.models import Patient,DoctorPatient
from day.serializers import HourSerializer
from rest_framework import serializers

class PatientsDoctorsCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoctorPatient
        fields = ['doctorId','patientId']

class PatientsDoctorsSerializer(serializers.ModelSerializer):
    doctorName = serializers.CharField(source='doctorId.doctor.name', read_only=True)
    doctorId=serializers.CharField(source='doctorId.doctor.id', read_only=True)
    image=serializers.CharField(source='doctorId.image',read_only=True)
    class Meta:
        model=DoctorPatient
        fields= ['doctorName',"doctorId","image"]

class PatientsSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source="userId.name",read_only=True)
    doctors = PatientsDoctorsSerializer(many=True, read_only=True)
    Appointments = HourSerializer(many=True, read_only=True)
    class Meta:
        model=Patient
        fields=('id','pk',"image","BloodType","role","userId","name",'doctors','Appointments')


