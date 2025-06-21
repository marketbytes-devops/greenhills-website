from rest_framework import serializers
from .models import *


class GalleryBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryBanner
        fields = [
            "id",
            "image",
            "title",
        ]


class GalleryImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImages
        fields = [
            "id",
            "image",
            "order",
        ]
