# api/views.py
from rest_framework import viewsets
from .serializers import PostSerializer
from .models import Post
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication


@permission_classes((IsAuthenticated, ))
@authentication_classes((JSONWebTokenAuthentication,))
class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
   
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)