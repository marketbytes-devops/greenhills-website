from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.db import connection

class EatPageCreateViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = EatPageCreateSerializer
    queryset = EatPageCreate.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            page = EatPageCreate.objects.get(pk=pk)
            page.delete()
            if not EatPageCreate.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE eat_eatpagecreate AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except EatPageCreate.DoesNotExist:
            return Response(
                {"error": "Invalid page ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class EatBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = EatBannerSerializer
    queryset = EatBanner.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("eat_page_create__link")
        if slug:
            queryset = queryset.filter(eat_page_create__link=slug)
        return queryset

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            banner = EatBanner.objects.get(pk=pk)
            banner.delete()
            if not EatBanner.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE eat_eatbanner AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except EatBanner.DoesNotExist:
            return Response(
                {"error": "Invalid banner ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class EatTimeViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = EatTimeSerializer
    queryset = EatTime.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("eat_page_create__link")
        if slug:
            queryset = queryset.filter(eat_page_create__link=slug)
        return queryset

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            time = EatTime.objects.get(pk=pk)
            time.delete()
            if not EatTime.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE eat_eattime AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except EatTime.DoesNotExist:
            return Response(
                {"error": "Invalid time ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class EatMenuTabCreateViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = EatMenuTabCreateSerializer
    queryset = EatMenuTabCreate.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("eat_page_create__link")
        if slug:
            queryset = queryset.filter(eat_page_create__link=slug)
        return queryset

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                EatMenuTabCreate.objects.filter(id=item["id"]).update(order=item["order"])
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
            tab = EatMenuTabCreate.objects.get(pk=pk)
            tab.delete()
            if not EatMenuTabCreate.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE eat_eatmenutabcreate AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except EatMenuTabCreate.DoesNotExist:
            return Response(
                {"error": "Invalid tab ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class EatMenuTabItemsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = EatMenuTabItemsSerializer
    queryset = EatMenuTabItems.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("eat_page_create__link")
        if slug:
            queryset = queryset.filter(eat_page_create__link=slug)
        return queryset

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            item = EatMenuTabItems.objects.get(pk=pk)
            item.delete()
            if not EatMenuTabItems.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE eat_eatmenutabitems AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except EatMenuTabItems.DoesNotExist:
            return Response(
                {"error": "Invalid item ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class EatMenuTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = EatMenuTitleSerializer
    queryset = EatMenuTitle.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("eat_page_create__link")
        if slug:
            queryset = queryset.filter(eat_page_create__link=slug)
        return queryset

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            title = EatMenuTitle.objects.get(pk=pk)
            title.delete()
            if not EatMenuTitle.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE eat_eatmenutitle AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except EatMenuTitle.DoesNotExist:
            return Response(
                {"error": "Invalid title ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class EatMenuListingsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = EatMenuListingsSerializer
    queryset = EatMenuListings.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("eat_page_create__link")
        if slug:
            queryset = queryset.filter(eat_page_create__link=slug)
        return queryset

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            listing = EatMenuListings.objects.get(pk=pk)
            listing.delete()
            if not EatMenuListings.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE eat_eatmenulistings AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except EatMenuListings.DoesNotExist:
            return Response(
                {"error": "Invalid listing ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class EatAmenitiesTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = EatAmenitiesTitleSerializer
    queryset = EatAmenitiesTitle.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("eat_page_create__link")
        if slug:
            queryset = queryset.filter(eat_page_create__link=slug)
        return queryset

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            amenities_title = EatAmenitiesTitle.objects.get(pk=pk)
            amenities_title.delete()
            if not EatAmenitiesTitle.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE eat_eatamenitiestitle AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except EatAmenitiesTitle.DoesNotExist:
            return Response(
                {"error": "Invalid amenities title ID"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class EatAmenitiesListingsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = EatAmenitiesListingsSerializer
    queryset = EatAmenitiesListings.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("eat_page_create__link")
        if slug:
            queryset = queryset.filter(eat_page_create__link=slug)
        return queryset

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                EatAmenitiesListings.objects.filter(id=item["id"]).update(order=item["order"])
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
            amenities_listing = EatAmenitiesListings.objects.get(pk=pk)
            amenities_listing.delete()
            if not EatAmenitiesListings.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE eat_eatamenitieslistings AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except EatAmenitiesListings.DoesNotExist:
            return Response(
                {"error": "Invalid amenities listing ID"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class EatExploreViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = EatExploreSerializer
    queryset = EatExplore.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        slug = self.request.query_params.get("eat_page_create__link")
        if slug:
            queryset = queryset.filter(eat_page_create__link=slug)
        return queryset

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            explore = EatExplore.objects.get(pk=pk)
            explore.delete()
            if not EatExplore.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE eat_eatexplore AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except EatExplore.DoesNotExist:
            return Response(
                {"error": "Invalid explore ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )