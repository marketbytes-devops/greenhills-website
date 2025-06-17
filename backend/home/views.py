from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.db import connection


class HomeBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeBannerSerializer
    queryset = HomeBanner.objects.all()

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                banner = HomeBanner.objects.get(id=item["id"])
                banner.order = item["order"]
                banner.save()
            return Response(
                {"status": "Order updated successfully"}, status=status.HTTP_200_OK
            )
        except HomeBanner.DoesNotExist:
            return Response(
                {"error": "Invalid banner ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            banner = HomeBanner.objects.get(pk=pk)
            banner.delete()
            if not HomeBanner.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE home_homebanner AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeBanner.DoesNotExist:
            return Response(
                {"error": "Invalid banner ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HomeServicesViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeServicesSerializer
    queryset = HomeServices.objects.all()

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                home_services = HomeServices.objects.get(id=item["id"])
                home_services.order = item["order"]
                home_services.save()
            return Response(
                {"status": "Order updated successfully"}, status=status.HTTP_200_OK
            )
        except HomeServices.DoesNotExist:
            return Response(
                {"error": "Invalid home services ID"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            home_services = HomeServices.objects.get(pk=pk)
            home_services.delete()
            if not HomeServices.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE home_homeservices AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeServices.DoesNotExist:
            return Response(
                {"error": "Invalid home services ID"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HomeAboutTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeAboutTitleSerializer
    queryset = HomeAboutTitle.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            about_section_title = HomeAboutTitle.objects.get(pk=pk)
            about_section_title.delete()
            if not HomeAboutTitle.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE home_homeabouttitle AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeAboutTitle.DoesNotExist:
            return Response(
                {"error": "Invalid about section title ID"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HomeAboutImageViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeAboutImageSerializer
    queryset = HomeAboutImage.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            about_section_image = HomeAboutImage.objects.get(pk=pk)
            about_section_image.delete()
            if not HomeAboutImage.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE home_homeaboutimage AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeAboutImage.DoesNotExist:
            return Response(
                {"error": "Invalid about section image ID"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HomeRatingViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeRatingSerializer
    queryset = HomeRating.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            rating = HomeRating.objects.get(pk=pk)
            rating.delete()
            if not HomeRating.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE home_homerating AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeRating.DoesNotExist:
            return Response(
                {"error": "Invalid rating ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HomeStatsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeStatsSerializer
    queryset = HomeStats.objects.all()

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                stat = HomeStats.objects.get(id=item["id"])
                stat.order = item["order"]
                stat.save()
            return Response(
                {"status": "Order updated successfully"}, status=status.HTTP_200_OK
            )
        except HomeStats.DoesNotExist:
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
            stat = HomeStats.objects.get(pk=pk)
            stat.delete()
            if not HomeStats.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE home_homestats AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeStats.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HomeRoomsTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeRoomsTitleSerializer
    queryset = HomeRoomsTitle.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            rooms_title = HomeRoomsTitle.objects.get(pk=pk)
            rooms_title.delete()
            if not HomeRoomsTitle.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE home_homeroomstitle AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeRoomsTitle.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HomeRoomsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeRoomsSerializer
    queryset = HomeRooms.objects.all()

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                rooms = HomeRooms.objects.get(id=item["id"])
                rooms.order = item["order"]
                rooms.save()
            return Response(
                {"status": "Order updated successfully"}, status=status.HTTP_200_OK
            )
        except HomeRooms.DoesNotExist:
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
            rooms = HomeRooms.objects.get(pk=pk)
            rooms.delete()
            if not HomeRooms.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE home_homerooms AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeRooms.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HomeExploreViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeExploreSerializer
    queryset = HomeExplore.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            explore = HomeExplore.objects.get(pk=pk)
            explore.delete()
            if not HomeExplore.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE home_homeexplore AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeExplore.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HomeEatSectionViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeEatSectionSerializer
    queryset = HomeEatSection.objects.all()

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                eat_section = HomeEatSection.objects.get(id=item["id"])
                eat_section.order = item["order"]
                eat_section.save()
            return Response(
                {"status": "Order updated successfully"}, status=status.HTTP_200_OK
            )
        except HomeEatSection.DoesNotExist:
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
            eat_section = HomeEatSection.objects.get(pk=pk)
            eat_section.delete()
            if not HomeEatSection.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE home_homeeatsection AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeEatSection.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HomeEatSectionContentViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeEatSectionContentSerializer
    queryset = HomeEatSectionContent.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            eat_section = HomeEatSectionContent.objects.get(pk=pk)
            eat_section.delete()
            if not HomeEatSectionContent.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE home_homeeatsectioncontent AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeEatSectionContent.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HomeGatherSectionViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeGatherSectionSerializer
    queryset = HomeGatherSection.objects.all()

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                gather_section = HomeGatherSection.objects.get(id=item["id"])
                gather_section.order = item["order"]
                gather_section.save()
            return Response(
                {"status": "Order updated successfully"}, status=status.HTTP_200_OK
            )
        except HomeGatherSection.DoesNotExist:
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
            gather_section = HomeGatherSection.objects.get(pk=pk)
            gather_section.delete()
            if not HomeGatherSection.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE home_homegathersection AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeGatherSection.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HomeGatherSectionContentViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeGatherSectionContentSerializer
    queryset = HomeGatherSectionContent.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            gather_section = HomeGatherSectionContent.objects.get(pk=pk)
            gather_section.delete()
            if not HomeGatherSectionContent.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE home_homegathersectioncontent AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeGatherSectionContent.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HomeTeamTitleSectionViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeTeamTitleSectionSerializer
    queryset = HomeTeamTitleSection.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            team_title_section = HomeTeamTitleSection.objects.get(pk=pk)
            team_title_section.delete()
            if not HomeTeamTitleSection.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE home_hometeamtitlesection AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeTeamTitleSection.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HomeTeamSectionViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeTeamSectionSerializer
    queryset = HomeTeamSection.objects.all()

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                team_section = HomeTeamSection.objects.get(id=item["id"])
                team_section.order = item["order"]
                team_section.save()
            return Response(
                {"status": "Order updated successfully"}, status=status.HTTP_200_OK
            )
        except HomeTeamSection.DoesNotExist:
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
            team_section = HomeTeamSection.objects.get(pk=pk)
            team_section.delete()
            if not HomeTeamSection.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE home_hometeamsection AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeTeamSection.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HomeBlogTitleSectionViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeBlogTitleSectionSerializer
    queryset = HomeBlogTitleSection.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            blog_title_section = HomeBlogTitleSection.objects.get(pk=pk)
            blog_title_section.delete()
            if not HomeBlogTitleSection.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE home_homeblogtitlesection AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeBlogTitleSection.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HomeBlogSectionViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = HomeBlogSectionSerializer
    queryset = HomeBlogSection.objects.all()

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                blog_section = HomeBlogSection.objects.get(id=item["id"])
                blog_section.order = item["order"]
                blog_section.save()
            return Response(
                {"status": "Order updated successfully"}, status=status.HTTP_200_OK
            )
        except HomeBlogSection.DoesNotExist:
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
            blog_section = HomeBlogSection.objects.get(pk=pk)
            blog_section.delete()
            if not HomeBlogSection.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute(
                        "ALTER TABLE home_homeblogsection AUTO_INCREMENT = 1"
                    )
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except HomeBlogSection.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )