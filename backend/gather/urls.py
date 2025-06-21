from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'gather-page-create', views.GatherPageCreateViewSet, basename='gather-page-create')
router.register(r'gather-banner', views.GatherBannerViewSet, basename='gather-banner')
router.register(r'gather-highlights-title', views.GatherHighlightsTitleViewSet, basename='gather-highlights-title')
router.register(r'gather-highlights', views.GatherHighlightsViewSet, basename='gather-highlights')
router.register(r'gather-services', views.GatherServicesViewSet, basename='gather-services')
router.register(r'gather-amenities-title', views.GatherAmenitiesTitleViewSet, basename='gather-amenities-title')
router.register(r'gather-amenities-listings', views.GatherAmenitiesListingsViewSet, basename='gather-amenities-listings')
router.register(r'gather-explore', views.GatherExploreViewSet, basename='gather-explore')

urlpatterns = [
    path('', include(router.urls)),
]