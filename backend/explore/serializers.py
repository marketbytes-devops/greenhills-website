from rest_framework import serializers
from .models import *


class ExploreBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExploreBanner
        fields = [
            "id",
            "image",
            "title",
            "description",
        ]
        
        
class ExploreSectionTwoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExploreSectionTwo
        fields = [
            "id",
            "image",
            "title",
            "description",
            "order",
        ]


class ExploreSectionThreeTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExploreSectionThreeTitle
        fields = [
            "id",
            "title",
            "description",
        ]


class ExploreSectionThreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExploreSectionThree
        fields = [
            "id",
            "image",
            "order",
        ]