from django.db import models
from django.core.validators import FileExtensionValidator, MinValueValidator

class EatPageCreate(models.Model):
    title = models.CharField(max_length=500, null=True, blank=True)
    link = models.SlugField(max_length=255, unique=True, null=True, blank=True)

    def __str__(self):
        return self.title or "Eat Page Title"

class EatBanner(models.Model):
    eat_page_create = models.ForeignKey(
        EatPageCreate, related_name="eat_banner", on_delete=models.CASCADE
    )
    image = models.ImageField(
        upload_to="eat/",
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
        return self.title or "Eat Banner"

class EatTime(models.Model):
    eat_page_create = models.ForeignKey(
        EatPageCreate, related_name="eat_time", on_delete=models.CASCADE
    )
    opening_time = models.TextField(null=True, blank=True)
    closing_time = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"Time for {self.eat_page_create.title or 'Eat Page'}"

class EatMenuTabCreate(models.Model):
    eat_page_create = models.ForeignKey(
        EatPageCreate, related_name="eat_menu_tab_create", on_delete=models.CASCADE
    )
    tab_name = models.CharField(max_length=500, null=True, blank=True)
    order = models.PositiveIntegerField(default=0, validators=[MinValueValidator(0)])

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.tab_name or "Eat Menu Tab"

class EatMenuTabItems(models.Model):
    eat_page_create = models.ForeignKey(
        EatPageCreate, related_name="eat_menu_tab_items", on_delete=models.CASCADE
    )
    tab_name = models.ForeignKey(
        EatMenuTabCreate, related_name="menu_items", on_delete=models.CASCADE
    )
    image = models.ImageField(
        upload_to="eat/",
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
    rating = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.title or "Eat Menu Tab Item"

class EatMenuTitle(models.Model):
    eat_page_create = models.ForeignKey(
        EatPageCreate, related_name="eat_menu_title", on_delete=models.CASCADE
    )
    title = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title or "Eat Menu Title"

class EatMenuListings(models.Model):
    eat_page_create = models.ForeignKey(
        EatPageCreate, related_name="eat_menu_listings", on_delete=models.CASCADE
    )
    image = models.ImageField(
        upload_to="eat/",
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
    rating = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.title or "Eat Menu Listing"

class EatAmenitiesTitle(models.Model):
    eat_page_create = models.ForeignKey(
        EatPageCreate, related_name="eat_amenities_title", on_delete=models.CASCADE
    )
    title = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title or "Eat Amenities Title"

class EatAmenitiesListings(models.Model):
    eat_page_create = models.ForeignKey(
        EatPageCreate, related_name="eat_amenities_listings", on_delete=models.CASCADE
    )
    image = models.ImageField(
        upload_to="eat/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )
    title = models.TextField(null=True, blank=True)
    order = models.PositiveIntegerField(default=0, validators = [MinValueValidator(0)])

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title or "Eat Amenity Listing"

class EatExplore(models.Model):
    eat_page_create = models.ForeignKey(
        EatPageCreate, related_name="eat_explore", on_delete=models.CASCADE
    )
    image = models.ImageField(
        upload_to="eat/",
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

    def __str__(self):
        return self.title or "Eat Explore Item"