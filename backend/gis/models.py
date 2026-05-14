from django.db import models


class Parcel(models.Model):
    district = models.CharField(max_length=100)
    municipality = models.CharField(max_length=100)
    sheet = models.CharField(max_length=50, blank=True)
    plan = models.CharField(max_length=50, blank=True)
    parcel_number = models.CharField(max_length=50)
    registration_number = models.CharField(max_length=100, blank=True)

    area_m2 = models.DecimalField(max_digits=12, decimal_places=2)

    planning_zone = models.CharField(max_length=50, blank=True)
    building_density = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    coverage_ratio = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    floors = models.PositiveIntegerField(null=True, blank=True)
    height_m = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)

    geometry_json = models.JSONField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.district} - Parcel {self.parcel_number}"


class MarketComparable(models.Model):
    DATA_TYPE_CHOICES = [
        ("sale", "Sale"),
        ("asking", "Asking Price"),
        ("rent", "Rental"),
    ]

    PROPERTY_TYPE_CHOICES = [
        ("apartment", "Apartment"),
        ("house", "House"),
        ("villa", "Villa"),
        ("land", "Land"),
        ("commercial", "Commercial"),
    ]

    data_type = models.CharField(max_length=20, choices=DATA_TYPE_CHOICES)
    property_type = models.CharField(max_length=30, choices=PROPERTY_TYPE_CHOICES)

    district = models.CharField(max_length=100)
    municipality = models.CharField(max_length=100, blank=True)

    price = models.DecimalField(max_digits=12, decimal_places=2)
    area_m2 = models.DecimalField(max_digits=10, decimal_places=2)

    latitude = models.DecimalField(max_digits=10, decimal_places=7)
    longitude = models.DecimalField(max_digits=10, decimal_places=7)

    transaction_date = models.DateField(null=True, blank=True)
    source = models.CharField(max_length=100, default="manual")

    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def price_per_m2(self):
        if self.area_m2 and self.area_m2 > 0:
            return round(self.price / self.area_m2, 2)
        return None

    def __str__(self):
        return f"{self.data_type} - {self.price} - {self.district}"