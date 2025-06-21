from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("authapp.urls")),
    path("api/home/", include("home.urls")),
    path("api/about/", include("about.urls")),
    path("api/stay/", include("stay.urls")),
    path("api/eat/", include("eat.urls")),
    path('api/gather/', include('gather.urls')),
    path("api/blog/", include("blog.urls")),
    path("api/explore/", include("explore.urls")),
    path("api/gallery/", include("gallery.urls")),
    path("api/social-media/", include("social_media.urls")),
    path("api/additional-settings/", include("additional_settings.urls")),
    path("api/enquiry/", include("enquiry.urls")),
    path("api/terms-and-privacy/", include("terms_and_privacy.urls")),
    path("documentation/", include("documentation.urls")),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)