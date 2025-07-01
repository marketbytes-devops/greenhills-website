from django.db import models
from django.core.validators import FileExtensionValidator, MinValueValidator


class BlogBanner(models.Model):
    image = models.ImageField(
        upload_to="blog/",
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
        return self.title or "Blog Banner"


class BlogPosts(models.Model):
    image = models.ImageField(
        upload_to="blog/",
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
    title_detailed_page = models.CharField(max_length=500, null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    link = models.SlugField(max_length=255, unique=True, null=True, blank=True)
    
    def __str__(self):
        return self.title or "Blog Posts"
