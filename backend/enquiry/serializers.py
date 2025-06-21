from rest_framework import serializers
from .models import Booking, Contact
from stay.models import StayPageCreate

class BookingSerializer(serializers.ModelSerializer):
    room_type_title = serializers.SerializerMethodField()  

    class Meta:
        model = Booking
        fields = ['id', 'name', 'mobile', 'room_type', 'room_type_title', 'checkin', 'checkout', 'adults', 'referer_url', 'submitted_url', 'created_at']
        extra_kwargs = {
            'email': {'required': False, 'allow_null': True, 'allow_blank': True}
        }

    def validate_room_type(self, value):
        """
        Ensure room_type matches a valid StayPageCreate.link.
        """
        if not StayPageCreate.objects.filter(link=value).exists():
            raise serializers.ValidationError("Invalid room type. Please select a valid room.")
        return value

    def get_room_type_title(self, obj):
        """
        Return the title of the StayPageCreate record for the room_type (link).
        """
        try:
            stay_page = StayPageCreate.objects.get(link=obj.room_type)
            return stay_page.title
        except StayPageCreate.DoesNotExist:
            return obj.room_type

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'phone', 'message', 'recaptcha_response', 'referer_url', 'submitted_url', 'created_at']