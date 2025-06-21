from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.db import connection


class BlogBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = BlogBannerSerializer
    queryset = BlogBanner.objects.all()

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            banner = BlogBanner.objects.get(pk=pk)
            banner.delete()
            if not BlogBanner.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE blog_blogbanner AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except BlogBanner.DoesNotExist:
            return Response(
                {"error": "Invalid banner ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class BlogPostsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = BlogPostsSerializer
    queryset = BlogPosts.objects.all()

    @action(detail=False, methods=["post"])
    def reorder(self, request):
        try:
            order_data = request.data.get("order", [])
            for item in order_data:
                blog_posts = BlogPosts.objects.get(id=item["id"])
                blog_posts.order = item["order"]
                blog_posts.save()
            return Response(
                {"status": "Order updated successfully"}, status=status.HTTP_200_OK
            )
        except BlogPosts.DoesNotExist:
            return Response(
                {"error": "Invalid stats ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    @action(detail=True, methods=["delete"])
    def delete_and_reset(self, request, pk=None):
        try:
            blog_posts = BlogPosts.objects.get(pk=pk)
            blog_posts.delete()
            if not BlogPosts.objects.exists():
                with connection.cursor() as cursor:
                    cursor.execute("ALTER TABLE blog_blogposts AUTO_INCREMENT = 1")
            return Response(
                {"status": "Item deleted successfully"}, status=status.HTTP_200_OK
            )
        except BlogPosts.DoesNotExist:
            return Response(
                {"error": "Invalid blog_posts ID"}, status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
