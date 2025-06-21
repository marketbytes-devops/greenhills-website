from django.db import models
from django.core.validators import FileExtensionValidator, MinValueValidator


class HomeBanner(models.Model):
    image = models.ImageField(
        upload_to="home/",
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
        return self.title or "Home Banner"

    class Meta:
        ordering = ["order"]


class HomeServices(models.Model):
    image = models.ImageField(
        upload_to="home/",
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
        return self.title or "Home Services"

    class Meta:
        ordering = ["order"]


class HomeAboutTitle(models.Model):
    title = models.CharField(max_length=500, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    link = models.CharField(max_length=255, null=True, blank=True)
    
    def __str__(self):
        return self.title or "Home About Title"


class HomeAboutImage(models.Model):
    image = models.ImageField(
        upload_to="home/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )


class HomeRating(models.Model):
    description = models.TextField(null=True, blank=True)
    starRating = models.IntegerField(default=0, null=True, blank=True)
    label = models.CharField(max_length=500, null=True, blank=True)
    score = models.CharField(max_length=10, null=True, blank=True)

    def __str__(self):
        return self.label or "Home Rating"


class HomeStats(models.Model):
    value = models.CharField(max_length=100, null=True, blank=True)
    label = models.CharField(max_length=500, null=True, blank=True)
    order = models.IntegerField(default=0, validators=[MinValueValidator(0)])

    def __str__(self):
        return self.label or "Home Stats"

    class Meta:
        ordering = ["order"]


class HomeRoomsTitle(models.Model):
    title = models.CharField(max_length=500, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    link = models.CharField(max_length=255, null=True, blank=True)
    
    def __str__(self):
        return self.title or "Home Rooms Title"


class HomeRooms(models.Model):
    image = models.ImageField(
        upload_to="home/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )
    index = models.CharField(max_length=100, null=True, blank=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    link = models.CharField(max_length=255, null=True, blank=True)
    order = models.IntegerField(default=0, validators=[MinValueValidator(0)])

    def __str__(self):
        return self.title or "Home Rooms"

    class Meta:
        ordering = ["order"]


class HomeExplore(models.Model):
    image = models.ImageField(
        upload_to="home/",
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
        return self.title or "Home Explore"


class HomeEatSection(models.Model):
    image = models.ImageField(
        upload_to="home/",
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
    order = models.IntegerField(default=0, validators=[MinValueValidator(0)])

    def __str__(self):
        return self.title or "Home Eat Listing"

    class Meta:
        ordering = ["order"]


class HomeEatSectionContent(models.Model):
    title = models.CharField(max_length=500, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    link = models.SlugField(max_length=255, unique=True, null=True, blank=True)

    def __str__(self):
        return self.title or "Home Eat Content"


class HomeGatherSection(models.Model):
    image = models.ImageField(
        upload_to="home/",
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
    order = models.IntegerField(default=0, validators=[MinValueValidator(0)])

    def __str__(self):
        return self.title or "Home Gather Listing"

    class Meta:
        ordering = ["order"]


class HomeGatherSectionContent(models.Model):
    title = models.CharField(max_length=500, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    link = models.SlugField(max_length=255, unique=True, null=True, blank=True)

    def __str__(self):
        return self.title or "Home Gather Content"


class HomeTeamTitleSection(models.Model):
    title = models.CharField(max_length=500, null=True, blank=True)

    def __str__(self):
        return self.title or "Home Team Title"


class HomeTeamSection(models.Model):
    image = models.ImageField(
        upload_to="home/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )
    name = models.CharField(max_length=500, null=True, blank=True)
    role = models.CharField(max_length=500, null=True, blank=True)
    testimonial = models.TextField(null=True, blank=True)
    order = models.IntegerField(default=0, validators=[MinValueValidator(0)])
    
    def __str__(self):
        return self.name or "Home Team Member"

    class Meta:
        ordering = ["order"]
        
        
class HomeBlogTitleSection(models.Model):
    title = models.CharField(max_length=500, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return self.title or "Home Blog Title"


class HomeBlogSection(models.Model):
    image = models.ImageField(
        upload_to="home/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["png", "jpg", "jpeg", "webp", "gif"]
            )
        ],
    )
    title = models.CharField(max_length=500, null=True, blank=True)
    date = models.DateField(null=True, blank=True)
    link = models.SlugField(max_length=255, unique=True, null=True, blank=True)
    order = models.IntegerField(default=0, validators=[MinValueValidator(0)])
    
    def __str__(self):
        return self.title or "Home Blog Member"

    class Meta:
        ordering = ["order"]