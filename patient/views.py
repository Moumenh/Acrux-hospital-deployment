from django.shortcuts import render
from rest_framework import generics
from patient.serializers import PatientsSerializer, PatientsDoctorsCreateSerializer
from patient.models import Patient,DoctorPatient

from rest_framework.decorators import api_view  
from rest_framework.response import Response

# Create your views here.

class PatientList(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientsSerializer

class PatientDoctorCreator(generics.CreateAPIView):
    queryset = DoctorPatient.objects.all()
    serializer_class = PatientsDoctorsCreateSerializer



@api_view(['POST'])
def PateintDetails(request):
    patient = Patient.objects.get(userId=request.data['pk']) # the 'get' return me back a model I can serialize
    serializer = PatientsSerializer(patient,many=False)
    return Response(serializer.data)

@api_view(['POST'])
def PatientUpdate(request):
    patient = Patient.objects.filter(pk=request.data['pk']) # to update fields use   'filter'
    patient.update(image=request.data['image'])
    
    patient = Patient.objects.get(pk=request.data['pk']) # to serialize doctor's object use 'get'

    serializer = PatientsSerializer(patient,many=False)
    
    return Response(serializer.data)

