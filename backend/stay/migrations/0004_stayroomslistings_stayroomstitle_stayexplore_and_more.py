# Generated by Django 5.2.1 on 2025-06-19 07:13

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stay', '0003_stayamenitieslistings_stayamenitiestitle_staybanner_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='StayRoomsListings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='stay/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['png', 'jpg', 'jpeg', 'webp', 'gif'])])),
                ('title', models.CharField(blank=True, max_length=500, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('link', models.SlugField(blank=True, max_length=255, null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='StayRoomsTitle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=500, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('link', models.SlugField(blank=True, max_length=255, null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='StayExplore',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='stay/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['png', 'jpg', 'jpeg', 'webp', 'gif'])])),
                ('title', models.TextField(blank=True)),
                ('link', models.SlugField(blank=True, null=True, unique=True)),
                ('stay_page_create', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='stay_explore', to='stay.staypagecreate')),
            ],
        ),
        migrations.CreateModel(
            name='StayGallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='stay/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['png', 'jpg', 'jpeg', 'webp', 'gif'])])),
                ('stay_page_create', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='stay_gallery', to='stay.staypagecreate')),
            ],
        ),
    ]
