from rest_framework import serializers
from .models import *

class TermsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Terms
        fields = [
            "id",
            "content",
        ]
        
class PrivacySerializer(serializers.ModelSerializer):
    class Meta:
        model = Privacy
        fields = [
            "id",
             "content",
        ]