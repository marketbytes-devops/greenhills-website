from rest_framework import serializers
from .models import *

class SocialMediaLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMediaLinks
        fields = ["id", "facebook", "whatsapp", "youtube", "instagram", "twitter"]