from django.shortcuts import render
from rest_framework import viewsets
from techisstudentsapp.serializers import StudentSerializer
from .models import Student
from rest_framework import generics

class StudentViewSet(viewsets.ModelViewSet):
    
    queryset = Student.objects.order_by('created_at').reverse().all()[:20]
    serializer_class = StudentSerializer
   
# Student.objects.order_by('created_at').reverse().all()[:20]

class StudentList(generics.ListAPIView):
    # Get all posts, limit = 20
    queryset = Student.objects.order_by('created_at').reverse().all()[:20]
    serializer_class = StudentSerializer

class StudentAdd(generics.CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentDetail(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentDelete(generics.DestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


