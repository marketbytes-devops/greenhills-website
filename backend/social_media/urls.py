from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'social-media-links', views.SocialMediaLinksViewSet, basename='social-media-links')

urlpatterns = [
    path('', include(router.urls)),
]