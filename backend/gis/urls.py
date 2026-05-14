from django.urls import path
from .views import ParcelListView, MarketComparableListView

urlpatterns = [
    path("parcels/", ParcelListView.as_view(), name="parcel-list"),
    path("comparables/", MarketComparableListView.as_view(), name="comparable-list"),
]