from django.urls import path
# pylint: disable=unused-wildcard-import
from .views import *
from . import views

urlpatterns = [
  path('',  KtrendsAppView.as_view()),
]