function submitComment(textAreaId, yemekAdi) {
    const comment = document.getElementById(textAreaId).value;
    if (comment.trim() !== '') {
        let yorumlar = JSON.parse(localStorage.getItem('yorumlar')) || [];
        yorumlar.push({ yemekAdi: yemekAdi, yorum: comment });
        localStorage.setItem('yorumlar', JSON.stringify(yorumlar));
        alert('Yorumunuz kaydedildi!');
    } else {
        alert('Yorum alanı boş olamaz.');
    }
}
