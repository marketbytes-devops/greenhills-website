from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'about-banner', views.AboutBannerViewSet, basename='about-banner')
router.register(r'about-section-two', views.AboutSectionTwoViewSet, basename='about-section-two')
router.register(r'about-section-three-title', views.AboutSectionThreeTitleViewSet, basename='about-section-three-title')
router.register(r'about-section-three', views.AboutSectionThreeViewSet, basename='about-section-three')
router.register(r'about-section-four', views.AboutSectionFourViewSet, basename='about-section-four')
router.register(r'about-section-five', views.AboutSectionFiveViewSet, basename='about-section-five')

urlpatterns = [
    path('', include(router.urls)),
]