    function change(){
      var container = document.getElementById("bckgrd");
      container.classList.toggle("darker");
    }

    function signs() {
      const start = 1901, birthyear = document.zodiac.year.value, date=document.zodiac.date.value, month=document.zodiac.month.selectedIndex;

      with (document.zodiac.sign){
      if (month == 1 && date >=20 || month == 2 && date <=18) {value = "Aquarius";}
      if (month == 2 && date >=19 || month == 3 && date <=20) {value = "Pisces";}
      if (month == 3 && date >=21 || month == 4 && date <=19) {value = "Aries";}
      if (month == 4 && date >=20 || month == 5 && date <=20) {value = "Taurus";}
      if (month == 5 && date >=21 || month == 6 && date <=21) {value = "Gemini";}
      if (month == 6 && date >=22 || month == 7 && date <=22) {value = "Cancer";}
      if (month == 7 && date >=23 || month == 8 && date <=22) {value = "Leo";}
      if (month == 8 && date >=23 || month == 9 && date <=22) {value = "Virgo";}
      if (month == 9 && date >=23 || month == 10 && date <=22) {value = "Libra";}
      if (month == 10 && date >=23 || month == 11 && date <=21) {value = "Scorpio";}
      if (month == 11 && date >=22 || month == 12 && date <=21) {value = "Sagittarius";}
      if (month == 12 && date >=22 || month == 1 && date <=19) {value = "Capricorn";}
      }

      with (document.zodiac.isign){
      if (month == 2 && date >=13 || month == 3 && date <=12) {value = "Kumbha";}
      if (month == 3 && date >=13 || month == 4 && date <=12) {value = "Meena";}
      if (month == 4 && date >=13 || month == 5 && date <=14) {value = "Mesha";}
      if (month == 5 && date >=15 || month == 6 && date <=14) {value = "Vrishba";}
      if (month == 6 && date >=15 || month == 7 && date <=14) {value = "Mithuna";}
      if (month == 7 && date >=15 || month == 8 && date <=14) {value = "Karka";}
      if (month == 8 && date >=15 || month == 9 && date <=15) {value = "Simha";}
      if (month == 9 && date >=16 || month == 10 && date <=15) {value = "Kanyaa";}
      if (month == 10 && date >=16 || month == 11 && date <=14) {value = "Tula";}
      if (month == 11 && date >=15 || month == 12 && date <=14) {value = "Vrischika";}
      if (month == 12 && date >=15 || month == 1 && date <=13) {value = "Dhanu";}
      if (month == 1 && date >=14 || month == 2 && date <=12) {value = "Makara";}
      }

      x = (start - birthyear) % 12
      with (document.zodiac.csign){
      if (x == 1 || x == -11) {value = "Rat";}
      if (x == 0) {value = "Ox";}
      if (x == 11 || x == -1) {value = "Tiger";}
      if (x == 10 || x == -2) {value = "Rabbit";}
      if (x == 9 || x == -3)  {value = "Dragon";}
      if (x == 8 || x == -4)  {value = "Snake";}
      if (x == 7 || x == -5)  {value = "Horse";}
      if (x == 6 || x == -6)  {value = "Goat";}
      if (x == 5 || x == -7)  {value = "Monkey";}
      if (x == 4 || x == -8)  {value = "Rooster";}
      if (x == 3 || x == -9)  {value = "Dog";}
      if (x == 2 || x == -10) {value = "Pig";}
    }
  }