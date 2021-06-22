from rest_framework import serializers
from .models import Student


class StudentSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Student
        fields = ['id','name','country','email','phone','course','status','image','created_at','updated_at']

