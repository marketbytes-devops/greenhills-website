from rest_framework import serializers
from .models import *


class GatherPageCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = GatherPageCreate
        fields = ["id", "title", "link"]


class GatherBannerSerializer(serializers.ModelSerializer):
    gather_page_create = serializers.PrimaryKeyRelatedField(
        queryset=GatherPageCreate.objects.all(), required=True, allow_null=False
    )
    gather_page_title = serializers.ReadOnlyField(source="gather_page_create.title")

    class Meta:
        model = GatherBanner
        fields = [
            "id",
            "gather_page_create",
            "gather_page_title",
            "image",
            "title",
            "description",
        ]

    def validate_gather_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Gather page is required.")
        return value


class GatherHighlightsTitleSerializer(serializers.ModelSerializer):
    gather_page_create = serializers.PrimaryKeyRelatedField(
        queryset=GatherPageCreate.objects.all(), required=True, allow_null=False
    )
    gather_page_title = serializers.ReadOnlyField(source="gather_page_create.title")

    class Meta:
        model = GatherHighlightsTitle
        fields = [
            "id",
            "gather_page_create",
            "gather_page_title",
            "title",
            "description",
        ]

    def validate_gather_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Gather page is required.")
        return value


class GatherHighlightsSerializer(serializers.ModelSerializer):
    gather_page_create = serializers.PrimaryKeyRelatedField(
        queryset=GatherPageCreate.objects.all(), required=True, allow_null=False
    )
    gather_page_title = serializers.ReadOnlyField(source="gather_page_create.title")

    class Meta:
        model = GatherHighlights
        fields = [
            "id",
            "gather_page_create",
            "gather_page_title",
            "image",
            "title",
            "description",
            "order",
        ]

    def validate_gather_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Gather page is required.")
        return value


class GatherServicesSerializer(serializers.ModelSerializer):
    gather_page_create = serializers.PrimaryKeyRelatedField(
        queryset=GatherPageCreate.objects.all(), required=True, allow_null=False
    )
    gather_page_title = serializers.ReadOnlyField(source="gather_page_create.title")

    class Meta:
        model = GatherServices
        fields = [
            "id",
            "gather_page_create",
            "gather_page_title",
            "image",
            "title",
            "description",
            "order",
        ]

    def validate_gather_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Gather page is required.")
        return value


class GatherAmenitiesTitleSerializer(serializers.ModelSerializer):
    gather_page_create = serializers.PrimaryKeyRelatedField(
        queryset=GatherPageCreate.objects.all(), required=True, allow_null=False
    )
    gather_page_title = serializers.ReadOnlyField(source="gather_page_create.title")

    class Meta:
        model = GatherAmenitiesTitle
        fields = [
            "id",
            "gather_page_create",
            "gather_page_title",
            "title",
            "description",
        ]

    def validate_gather_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Gather page is required.")
        return value


class GatherAmenitiesListingsSerializer(serializers.ModelSerializer):
    gather_page_create = serializers.PrimaryKeyRelatedField(
        queryset=GatherPageCreate.objects.all(), required=True, allow_null=False
    )
    gather_page_title = serializers.ReadOnlyField(source="gather_page_create.title")

    class Meta:
        model = GatherAmenitiesListings
        fields = [
            "id",
            "gather_page_create",
            "gather_page_title",
            "image",
            "title",
            "order",
        ]

    def validate_gather_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Gather page is required.")
        return value


class GatherExploreSerializer(serializers.ModelSerializer):
    gather_page_create = serializers.PrimaryKeyRelatedField(
        queryset=GatherPageCreate.objects.all(), required=True, allow_null=False
    )
    gather_page_title = serializers.ReadOnlyField(source="gather_page_create.title")

    class Meta:
        model = GatherExplore
        fields = [
            "id",
            "gather_page_create",
            "gather_page_title",
            "image",
            "title",
            "link",
        ]

    def validate_gather_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Gather page is required.")
        return value