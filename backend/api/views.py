# api/views.py

from django.http import JsonResponse

def api_login(request):
    # Giriş işlevini burada gerçekleştirin
    return JsonResponse({"message": "Giriş işlemi başarılı."})

def api_logout(request):
    # Çıkış işlevini burada gerçekleştirin
    return JsonResponse({"message": "Çıkış işlemi başarılı."})
