from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from django.http.response import JsonResponse
from django.views.generic import TemplateView
from django.db import connection
from django.views.decorators.csrf import csrf_exempt

# pylint: disable=unused-wildcard-import
from .models import *

class KtrendsAppView(TemplateView):
  template_name = "index.html"
