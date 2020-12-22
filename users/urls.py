from django.urls import path 
from users.views import UserList,UserDetail

app_name = 'users'

urlpatterns = [
    path('' ,UserList.as_view() ),
    path('details',UserDetail )
]