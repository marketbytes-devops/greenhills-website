from rest_framework import serializers
from .models import *


class HomeBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeBanner
        fields = [
            "id",
            "image",
            "title",
            "description",
            "order",
        ]


class HomeServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeServices
        fields = [
            "id",
            "image",
            "title",
            "order",
        ]


class HomeAboutTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeAboutTitle
        fields = [
            "id",
            "title",
            "description",
            "link"
        ]


class HomeAboutImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeAboutImage
        fields = [
            "id",
            "image",
        ]


class HomeRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeRating
        fields = [
            "id",
            "description",
            "starRating",
            "label",
            "score",
        ]


class HomeStatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeStats
        fields = [
            "id",
            "value",
            "label",
            "order",
        ]


class HomeRoomsTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeRoomsTitle
        fields = [
            "id",
            "title",
            "description",
            "link",
        ]


class HomeRoomsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeRooms
        fields = [
            "id",
            "index",
            "image",
            "title",
            "description",
            "link",
            "order",
        ]


class HomeExploreSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeExplore
        fields = [
            "id",
            "image",
            "title",
            "description",
        ]


class HomeEatSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeEatSection
        fields = [
            "id",
            "image",
            "title",
            "description",
            "link",
            "order",
        ]


class HomeEatSectionContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeEatSectionContent
        fields = [
            "id",
            "title",
            "description",
            "link",
        ]


class HomeGatherSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeGatherSection
        fields = [
            "id",
            "image",
            "title",
            "description",
            "link",
            "order",
        ]


class HomeGatherSectionContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeGatherSectionContent
        fields = [
            "id",
            "title",
            "description",
            "link",
        ]


class HomeTeamTitleSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeTeamTitleSection
        fields = [
            "id",
            "title",
        ]


class HomeTeamSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeTeamSection
        fields = ["id", "image", "name", "role", "testimonial", "order"]


class HomeBlogTitleSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeBlogTitleSection
        fields = ["id", "title", "description"]


class HomeBlogSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeBlogSection
        fields = ["id", "image", "title", "date", "link", "order"]
