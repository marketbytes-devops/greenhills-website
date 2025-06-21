from django.db import models
from django.core.validators import FileExtensionValidator, MinValueValidator


class GalleryBanner(models.Model):
    image = models.ImageField(
        upload_to="gallery/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )
    title = models.CharField(max_length=500, null=True, blank=True)

    def __str__(self):
        return self.title or "Gallery Banner"


class GalleryImages(models.Model):
    image = models.ImageField(
        upload_to="gallery/",
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
