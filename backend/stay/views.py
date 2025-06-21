from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.db import connection


class StayRoomsTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = StayRoomsTitleSerializer
    queryset = StayRoomsTitle.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            rooms_title = StayRoomsTitle.objects.get(pk=pk)
            rooms_title.delete()
            if not StayRoomsTitle.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE stay_stayroomstitle AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except StayRoomsTitle.DoesNotExist:
            return Response(
                {"error": "Invalid rooms title ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class StayRoomsListingsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = StayRoomsListingsSerializer
    queryset = StayRoomsListings.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        exclude_slug = self.request.query_params.get("exclude_slug")
        if exclude_slug:
            queryset = queryset.exclude(link=exclude_slug)
        return queryset

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            rooms_listing = StayRoomsListings.objects.get(pk=pk)
            rooms_listing.delete()
            if not StayRoomsListings.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE stay_stayroomslistings AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except StayRoomsListings.DoesNotExist:
            return Response(
                {"error": "Invalid rooms listing ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
            

class StayPageCreateViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = StayPageCreateSerializer
    queryset = StayPageCreate.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            stay = StayPageCreate.objects.get(pk=pk)
            stay.delete()
            if not StayPageCreate.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE stay_staypagecreate AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except StayPageCreate.DoesNotExist:
            return Response(
                {"error": "Invalid stay ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class StayBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = StayBannerSerializer
    queryset = StayBanner.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("stay_page_create__link")
        if slug:
            queryset = queryset.filter(stay_page_create__link=slug)
        return queryset
    
    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            banner = StayBanner.objects.get(pk=pk)
            banner.delete()
            if not StayBanner.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE stay_staybanner AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except StayBanner.DoesNotExist:
            return Response(
                {"error": "Invalid banner ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class StayHighlightsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = StayHighlightsSerializer
    queryset = StayHighlights.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("stay_page_create__link")
        if slug:
            queryset = queryset.filter(stay_page_create__link=slug)
        return queryset

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                StayHighlights.objects.filter(id=item["id"]).update(order=item["order"])
            return Response(
                {"status": "Order updated successfully"}, status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            highlight = StayHighlights.objects.get(pk=pk)
            highlight.delete()
            if not StayHighlights.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE stay_stayhighlights AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except StayHighlights.DoesNotExist:
            return Response(
                {"error": "Invalid highlight ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class StayAmenitiesTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = StayAmenitiesTitleSerializer
    queryset = StayAmenitiesTitle.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("stay_page_create__link")
        if slug:
            queryset = queryset.filter(stay_page_create__link=slug)
        return queryset

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            amenities_title = StayAmenitiesTitle.objects.get(pk=pk)
            amenities_title.delete()
            if not StayAmenitiesTitle.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE stay_stayamenitiestitle AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except StayAmenitiesTitle.DoesNotExist:
            return Response(
                {"error": "Invalid amenities title ID"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class StayAmenitiesListingsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = StayAmenitiesListingsSerializer
    queryset = StayAmenitiesListings.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("stay_page_create__link")
        if slug:
            queryset = queryset.filter(stay_page_create__link=slug)
        return queryset

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                StayAmenitiesListings.objects.filter(id=item["id"]).update(
                    order=item["order"]
                )
            return Response(
                {"status": "Order updated successfully"}, status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            amenities_listing = StayAmenitiesListings.objects.get(pk=pk)
            amenities_listing.delete()
            if not StayAmenitiesListings.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE stay_stayamenitieslistings AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except StayAmenitiesListings.DoesNotExist:
            return Response(
                {"error": "Invalid amenities listing ID"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class StayExploreViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = StayExploreSerializer
    queryset = StayExplore.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("stay_page_create__link")
        if slug:
            queryset = queryset.filter(stay_page_create__link=slug)
        return queryset

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            explore = StayExplore.objects.get(pk=pk)
            explore.delete()
            if not StayExplore.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE stay_stayexplore AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except StayExplore.DoesNotExist:
            return Response(
                {"error": "Invalid explore ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class StayGalleryViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = StayGallerySerializer
    queryset = StayGallery.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("stay_page_create__link")
        if slug:
            queryset = queryset.filter(stay_page_create__link=slug)
        return queryset

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            gallery = StayGallery.objects.get(pk=pk)
            gallery.delete()
            if not StayGallery.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE stay_staygallery AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except StayGallery.DoesNotExist:
            return Response(
                {"error": "Invalid gallery ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )