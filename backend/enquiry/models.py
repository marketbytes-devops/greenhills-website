from django.db import models

class Booking(models.Model):
    name = models.CharField(max_length=255)
    mobile = models.CharField(max_length=15)
    room_type = models.CharField(max_length=100)
    checkin = models.DateField()
    checkout = models.DateField()
    adults = models.PositiveIntegerField()
    referer_url = models.URLField(max_length=500, blank=True, null=True)
    submitted_url = models.URLField(max_length=500, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.room_type}"

class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    message = models.TextField()
    recaptcha_response = models.CharField(max_length=255, blank=True)
    referer_url = models.URLField(max_length=500, blank=True, null=True)
    submitted_url = models.URLField(max_length=500, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"