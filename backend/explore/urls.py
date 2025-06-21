from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'explore-banner', views.ExploreBannerViewSet, basename='explore-banner')
router.register(r'explore-section-two', views.ExploreSectionTwoViewSet, basename='explore-section-two')
router.register(r'explore-section-three-title', views.ExploreSectionThreeTitleViewSet, basename='explore-section-three-title')
router.register(r'explore-section-three', views.ExploreSectionThreeViewSet, basename='explore-section-three')

urlpatterns = [
    path('', include(router.urls)),
]