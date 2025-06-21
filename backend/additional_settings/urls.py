from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'settings', views.AdditionalSettingsViewSet, basename='additional_settings')

urlpatterns = [
    path('', include(router.urls)),
]