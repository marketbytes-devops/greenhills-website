from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'stay-rooms-title', views.StayRoomsTitleViewSet, basename='stay-rooms-title')
router.register(r'stay-rooms-listings', views.StayRoomsListingsViewSet, basename='stay-rooms-listings')
router.register(r'stay-page-create', views.StayPageCreateViewSet, basename='stay-page-create')
router.register(r'stay-banner', views.StayBannerViewSet, basename='stay-banner')
router.register(r'stay-highlights', views.StayHighlightsViewSet, basename='stay-highlights')
router.register(r'stay-amenities-title', views.StayAmenitiesTitleViewSet, basename='stay-amenities-title')
router.register(r'stay-amenities-listings', views.StayAmenitiesListingsViewSet, basename='stay-amenities-listings')
router.register(r'stay-explore', views.StayExploreViewSet, basename='stay-explore')
router.register(r'stay-gallery', views.StayGalleryViewSet, basename='stay-gallery')

urlpatterns = [
    path('', include(router.urls)),
]