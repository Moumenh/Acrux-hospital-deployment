from rest_framework import serializers
from department.models import Department
from doctor.models import Doctor
from doctor.serializers import DoctorSerializer

class DepartmentSerializer(serializers.ModelSerializer):
    doctors = DoctorSerializer(many=True, read_only=True)
    class Meta:
        model = Department
        fields = ('title', 'image' , 'about', 'pk','doctors' )
