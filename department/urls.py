from django.urls import path 
from department.views import DepartmentList,DepartmentDetail
app_name = 'department'

urlpatterns = [
    path('' , DepartmentList.as_view()),
    path('details' , DepartmentDetail)
]