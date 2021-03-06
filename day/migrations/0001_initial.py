# Generated by Django 3.1.4 on 2020-12-09 15:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('doctor', '__first__'),
        ('patient', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Day',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Hour',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hour', models.CharField(default='9:00 AM', max_length=200)),
                ('isAvailable', models.BooleanField(default=False)),
                ('dayId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Hour', to='day.day')),
                ('doctorId', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='Appointments', to='doctor.doctor')),
                ('patientId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Appointments', to='patient.patient')),
            ],
            options={
                'unique_together': {('patientId', 'doctorId')},
            },
        ),
    ]
