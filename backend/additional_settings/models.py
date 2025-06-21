from django.db import models

class AdditionalSettings(models.Model):
    description = models.TextField(null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    phone_one = models.CharField(max_length=255, null=True, blank=True)
    phone_two = models.CharField(max_length=255, null=True, blank=True)
    email = models.CharField(max_length=255, null=True, blank=True)
    
    def __str__(self):
        return self.title or "Home About Title"
