# Generated by Django 2.2.6 on 2019-11-18 07:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Crawling',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('title', models.CharField(max_length=100)),
                ('area', models.CharField(max_length=100)),
                ('sale', models.CharField(max_length=100)),
                ('price', models.CharField(max_length=100)),
                ('img_src', models.URLField()),
            ],
        ),
    ]
