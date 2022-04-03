function Time() {
    // Tarih oluşturma
    var date = new Date();
    // Saat oluşturma
    var hour = date.getHours();
    // Dakika oluşturma
    var minute = date.getMinutes();
    // Saniye oluşturma
    var second = date.getSeconds();
    // AM PM oluşturma
    var period = "";
    // Geçerli saate göre AM / PM atama
    if (hour >= 12) {
    period = "PM";
    } else {
    period = "AM";
    }
    // Burada, 12-24 saat formatını ayarlıyoruz
    if (hour == 0) {
    hour = 12;
    } else {
    if (hour > 12) {
    hour = hour - 12;
    }
    }
    // Saat, dakika ve saniyeyi güncelliyoruz
    // 10'dan küçüklerse
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    // Div'e zaman öğeleri ekleme
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
    // Zamanlayıcıyı 1 saniyeye ayarlıyoruz (1000 ms)
    setTimeout(Time, 1000);
   }
    // 10'dan küçükse zaman öğelerini güncelleme işlevi ekliyoruz
    // 10'dan küçükse, zaman öğelerinin önüne 0 ekleyin
   function update(t) {
    if (t < 10) {
    return "0" + t;
    }
    else {
    return t;
    }
   }
   Time();