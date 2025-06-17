from django.db import models
from django.core.validators import FileExtensionValidator, MinValueValidator


class AboutBanner(models.Model):
    image = models.ImageField(
        upload_to="about/",
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
        return self.title or "About Banner"


class AboutSectionTwo(models.Model):
    image = models.ImageField(
        upload_to="about/",
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
        return self.title or "About Section Two"

    class Meta:
        ordering = ["order"]


class AboutSectionThreeTitle(models.Model):
    title = models.CharField(max_length=500, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title or "About Section Three Title"


class AboutSectionThree(models.Model):
    image = models.ImageField(
        upload_to="about/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )
    title = models.CharField(max_length=500, null=True, blank=True)
    order = models.IntegerField(default=0, validators=[MinValueValidator(0)])

    def __str__(self):
        return self.title or "About Section Three"

    class Meta:
        ordering = ["order"]


class AboutSectionFour(models.Model):
    image = models.ImageField(
        upload_to="about/",
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
        return self.title or "About Section Four"


class AboutSectionFive(models.Model):
    image = models.ImageField(
        upload_to="about/",
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
        return self.title or "About Section Five"
