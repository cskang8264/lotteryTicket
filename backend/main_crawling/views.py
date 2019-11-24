
from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status

from .serializers import CrawlingSerializer
from .models import Crawling

from rest_framework.response import Response
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes, authentication_classes



@authentication_classes((JSONWebTokenAuthentication,))
@permission_classes((IsAuthenticated, ))
class CrawlingView(viewsets.ModelViewSet):
    queryset = Crawling.objects.all()
    serializer_class = CrawlingSerializer