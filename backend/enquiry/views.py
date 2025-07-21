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
                "Dear Hotel Green Hills Team,\n\n"
                "A new booking request has been received with the following details:\n\n"
                f"Name: {booking.name}\n"
                f"Mobile: {booking.mobile}\n"
                f"Room Type: {room_type_display}\n"
                f"Check-in: {booking.checkin}\n"
                f"Check-out: {booking.checkout}\n"
                f"Adults: {booking.adults}\n"
                f"Referer URL: {booking.referer_url or 'Not provided'}\n"
                f"Submitted URL: {booking.submitted_url or 'Not provided'}\n\n"
                "Please process this booking at your earliest convenience.\n\n"
                "Best regards,\n"
                "Hotel Green Hills Booking System\n\n"
                "Contact Us:\n"
                "Address: Statebank Road, Valparai, 642 127\n"
                "Phone: +91 9443 409 589 | +91 9092 392 391\n"
                "Landline: 04253 222862\n"
                "Website: https://www.hotelgreenhills.in"
            )
            from_email = settings.EMAIL_DEFAULT_FROM
            recipient_list = [settings.EMAIL_DEFAULT_FROM]
            bcc_list = settings.EMAIL_BCC

            try:
                email = EmailMessage(
                    subject=subject,
                    body=message,
                    from_email=from_email,
                    to=recipient_list,
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
                "Thank you for your booking request with Hotel Green Hills. We are pleased to inform you that your request has been successfully submitted.\n\n"
                f"Details of your request:\n"
                f"Name: {contact.name}\n"
                f"Email: {contact.email}\n"
                f"Phone: {contact.phone}\n"
                f"Message: {contact.message}\n\n"
                "Our team will review your request and get back to you shortly. For further assistance, please feel free to contact us:\n\n"
                "Contact Us:\n"
                "Address: Statebank Road, Valparai, 642 127\n"
                "Phone: +91 9443 409 589 | +91 9092 392 391\n"
                "Landline: 04253 222862\n"
                "Website: https://www.hotelgreenhills.in\n\n"
                "We look forward to welcoming you!\n\n"
                "Best regards,\n"
                "Hotel Green Hills Team"
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
                "Dear Hotel Green Hills Team,\n\n"
                "A new contact form submission has been received with the following details:\n\n"
                f"Name: {contact.name}\n"
                f"Email: {contact.email}\n"
                f"Phone: {contact.phone}\n"
                f"Message: {contact.message}\n"
                f"Referer URL: {contact.referer_url or 'Not provided'}\n"
                f"Submitted URL: {contact.submitted_url or 'Not provided'}\n\n"
                "Please address this inquiry at your earliest convenience.\n\n"
                "Best regards,\n"
                "Hotel Green Hills Contact System\n\n"
                "Contact Us:\n"
                "Address: Statebank Road, Valparai, 642 127\n"
                "Phone: +91 9443 409 589 | +91 9092 392 391\n"
                "Landline: 04253 222862\n"
                "Website: https://www.hotelgreenhills.in"
            )
            recipient_list = [settings.EMAIL_DEFAULT_FROM]
            bcc_list = settings.EMAIL_BCC

            try:
                admin_email = EmailMessage(
                    subject=admin_subject,
                    body=admin_message,
                    from_email=settings.EMAIL_DEFAULT_FROM,
                    to=recipient_list,
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