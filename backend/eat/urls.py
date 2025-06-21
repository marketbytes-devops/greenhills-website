from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'eat-page-create', views.EatPageCreateViewSet, basename='eat-page-create')
router.register(r'eat-banner', views.EatBannerViewSet, basename='eat-banner')
router.register(r'eat-time', views.EatTimeViewSet, basename='eat-time')
router.register(r'eat-menu-tab-create', views.EatMenuTabCreateViewSet, basename='eat-menu-tab-create')
router.register(r'eat-menu-tab-items', views.EatMenuTabItemsViewSet, basename='eat-menu-tab-items')
router.register(r'eat-menu-title', views.EatMenuTitleViewSet, basename='eat-menu-title')
router.register(r'eat-menu-listings', views.EatMenuListingsViewSet, basename='eat-menu-listings')
router.register(r'eat-amenities-title', views.EatAmenitiesTitleViewSet, basename='eat-amenities-title')
router.register(r'eat-amenities-listings', views.EatAmenitiesListingsViewSet, basename='eat-amenities-listings')
router.register(r'eat-explore', views.EatExploreViewSet, basename='eat-explore')

urlpatterns = [
    path('', include(router.urls)),
]