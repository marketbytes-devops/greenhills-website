# Generated by Django 5.2.1 on 2025-06-19 13:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('eat', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='eatbanner',
            old_name='Eat_page_create',
            new_name='eat_page_create',
        ),
    ]
