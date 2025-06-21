from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'blog-banner', views.BlogBannerViewSet, basename='blog-banner')
router.register(r'blog-posts', views.BlogPostsViewSet, basename='blog-posts')

urlpatterns = [
    path('', include(router.urls)),
]