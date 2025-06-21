from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.db import connection


class TermsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = TermsSerializer
    queryset = Terms.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            terms = Terms.objects.get(pk=pk)
            terms.delete()
            if not Terms.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE terms_and_terms_terms AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except Terms.DoesNotExist:
            return Response(
                {"error": "Invalid privacy ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
            
class PrivacyViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = PrivacySerializer
    queryset = Privacy.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            privacy = Privacy.objects.get(pk=pk)
            privacy.delete()
            if not Privacy.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE terms_and_privacy_privacy AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except Privacy.DoesNotExist:
            return Response(
                {"error": "Invalid privacy ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )