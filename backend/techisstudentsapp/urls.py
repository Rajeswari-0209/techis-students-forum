from django.urls import path
from . import views

urlpatterns = [
    path('', views.StudentList.as_view(), name='student_list'),
    path('add/', views.StudentAdd.as_view(), name='student_add'),
    path('delete/<int:pk>/', views.StudentDelete.as_view(), name='student_delete'),
   
]
