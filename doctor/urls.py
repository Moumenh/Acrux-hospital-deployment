from django.urls import path 
from doctor.views import DoctorList,DoctorDetail,DoctorUpdate, doctorCreate, heart_disease, breast_cancer

app_name = 'doctor'

urlpatterns = [
    path('' , DoctorList.as_view()),
    path('details' , DoctorDetail),
    path('update',DoctorUpdate ),
    path('create', doctorCreate),
    path('heart', heart_disease),
    path('cancer',breast_cancer )
]