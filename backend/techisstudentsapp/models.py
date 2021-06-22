from django.db import models

# Create your models here.
from django.db import models
from cloudinary.models import CloudinaryField
# Create your models here.
class Student(models.Model):
    
    
    name = models.CharField(
        'Name', max_length=20, db_index=True, default='Anonymous'
    )
    country = models.CharField(
        'Country',  max_length=20, db_index=True , default=''
    )
    email = models.CharField(
        'Email_Id',  max_length=30, db_index=True , default=''
    )
    phone = models.CharField(
        'Phone_No',  max_length=30, db_index=True , default=''
    )
    course = models.CharField(
        'Course',  max_length=30, db_index=True , default=''
    )

    status = models.CharField(
        'Status',  max_length=30, db_index=True , default=''
    )
     
    # image = models.CharField(
    #     'image', max_length=1000, db_index=True, default='Anonymous'
    # )
    image = CloudinaryField(
        'image', blank=True, null=True
    )
    
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )
   
