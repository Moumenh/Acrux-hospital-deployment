from django.shortcuts import render

from rest_framework import generics
from doctor.models import Doctor
from doctor.serializers import DoctorSerializer

from rest_framework.decorators import api_view  
from rest_framework.response import Response

from doctor.ml.classifier.random_forest import RandomForestClassifier
from doctor.ml.classifier.breast_cancer import RandomForestCancerClassifier

class DoctorList(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

@api_view(['POST'])
def doctorCreate(request):
	serializer = DoctorSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)



@api_view(['POST'])
def DoctorDetail(request):
    doctor = Doctor.objects.get(doctor=request.data['pk']) # the 'get' return me back a model I can serialize
    serializer = DoctorSerializer(doctor,many=False)
    return Response(serializer.data)




@api_view(['POST'])
def DoctorUpdate(request):
    doctor = Doctor.objects.filter(pk=request.data['pk']) # to update fields use   'filter'
    doctor.update(image=request.data['image'])
    
    doctor = Doctor.objects.get(pk=request.data['pk']) # to serialize doctor's object use 'get'

    serializer = DoctorSerializer(doctor,many=False)
    
    return Response(serializer.data)

@api_view(['POST'])
def heart_disease(request):
    print(request.data)
    my_alg = RandomForestClassifier()
    response = my_alg.compute_prediction(request.data)
    return Response(response)

@api_view(['POST'])
def breast_cancer(request):
    print(request.data)
    my_alg = RandomForestCancerClassifier()
    response = my_alg.compute_prediction(request.data)
    return Response(response)

