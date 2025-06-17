from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'home-banner', views.HomeBannerViewSet, basename='home-banner')
router.register(r'home-services', views.HomeServicesViewSet, basename='home-services')
router.register(r'home-about-section-title', views.HomeAboutTitleViewSet, basename='home-about-title')
router.register(r'home-about-section-image', views.HomeAboutImageViewSet, basename='home-about-image')
router.register(r'home-rating', views.HomeRatingViewSet, basename='home-rating')
router.register(r'home-stats', views.HomeStatsViewSet, basename='home-stats')
router.register(r'home-rooms-title', views.HomeRoomsTitleViewSet, basename='home-rooms-title')
router.register(r'home-rooms', views.HomeRoomsViewSet, basename='home-rooms')
router.register(r'home-explore', views.HomeExploreViewSet, basename='home-explore')
router.register(r'home-eat-section-listing', views.HomeEatSectionViewSet, basename='home-eat-section-listing')
router.register(r'home-eat-section-content', views.HomeEatSectionContentViewSet, basename='home-eat-section-content')
router.register(r'home-gather-section-listing', views.HomeGatherSectionViewSet, basename='home-gather-section-listing')
router.register(r'home-gather-section-content', views.HomeGatherSectionContentViewSet, basename='home-gather-section-content')
router.register(r'home-team-title', views. HomeTeamTitleSectionViewSet, basename='home-team-title')
router.register(r'home-team-section', views. HomeTeamSectionViewSet, basename='home-team-section')
router.register(r'home-blog-title', views. HomeBlogTitleSectionViewSet, basename='home-blog-title')
router.register(r'home-blog-items', views. HomeBlogSectionViewSet, basename='home-blog-items')

urlpatterns = [
    path('', include(router.urls)),
]