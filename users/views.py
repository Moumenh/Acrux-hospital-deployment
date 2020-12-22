from django.shortcuts import render
from rest_framework import generics
from users.models import UserAccount
from users.serializers import UserSerialize

from rest_framework.decorators import api_view  
from rest_framework.response import Response

class UserList(generics.ListAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerialize

@api_view(['POST'])  
def UserDetail(request):
    user = UserAccount.objects.get(pk=request.data['pk']) # the 'get' return me back a model I can serialize
    serializer = UserSerialize(user,many=False)
    return Response(serializer.data)

 

from rest_framework.decorators import api_view  
from rest_framework.response import Response


