from django.shortcuts import render
from rest_framework import generics
from day.models import Day,Hour
from day.serializers import DaySerializer,HourSerializer

from rest_framework.decorators import api_view  
from rest_framework.response import Response
# Create your views here.

class DayList(generics.ListCreateAPIView):
    queryset = Day.objects.all()
    serializer_class = DaySerializer


class HourList(generics.ListCreateAPIView):
    queryset = Hour.objects.all()
    serializer_class = HourSerializer

@api_view(['POST'])
def DayDetail(request):
    day = Day.objects.get(pk=request.data['pk']) # the 'get' return me back a model I can serialize
    serializer = DaySerializer(day,many=False)
    return Response(serializer.data)


@api_view(['POST'])
def DayDetailDoctor(request):
    hour = Hour.objects.all().filter(doctorId=request.data['doctorId']) # the 'get' return me back a model I can serialize
    serializer = HourSerializer(hour,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def DeleteAppointment(request):
    hour = Hour.objects.get(id=request.data['id']) # the 'get' return me back a model I can serialize
    hour.delete()
    return Response('Successfully Deleted')
