from rest_framework import serializers
from .models import *


class AdditionalSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdditionalSettings
        fields = [
            "id",
            "description",
            "location",
            "phone_one",
            "phone_two",
            "email",
        ]
