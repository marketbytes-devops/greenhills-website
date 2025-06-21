from rest_framework import serializers
from .models import *

class EatPageCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = EatPageCreate
        fields = ["id", "title", "link"]

class EatBannerSerializer(serializers.ModelSerializer):
    eat_page_create = serializers.PrimaryKeyRelatedField(
        queryset=EatPageCreate.objects.all(), required=True, allow_null=False
    )
    eat_page_title = serializers.ReadOnlyField(source="eat_page_create.title")

    class Meta:
        model = EatBanner
        fields = [
            "id",
            "eat_page_create",
            "eat_page_title",
            "image",
            "title",
            "description",
        ]

    def validate_eat_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Eat page is required.")
        return value

class EatTimeSerializer(serializers.ModelSerializer):
    eat_page_create = serializers.PrimaryKeyRelatedField(
        queryset=EatPageCreate.objects.all(), required=True, allow_null=False
    )
    eat_page_title = serializers.ReadOnlyField(source="eat_page_create.title")

    class Meta:
        model = EatTime
        fields = [
            "id",
            "eat_page_create",
            "eat_page_title",
            "opening_time",
            "closing_time",
        ]

    def validate_eat_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Eat page is required.")
        return value

class EatMenuTabCreateSerializer(serializers.ModelSerializer):
    eat_page_create = serializers.PrimaryKeyRelatedField(
        queryset=EatPageCreate.objects.all(), required=True, allow_null=False
    )
    eat_page_title = serializers.ReadOnlyField(source="eat_page_create.title")

    class Meta:
        model = EatMenuTabCreate
        fields = [
            "id",
            "eat_page_create",
            "eat_page_title",
            "tab_name",
            "order",
        ]

    def validate_eat_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Eat page is required.")
        return value

class EatMenuTabItemsSerializer(serializers.ModelSerializer):
    eat_page_create = serializers.PrimaryKeyRelatedField(
        queryset=EatPageCreate.objects.all(), required=True, allow_null=False
    )
    tab_name = serializers.PrimaryKeyRelatedField(
        queryset=EatMenuTabCreate.objects.all(), required=True, allow_null=False
    )
    eat_page_title = serializers.ReadOnlyField(source="eat_page_create.title")
    tab_name_label = serializers.ReadOnlyField(source="tab_name.tab_name")

    class Meta:
        model = EatMenuTabItems
        fields = [
            "id",
            "eat_page_create",
            "eat_page_title",
            "tab_name",
            "tab_name_label",
            "image",
            "title",
            "description",
            "rating",
        ]

    def validate_eat_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Eat page is required.")
        return value

    def validate_tab_name(self, value):
        if not value:
            raise serializers.ValidationError("Tab name is required.")
        return value

class EatMenuTitleSerializer(serializers.ModelSerializer):
    eat_page_create = serializers.PrimaryKeyRelatedField(
        queryset=EatPageCreate.objects.all(), required=True, allow_null=False
    )
    eat_page_title = serializers.ReadOnlyField(source="eat_page_create.title")

    class Meta:
        model = EatMenuTitle
        fields = [
            "id",
            "eat_page_create",
            "eat_page_title",
            "title",
        ]

    def validate_eat_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Eat page is required.")
        return value

class EatMenuListingsSerializer(serializers.ModelSerializer):
    eat_page_create = serializers.PrimaryKeyRelatedField(
        queryset=EatPageCreate.objects.all(), required=True, allow_null=False
    )
    eat_page_title = serializers.ReadOnlyField(source="eat_page_create.title")

    class Meta:
        model = EatMenuListings
        fields = [
            "id",
            "eat_page_create",
            "eat_page_title",
            "image",
            "title",
            "description",
            "rating",
        ]

    def validate_eat_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Eat page is required.")
        return value

class EatAmenitiesTitleSerializer(serializers.ModelSerializer):
    eat_page_create = serializers.PrimaryKeyRelatedField(
        queryset=EatPageCreate.objects.all(), required=True, allow_null=False
    )
    eat_page_title = serializers.ReadOnlyField(source="eat_page_create.title")

    class Meta:
        model = EatAmenitiesTitle
        fields = [
            "id",
            "eat_page_create",
            "eat_page_title",
            "title",
            "description",
        ]

    def validate_eat_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Eat page is required.")
        return value

class EatAmenitiesListingsSerializer(serializers.ModelSerializer):
    eat_page_create = serializers.PrimaryKeyRelatedField(
        queryset=EatPageCreate.objects.all(), required=True, allow_null=False
    )
    eat_page_title = serializers.ReadOnlyField(source="eat_page_create.title")

    class Meta:
        model = EatAmenitiesListings
        fields = [
            "id",
            "eat_page_create",
            "eat_page_title",
            "image",
            "title",
            "order",
        ]

    def validate_eat_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Eat page is required.")
        return value

class EatExploreSerializer(serializers.ModelSerializer):
    eat_page_create = serializers.PrimaryKeyRelatedField(
        queryset=EatPageCreate.objects.all(), required=True, allow_null=False
    )
    eat_page_title = serializers.ReadOnlyField(source="eat_page_create.title")

    class Meta:
        model = EatExplore
        fields = [
            "id",
            "eat_page_create",
            "eat_page_title",
            "image",
            "title",
            "description",
        ]

    def validate_eat_page_create(self, value):
        if not value:
            raise serializers.ValidationError("Eat page is required.")
        return value