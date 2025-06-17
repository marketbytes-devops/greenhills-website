from rest_framework import serializers
from .models import *


class AboutBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutBanner
        fields = [
            "id",
            "image",
            "title",
            "description",
        ]


class AboutSectionTwoSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutSectionTwo
        fields = [
            "id",
            "image",
            "title",
            "description",
            "order",
        ]


class AboutSectionThreeTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutSectionThreeTitle
        fields = [
            "id",
            "title",
            "description",
        ]


class AboutSectionThreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutSectionThree
        fields = [
            "id",
            "image",
            "title",
            "order",
        ]


class AboutSectionFourSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutSectionFour
        fields = [
            "id",
            "image",
            "title",
        ]
        

class AboutSectionFiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutSectionFive
        fields = [
            "id",
            "image",
            "title",
            "description",
        ]