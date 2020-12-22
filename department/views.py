from django.shortcuts import render
from rest_framework import generics
from department.models import Department
from department.serializers import DepartmentSerializer

from rest_framework.decorators import api_view  
from rest_framework.response import Response

# Create your views here.


class DepartmentList(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


@api_view(['POST'])
def DepartmentDetail(request):
    department = Department.objects.get(pk=request.data['pk']) # the 'get' return me back a model I can serialize
    serializer = DepartmentSerializer(department,many=False)
    return Response(serializer.data)