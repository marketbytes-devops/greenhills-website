from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.db import connection

class SocialMediaLinksViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = SocialMediaLinksSerializer
    queryset = SocialMediaLinks.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            instance = SocialMediaLinks.objects.get(pk=pk)
            instance.delete()
            with connection.cursor() as cursor:
                cursor.execute("ALTER TABLE home_socialmedialinks AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except SocialMediaLinks.DoesNotExist:
            return Response(
                {"error": "Invalid Social Media Links ID"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )