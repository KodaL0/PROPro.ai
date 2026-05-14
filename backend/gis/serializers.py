from rest_framework import serializers
from .models import Parcel, MarketComparable


class ParcelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parcel
        fields = "__all__"


class MarketComparableSerializer(serializers.ModelSerializer):
    price_per_m2 = serializers.ReadOnlyField()

    class Meta:
        model = MarketComparable
        fields = "__all__"