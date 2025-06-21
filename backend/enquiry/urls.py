from django.urls import path
from .views import BookingCreateView, ContactCreateView

app_name = 'forms'

urlpatterns = [
    path('bookings/create/', BookingCreateView.as_view(), name='booking-create'),
    path('bookings/list/', BookingCreateView.as_view(), name='booking-list'),
    path('contact/create/', ContactCreateView.as_view(), name='contact-create'),
    path('contact/list/', ContactCreateView.as_view(), name='contact-list'),
]