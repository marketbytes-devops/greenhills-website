# Generated by Django 5.2.1 on 2025-06-20 17:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0015_homeblogsection_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='homeroomstitle',
            name='link',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
