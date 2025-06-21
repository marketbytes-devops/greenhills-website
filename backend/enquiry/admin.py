from django.contrib import admin
from .models import Booking, Contact

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('name', 'mobile', 'room_type', 'checkin', 'checkout', 'adults', 'created_at')
    search_fields = ('name', 'mobile', 'room_type')
    list_filter = ('room_type', 'checkin', 'checkout')

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'created_at')
    search_fields = ('name', 'email', 'phone')
    list_filter = ('created_at',)
