from rest_framework import generics
from .models import Parcel, MarketComparable
from .serializers import ParcelSerializer, MarketComparableSerializer


class ParcelListView(generics.ListCreateAPIView):
    queryset = Parcel.objects.all()
    serializer_class = ParcelSerializer


class MarketComparableListView(generics.ListCreateAPIView):
    queryset = MarketComparable.objects.all()
    serializer_class = MarketComparableSerializer