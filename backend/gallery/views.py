from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.db import connection


class GalleryBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = GalleryBannerSerializer
    queryset = GalleryBanner.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            banner = GalleryBanner.objects.get(pk=pk)
            banner.delete()
            if not GalleryBanner.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE gallery_gallerybanner AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except GalleryBanner.DoesNotExist:
            return Response(
                {"error": "Invalid banner ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class GalleryImagesViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = GalleryImagesSerializer
    queryset = GalleryImages.objects.all()

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                gallery_images = GalleryImages.objects.get(id=item["id"])
                gallery_images.order = item["order"]
                gallery_images.save()
            return Response(
                {"status": "Order updated successfully"}, status=status.HTTP_200_OK
            )
        except GalleryImages.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            gallery_images = GalleryImages.objects.get(pk=pk)
            gallery_images.delete()
            if not GalleryImages.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE gallery_galleryimages AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except GalleryImages.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
