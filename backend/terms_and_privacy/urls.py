from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'terms-and-conditions', views.TermsViewSet, basename='terms-and-conditions')
router.register(r'privacy-policy', views.PrivacyViewSet, basename='privacy-policy')

urlpatterns = [
    path('', include(router.urls)),
]