from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.db import connection


class ExploreBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = ExploreBannerSerializer
    queryset = ExploreBanner.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            banner = ExploreBanner.objects.get(pk=pk)
            banner.delete()
            if not ExploreBanner.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE about_explorebanner AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except ExploreBanner.DoesNotExist:
            return Response(
                {"error": "Invalid banner ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class ExploreSectionTwoViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = ExploreSectionTwoSerializer
    queryset = ExploreSectionTwo.objects.all()

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                explore_section_two = ExploreSectionTwo.objects.get(id=item["id"])
                explore_section_two.order = item["order"]
                explore_section_two.save()
            return Response(
                {"status": "Order updated successfully"}, status=status.HTTP_200_OK
            )
        except ExploreSectionTwo.DoesNotExist:
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
            explore_section_two = ExploreSectionTwo.objects.get(pk=pk)
            explore_section_two.delete()
            if not ExploreSectionTwo.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE about_exploresectiontwo AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except ExploreSectionTwo.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class ExploreSectionThreeTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = ExploreSectionThreeTitleSerializer
    queryset = ExploreSectionThreeTitle.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            explore_section_three_title = ExploreSectionThreeTitle.objects.get(pk=pk)
            explore_section_three_title.delete()
            if not ExploreSectionThreeTitle.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE about_exploresectionthreetitle AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except ExploreSectionThreeTitle.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class ExploreSectionThreeViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = ExploreSectionThreeSerializer
    queryset = ExploreSectionThree.objects.all()

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                explore_section_three = ExploreSectionThree.objects.get(id=item["id"])
                explore_section_three.order = item["order"]
                explore_section_three.save()
            return Response(
                {"status": "Order updated successfully"}, status=status.HTTP_200_OK
            )
        except ExploreSectionThree.DoesNotExist:
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
            explore_section_three = ExploreSectionThree.objects.get(pk=pk)
            explore_section_three.delete()
            if not ExploreSectionThree.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE about_exploresectionthree AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except ExploreSectionThree.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
