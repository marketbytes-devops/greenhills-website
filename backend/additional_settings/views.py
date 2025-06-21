from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.db import connection


class AdditionalSettingsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = AdditionalSettingsSerializer
    queryset = AdditionalSettings.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            additional_settings = AdditionalSettings.objects.get(pk=pk)
            additional_settings.delete()
            if not AdditionalSettings.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE additional_settings_additionalsettings AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except AdditionalSettings.DoesNotExist:
            return Response(
                {"error": "Invalid additional_settings ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )