# Generated by Django 5.2.1 on 2025-06-20 07:24

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eat', '0002_rename_eat_page_create_eatbanner_eat_page_create'),
    ]

    operations = [
        migrations.CreateModel(
            name='EatAmenitiesListings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='eat/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['png', 'jpg', 'jpeg', 'webp', 'gif'])])),
                ('title', models.TextField(blank=True, null=True)),
                ('order', models.PositiveIntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('eat_page_create', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='eat_amenities_listings', to='eat.eatpagecreate')),
            ],
            options={
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='EatAmenitiesTitle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('eat_page_create', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='eat_amenities_title', to='eat.eatpagecreate')),
            ],
        ),
        migrations.CreateModel(
            name='EatExplore',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='eat/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['png', 'jpg', 'jpeg', 'webp', 'gif'])])),
                ('title', models.TextField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('eat_page_create', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='eat_explore', to='eat.eatpagecreate')),
            ],
        ),
        migrations.CreateModel(
            name='EatMenuListings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='eat/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['png', 'jpg', 'jpeg', 'webp', 'gif'])])),
                ('title', models.TextField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('rating', models.FloatField(blank=True, null=True)),
                ('eat_page_create', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='eat_menu_listings', to='eat.eatpagecreate')),
            ],
        ),
        migrations.CreateModel(
            name='EatMenuTabCreate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tab_name', models.CharField(blank=True, max_length=500, null=True)),
                ('order', models.PositiveIntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('eat_page_create', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='eat_menu_tab_create', to='eat.eatpagecreate')),
            ],
            options={
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='EatMenuTabItems',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='eat/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['png', 'jpg', 'jpeg', 'webp', 'gif'])])),
                ('title', models.TextField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('rating', models.FloatField(blank=True, null=True)),
                ('eat_page_create', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='eat_menu_tab_items', to='eat.eatpagecreate')),
                ('tab_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='menu_items', to='eat.eatmenutabcreate')),
            ],
        ),
        migrations.CreateModel(
            name='EatMenuTitle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(blank=True, null=True)),
                ('eat_page_create', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='eat_menu_title', to='eat.eatpagecreate')),
            ],
        ),
        migrations.CreateModel(
            name='EatTime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('opening_time', models.TextField(blank=True, null=True)),
                ('closing_time', models.TextField(blank=True, null=True)),
                ('eat_page_create', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='eat_time', to='eat.eatpagecreate')),
            ],
        ),
    ]
