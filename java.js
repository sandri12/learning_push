  function hitung() {
            var alas = parseFloat(document.getElementById('alas').value);
            var tinggi = parseFloat(document.getElementById('tinggi').value);
            var sisi1 = parseFloat(document.getElementById('sisi1').value);
            var sisi2 = parseFloat(document.getElementById('sisi2').value);
            var sisi3 = parseFloat(document.getElementById('sisi3').value);

            if (!alas || !tinggi || !sisi1 || !sisi2 || !sisi3) {
                alert('Masukkan semua nilai sisi dan tinggi');
                return;
            }

            var luas = 0.5 * alas * tinggi;
            var keliling = sisi1 + sisi2 + sisi3;

            document.getElementById('result').innerHTML = `
                <p>Luas segitiga: ${luas}</p>
                <p>Keliling segitiga: ${keliling}</p>
            `;
          }