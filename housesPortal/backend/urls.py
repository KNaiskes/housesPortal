from django.urls import path
from . import views

app_name = 'houses'

urlpatterns = [
    path('houses/', views.houses_list, name='houses_list'),
    path('houses/<pk>', views.houses_detail, name='houses_detail'),
    path('houses/images/<pk>', views.house_images, name='house_images'),
    path('houses/landlords/', views.get_landLords, name='get_landLords'),
    path('houses/landlords/<pk>', views.get_landlord, name='get_landlord'),
]
