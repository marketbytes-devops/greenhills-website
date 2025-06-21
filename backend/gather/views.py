from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.db import connection


class GatherPageCreateViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = GatherPageCreateSerializer
    queryset = GatherPageCreate.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            page = GatherPageCreate.objects.get(pk=pk)
            page.delete()
            if not GatherPageCreate.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE gather_gatherpagecreate AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except GatherPageCreate.DoesNotExist:
            return Response(
                {"error": "Invalid page ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class GatherBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = GatherBannerSerializer
    queryset = GatherBanner.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("gather_page_create__link")
        if slug:
            queryset = queryset.filter(gather_page_create__link=slug)
        return queryset

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            banner = GatherBanner.objects.get(pk=pk)
            banner.delete()
            if not GatherBanner.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE gather_gatherbanner AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except GatherBanner.DoesNotExist:
            return Response(
                {"error": "Invalid banner ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class GatherHighlightsTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = GatherHighlightsTitleSerializer
    queryset = GatherHighlightsTitle.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("gather_page_create__link")
        if slug:
            queryset = queryset.filter(gather_page_create__link=slug)
        return queryset

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            highlight = GatherHighlightsTitle.objects.get(pk=pk)
            highlight.delete()
            if not GatherHighlightsTitle.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE gather_gatherhighlightstitle AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except GatherHighlightsTitle.DoesNotExist:
            return Response(
                {"error": "Invalid highlight ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class GatherHighlightsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = GatherHighlightsSerializer
    queryset = GatherHighlights.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("gather_page_create__link")
        if slug:
            queryset = queryset.filter(gather_page_create__link=slug)
        return queryset

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                GatherHighlights.objects.filter(id=item["id"]).update(
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
            highlight = GatherHighlights.objects.get(pk=pk)
            highlight.delete()
            if not GatherHighlights.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE gather_gatherhighlights AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except GatherHighlights.DoesNotExist:
            return Response(
                {"error": "Invalid highlight ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class GatherServicesViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = GatherServicesSerializer
    queryset = GatherServices.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("gather_page_create__link")
        if slug:
            queryset = queryset.filter(gather_page_create__link=slug)
        return queryset

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                GatherServices.objects.filter(id=item["id"]).update(order=item["order"])
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
            service = GatherServices.objects.get(pk=pk)
            service.delete()
            if not GatherServices.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE gather_gatherservices AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except GatherServices.DoesNotExist:
            return Response(
                {"error": "Invalid service ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class GatherAmenitiesTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = GatherAmenitiesTitleSerializer
    queryset = GatherAmenitiesTitle.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("gather_page_create__link")
        if slug:
            queryset = queryset.filter(gather_page_create__link=slug)
        return queryset

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            amenities_title = GatherAmenitiesTitle.objects.get(pk=pk)
            amenities_title.delete()
            if not GatherAmenitiesTitle.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE gather_gatheramenitiestitle AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except GatherAmenitiesTitle.DoesNotExist:
            return Response(
                {"error": "Invalid amenities title ID"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class GatherAmenitiesListingsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = GatherAmenitiesListingsSerializer
    queryset = GatherAmenitiesListings.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("gather_page_create__link")
        if slug:
            queryset = queryset.filter(gather_page_create__link=slug)
        return queryset

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                GatherAmenitiesListings.objects.filter(id=item["id"]).update(
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
            amenities_listing = GatherAmenitiesListings.objects.get(pk=pk)
            amenities_listing.delete()
            if not GatherAmenitiesListings.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE gather_gatheramenitieslistings AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except GatherAmenitiesListings.DoesNotExist:
            return Response(
                {"error": "Invalid amenities listing ID"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class GatherExploreViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = GatherExploreSerializer
    queryset = GatherExplore.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("gather_page_create__link")
        if slug:
            queryset = queryset.filter(gather_page_create__link=slug)
        return queryset

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            explore = GatherExplore.objects.get(pk=pk)
            explore.delete()
            if not GatherExplore.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE gather_gatherexplore AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except GatherExplore.DoesNotExist:
            return Response(
                {"error": "Invalid explore ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
