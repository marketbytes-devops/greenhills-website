from rest_framework import serializers
from .models import *


class BlogBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogBanner
        fields = [
            "id",
            "image",
            "title",
        ]
        

class BlogPostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPosts
        fields = [
            "id",
            "image",
            "title",
            "description",
            "title_detailed_page",
            "content",
            "link",
        ]