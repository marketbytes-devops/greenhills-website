from django.db import models

class Terms(models.Model):
    content = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.content or "Content"

class Privacy(models.Model):
    content = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.content or "Content"