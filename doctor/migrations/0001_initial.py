# Generated by Django 3.1.4 on 2020-12-22 15:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('department', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.CharField(default='doctor', max_length=10)),
                ('BloodType', models.CharField(max_length=10)),
                ('image', models.CharField(max_length=250)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='doctors', to='department.department')),
            ],
        ),
    ]
