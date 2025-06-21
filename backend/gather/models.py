from django.db import models
from django.core.validators import FileExtensionValidator, MinValueValidator


class GatherPageCreate(models.Model):
    title = models.CharField(max_length=500, null=True, blank=True)
    link = models.SlugField(max_length=255, unique=True, null=True, blank=True)

    def __str__(self):
        return self.title or "Gather Page Title"


class GatherBanner(models.Model):
    gather_page_create = models.ForeignKey(
        GatherPageCreate, related_name="gather_banner", on_delete=models.CASCADE
    )
    image = models.ImageField(
        upload_to="gather/",
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
        return self.title or "Gather Banner"


class GatherHighlightsTitle(models.Model):
    gather_page_create = models.ForeignKey(
        GatherPageCreate, related_name="gather_highlights_title", on_delete=models.CASCADE
    )
    title = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title or "Gather Highlight Title"


class GatherHighlights(models.Model):
    gather_page_create = models.ForeignKey(
        GatherPageCreate, related_name="gather_highlights", on_delete=models.CASCADE
    )
    image = models.ImageField(
        upload_to="gather/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )
    title = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    order = models.PositiveIntegerField(default=0, validators=[MinValueValidator(0)])

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title or "Gather Highlight"


class GatherServices(models.Model):
    gather_page_create = models.ForeignKey(
        GatherPageCreate, related_name="gather_services", on_delete=models.CASCADE
    )
    image = models.ImageField(
        upload_to="gather/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )
    title = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    order = models.PositiveIntegerField(default=0, validators=[MinValueValidator(0)])

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title or "Gather Service"


class GatherAmenitiesTitle(models.Model):
    gather_page_create = models.ForeignKey(
        GatherPageCreate, related_name="gather_amenities_title", on_delete=models.CASCADE
    )
    title = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title or "Gather Amenities Title"


class GatherAmenitiesListings(models.Model):
    gather_page_create = models.ForeignKey(
        GatherPageCreate, related_name="gather_amenities_listings", on_delete=models.CASCADE
    )
    image = models.ImageField(
        upload_to="gather/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )
    title = models.TextField(null=True, blank=True)
    order = models.PositiveIntegerField(default=0, validators=[MinValueValidator(0)])

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title or "Gather Amenity Listing"


class GatherExplore(models.Model):
    gather_page_create = models.ForeignKey(
        GatherPageCreate, related_name="gather_explore", on_delete=models.CASCADE
    )
    image = models.ImageField(
        upload_to="gather/",
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
        return self.title or "Gather Explore Item"