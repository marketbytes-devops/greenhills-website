from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'gallery-banner', views.GalleryBannerViewSet, basename='gallery-banner')
router.register(r'gallery-images', views.GalleryImagesViewSet, basename='gallery-images')

urlpatterns = [
    path('', include(router.urls)),
]