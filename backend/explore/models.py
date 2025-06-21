from django.db import models
from django.core.validators import FileExtensionValidator, MinValueValidator


class ExploreBanner(models.Model):
    image = models.ImageField(
        upload_to="explore/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )
    title = models.CharField(max_length=500, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title or "Explore Banner"
    
    
class ExploreSectionTwo(models.Model):
    image = models.ImageField(
        upload_to="explore/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )
    title = models.CharField(max_length=500, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    order = models.IntegerField(default=0, validators=[MinValueValidator(0)])

    def __str__(self):
        return self.title or "Explore Section Two"

    class Meta:
        ordering = ["order"]


class ExploreSectionThreeTitle(models.Model):
    title = models.CharField(max_length=500, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title or "Explore Section Three Title"


class ExploreSectionThree(models.Model):
    image = models.ImageField(
        upload_to="explore/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )
    order = models.IntegerField(default=0, validators=[MinValueValidator(0)])

    class Meta:
        ordering = ["order"]