from rest_framework import serializers
from .models import *


class StayRoomsTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = StayRoomsTitle
        fields = ["id", "title", "description", "link"]


class StayRoomsListingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = StayRoomsListings
        fields = ["id", "image", "title", "description", "link"]


class StayPageCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = StayPageCreate
        fields = ["id", "title", "link"]


class StayBannerSerializer(serializers.ModelSerializer):
    stay_page_create = serializers.PrimaryKeyRelatedField(
        queryset=StayPageCreate.objects.all(), required=True, allow_null=False
    )
    stay_page_title = serializers.ReadOnlyField(source="stay_page_create.title")

    class Meta:
        model = StayBanner
        fields = [
            "id",
            "stay_page_create",
            "stay_page_title",
            "image",
            "title",
            "description",
        ]

    def validate_stay_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Stay page is required.")
        return value


class StayHighlightsSerializer(serializers.ModelSerializer):
    stay_page_create = serializers.PrimaryKeyRelatedField(
        queryset=StayPageCreate.objects.all(), required=True, allow_null=False
    )
    stay_page_title = serializers.ReadOnlyField(source="stay_page_create.title")

    class Meta:
        model = StayHighlights
        fields = [
            "id",
            "stay_page_create",
            "stay_page_title",
            "image",
            "title",
            "original_price",
            "discounted_price",
            "rating",
            "description",
            "order",
        ]

    def validate_stay_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Stay page is required.")
        return value


class StayAmenitiesTitleSerializer(serializers.ModelSerializer):
    stay_page_create = serializers.PrimaryKeyRelatedField(
        queryset=StayPageCreate.objects.all(), required=True, allow_null=False
    )
    stay_page_title = serializers.ReadOnlyField(source="stay_page_create.title")

    class Meta:
        model = StayAmenitiesTitle
        fields = ["id", "stay_page_create", "stay_page_title", "title", "description"]

    def validate_stay_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Stay page is required.")
        return value


class StayAmenitiesListingsSerializer(serializers.ModelSerializer):
    stay_page_create = serializers.PrimaryKeyRelatedField(
        queryset=StayPageCreate.objects.all(), required=True, allow_null=False
    )
    stay_page_title = serializers.ReadOnlyField(source="stay_page_create.title")

    class Meta:
        model = StayAmenitiesListings
        fields = [
            "id",
            "stay_page_create",
            "stay_page_title",
            "image",
            "title",
            "order",
        ]

    def validate_stay_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Stay page is required.")
        return value


class StayExploreSerializer(serializers.ModelSerializer):
    stay_page_create = serializers.PrimaryKeyRelatedField(
        queryset=StayPageCreate.objects.all(), required=True, allow_null=False
    )
    stay_page_title = serializers.ReadOnlyField(source="stay_page_create.title")

    class Meta:
        model = StayExplore
        fields = [
            "id",
            "stay_page_create",
            "stay_page_title",
            "image",
            "title",
            "link",
        ]

    def validate_stay_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Stay page is required.")
        return value


class StayGallerySerializer(serializers.ModelSerializer):
    stay_page_create = serializers.PrimaryKeyRelatedField(
        queryset=StayPageCreate.objects.all(), required=True, allow_null=False
    )
    stay_page_title = serializers.ReadOnlyField(source="stay_page_create.title")

    class Meta:
        model = StayGallery
        fields = ["id", "stay_page_create", "stay_page_title", "image"]

    def validate_stay_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Stay page is required.")
        return value