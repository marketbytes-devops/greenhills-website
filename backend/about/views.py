from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.db import connection


class AboutBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = AboutBannerSerializer
    queryset = AboutBanner.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            banner = AboutBanner.objects.get(pk=pk)
            banner.delete()
            if not AboutBanner.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE about_aboutbanner AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except AboutBanner.DoesNotExist:
            return Response(
                {"error": "Invalid banner ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class AboutSectionTwoViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = AboutSectionTwoSerializer
    queryset = AboutSectionTwo.objects.all()

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                about_section_two = AboutSectionTwo.objects.get(id=item["id"])
                about_section_two.order = item["order"]
                about_section_two.save()
            return Response(
                {"status": "Order updated successfully"}, status=status.HTTP_200_OK
            )
        except AboutSectionTwo.DoesNotExist:
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
            about_section_two = AboutSectionTwo.objects.get(pk=pk)
            about_section_two.delete()
            if not AboutSectionTwo.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE about_aboutsectiontwo AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except AboutSectionTwo.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class AboutSectionThreeTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = AboutSectionThreeTitleSerializer
    queryset = AboutSectionThreeTitle.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            about_section_three_title = AboutSectionThreeTitle.objects.get(pk=pk)
            about_section_three_title.delete()
            if not AboutSectionThreeTitle.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE about_aboutsectionthreetitle AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except AboutSectionThreeTitle.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class AboutSectionThreeViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = AboutSectionThreeSerializer
    queryset = AboutSectionThree.objects.all()

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                about_section_three = AboutSectionThree.objects.get(id=item["id"])
                about_section_three.order = item["order"]
                about_section_three.save()
            return Response(
                {"status": "Order updated successfully"}, status=status.HTTP_200_OK
            )
        except AboutSectionThree.DoesNotExist:
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
            about_section_three = AboutSectionThree.objects.get(pk=pk)
            about_section_three.delete()
            if not AboutSectionThree.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE about_aboutsectionthree AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except AboutSectionThree.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class AboutSectionFourViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = AboutSectionFourSerializer
    queryset = AboutSectionFour.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            about_section_four = AboutSectionFour.objects.get(pk=pk)
            about_section_four.delete()
            if not AboutSectionFour.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE about_aboutsectionfour AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except AboutSectionFour.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class AboutSectionFiveViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = AboutSectionFiveSerializer
    queryset = AboutSectionFive.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            about_section_four = AboutSectionFive.objects.get(pk=pk)
            about_section_four.delete()
            if not AboutSectionFive.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE about_aboutsectionfive AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except AboutSectionFive.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
