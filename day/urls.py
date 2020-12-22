from django.urls import path 
from day.views import DayList,HourList,DayDetail,DayDetailDoctor,DeleteAppointment
app_name = 'day'

urlpatterns = [
    path('date' , DayList.as_view()),
    path('date/details' ,DayDetail),
    path('date/doctor' ,DayDetailDoctor),
    path('hour' , HourList.as_view()),
    path('delete' , DeleteAppointment)
]