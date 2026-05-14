from django.db import models


class Property(models.Model):
    LISTING_TYPE_CHOICES = [
        ("sale", "Sale"),
        ("rent", "Rent"),
    ]

    PROPERTY_TYPE_CHOICES = [
        ("apartment", "Apartment"),
        ("house", "House"),
        ("villa", "Villa"),
        ("land", "Land"),
        ("commercial", "Commercial"),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    price = models.DecimalField(max_digits=12, decimal_places=2)
    area_m2 = models.DecimalField(max_digits=10, decimal_places=2)

    bedrooms = models.PositiveIntegerField(default=0)
    bathrooms = models.PositiveIntegerField(default=0)

    listing_type = models.CharField(max_length=20, choices=LISTING_TYPE_CHOICES)
    property_type = models.CharField(max_length=30, choices=PROPERTY_TYPE_CHOICES)

    city = models.CharField(max_length=100)
    district = models.CharField(max_length=100, blank=True)
    address = models.CharField(max_length=255, blank=True)

    latitude = models.DecimalField(max_digits=10, decimal_places=7)
    longitude = models.DecimalField(max_digits=10, decimal_places=7)

    source = models.CharField(max_length=100, default="manual")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def price_per_m2(self):
        if self.area_m2 and self.area_m2 > 0:
            return round(self.price / self.area_m2, 2)
        return None

    def __str__(self):
        return self.title