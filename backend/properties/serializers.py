from rest_framework import serializers
from .models import Property


class PropertySerializer(serializers.ModelSerializer):
    price_per_m2 = serializers.ReadOnlyField()

    class Meta:
        model = Property
        fields = "__all__"