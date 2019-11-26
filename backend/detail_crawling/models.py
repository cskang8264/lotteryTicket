from django.db import models

# Create your models here.
#-*- coding:utf-8 -*-






# Create your models here.
class Deatail_Crawling(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    title = models.CharField(max_length=100)
    area = models.CharField(max_length=100)
    sale = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    img_src = models.URLField()

    objects = models.Manager()