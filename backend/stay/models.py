from django.db import models
from django.core.validators import FileExtensionValidator, MinValueValidator


class StayRoomsTitle(models.Model):
    title = models.CharField(max_length=500, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    link = models.SlugField(max_length=255, unique=True, null=True, blank=True)

    def __str__(self):
        return self.title or "Stay Rooms Listings Title"


class StayRoomsListings(models.Model):
    image = models.ImageField(
        upload_to="stay/",
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
    link = models.SlugField(max_length=255, unique=True, null=True, blank=True)

    def __str__(self):
        return self.title or "Stay Rooms Listings"


class StayPageCreate(models.Model):
    title = models.CharField(max_length=500, null=True, blank=True)
    link = models.SlugField(max_length=255, unique=True, null=True, blank=True)

    def __str__(self):
        return self.title or "Stay Page Title"


class StayBanner(models.Model):
    stay_page_create = models.ForeignKey(
        StayPageCreate, related_name="stay_banner", on_delete=models.CASCADE
    )
    image = models.ImageField(
        upload_to="stay/",
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
        return self.title or "Stay Banner"


class StayHighlights(models.Model):
    stay_page_create = models.ForeignKey(
        StayPageCreate, related_name="stay_highlights", on_delete=models.CASCADE
    )
    image = models.ImageField(
        upload_to="stay/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )
    title = models.TextField(null=True, blank=True)
    original_price = models.CharField(max_length=50, null=True, blank=True)
    discounted_price = models.CharField(max_length=50, null=True, blank=True)
    rating = models.CharField(max_length=50, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    order = models.PositiveIntegerField(default=0, validators=[MinValueValidator(0)])

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title or "Stay Highlight"


class StayAmenitiesTitle(models.Model):
    stay_page_create = models.ForeignKey(
        StayPageCreate, related_name="stay_amenities_title", on_delete=models.CASCADE
    )
    title = models.TextField(null=False, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title or "Amenities Title"


class StayAmenitiesListings(models.Model):
    stay_page_create = models.ForeignKey(
        StayPageCreate, related_name="amenities_listings", on_delete=models.CASCADE
    )
    image = models.ImageField(
        upload_to="stay/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )
    title = models.TextField(null=False, blank=True)
    order = models.PositiveIntegerField(default=0, validators=[MinValueValidator(0)])

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title or "Amenity Listing"


class StayExplore(models.Model):
    stay_page_create = models.ForeignKey(
        StayPageCreate, related_name="explore", on_delete=models.CASCADE
    )
    image = models.ImageField(
        upload_to="stay/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )
    title = models.TextField(null=True, blank=True)
    link = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.title or "Explore Item"


class StayGallery(models.Model):
    stay_page_create = models.ForeignKey(
        StayPageCreate, related_name="gallery", on_delete=models.CASCADE
    )
    image = models.ImageField(
        upload_to="stay/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )

    def __str__(self):
        return f"Gallery Image for {self.stay_page_create.title}"