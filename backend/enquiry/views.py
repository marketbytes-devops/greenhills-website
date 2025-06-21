from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import BookingSerializer, ContactSerializer
from .models import Booking, Contact
from stay.models import StayPageCreate
from django.core.mail import EmailMessage
from django.conf import settings
import requests
import logging

logger = logging.getLogger(__name__)

class BookingCreateView(APIView):
    def post(self, request):
        logger.info('Received booking request: %s', request.data)
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            booking = serializer.save()
            try:
                stay_page = StayPageCreate.objects.get(link=booking.room_type)
                room_type_display = stay_page.title
            except StayPageCreate.DoesNotExist:
                room_type_display = booking.room_type  

            subject = 'New Booking Request'
            message = (
                f"New Booking Details:\n\n"
                f"Name: {booking.name}\n"
                f"Mobile: {booking.mobile}\n"
                f"Room Type: {room_type_display}\n"  
                f"Check-in: {booking.checkin}\n"
                f"Check-out: {booking.checkout}\n"
                f"Adults: {booking.adults}\n"
                f"Referer URL: {booking.referer_url or 'Not provided'}\n"
                f"Submitted URL: {booking.submitted_url or 'Not provided'}\n"
            )
            from_email = settings.EMAIL_DEFAULT_FROM
            recipient_list = [settings.EMAIL_DEFAULT_FROM]
            cc_list = settings.EMAIL_CC
            bcc_list = settings.EMAIL_BCC

            try:
                email = EmailMessage(
                    subject=subject,
                    body=message,
                    from_email=from_email,
                    to=recipient_list,
                    cc=cc_list,
                    bcc=bcc_list,
                )
                email.send(fail_silently=False)
                logger.info('Booking email sent successfully to %s', recipient_list)
                return Response({'message': 'Booking submitted successfully!'}, status=status.HTTP_201_CREATED)
            except Exception as e:
                logger.error('Failed to send booking email: %s', str(e))
                return Response({'message': 'Booking submitted successfully!'}, status=status.HTTP_201_CREATED)
        logger.error('Booking serializer errors: %s', serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        if not request.user.is_authenticated:
            return Response({'error': 'Authentication required'}, status=status.HTTP_401_UNAUTHORIZED)
        bookings = Booking.objects.all()
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class ContactCreateView(APIView):
    def post(self, request):
        logger.info('Received contact request: %s', request.data)
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            recaptcha_response = request.data.get('g-recaptcha-response')
            if not recaptcha_response:
                logger.error('reCAPTCHA verification required')
                return Response({'error': 'reCAPTCHA verification required'}, status=status.HTTP_400_BAD_REQUEST)

            recaptcha_secret = settings.EMAIL_RECAPTCHA_SECRET
            recaptcha_verify_url = 'https://www.google.com/recaptcha/api/siteverify'
            recaptcha_data = {
                'secret': recaptcha_secret,
                'response': recaptcha_response,
            }
            recaptcha_response = requests.post(recaptcha_verify_url, data=recaptcha_data)
            recaptcha_result = recaptcha_response.json()

            if not recaptcha_result.get('success'):
                logger.error('reCAPTCHA verification failed: %s', recaptcha_result)
                return Response({'error': 'reCAPTCHA verification failed'}, status=status.HTTP_400_BAD_REQUEST)

            contact = serializer.save()

            user_subject = 'Booking Confirmation'
            user_message = (
                f"Dear {contact.name},\n\n"
                f"Your booking has been submitted successfully!\n"
                f"Please visit our website for more details: https://www.hotelgreenhills.in\n\n"
                f"Thank you for choosing us!\n"
                f"Best regards,\n"
                f"Hotel Green Hills Team"
            )
            try:
                user_email = EmailMessage(
                    subject=user_subject,
                    body=user_message,
                    from_email=settings.EMAIL_DEFAULT_FROM,
                    to=[contact.email],
                )
                user_email.send(fail_silently=False)
                logger.info('Confirmation email sent to %s', contact.email)
            except Exception as e:
                logger.error('Failed to send confirmation email to %s: %s', contact.email, str(e))

            admin_subject = 'New Contact Form Submission'
            admin_message = (
                f"New Contact Details:\n\n"
                f"Name: {contact.name}\n"
                f"Email: {contact.email}\n"
                f"Phone: {contact.phone}\n"
                f"Message: {contact.message}\n"
                f"Referer URL: {contact.referer_url or 'Not provided'}\n"
                f"Submitted URL: {contact.submitted_url or 'Not provided'}\n"
            )
            recipient_list = [settings.EMAIL_DEFAULT_FROM]
            cc_list = settings.EMAIL_CC
            bcc_list = settings.EMAIL_BCC

            try:
                admin_email = EmailMessage(
                    subject=admin_subject,
                    body=admin_message,
                    from_email=settings.EMAIL_DEFAULT_FROM,
                    to=recipient_list,
                    cc=cc_list,
                    bcc=bcc_list,
                )
                admin_email.send(fail_silently=False)
                logger.info('Contact email sent successfully to %s', recipient_list)
            except Exception as e:
                logger.error('Failed to send contact email: %s', str(e))

            return Response({'message': 'Form submitted successfully!'}, status=status.HTTP_201_CREATED)
        logger.error('Contact serializer errors: %s', serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        if not request.user.is_authenticated:
            return Response({'error': 'Authentication required'}, status=status.HTTP_401_UNAUTHORIZED)
        contacts = Contact.objects.all()
        serializer = ContactSerializer(contacts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)