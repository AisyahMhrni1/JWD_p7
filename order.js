let itemOrder = [
    {
      dipesan: false,
      harga: 15000,
      nama: "Bakso",
    },
  
    {
      dipesan: false,
      harga: 25000,
      nama: "Nasgor",
    },
  
    {
      dipesan: false,
      harga: 10000,
      nama: "Wedang Jahe",
    },
  ];
  
  let totalOrder = 0;
  const itemterpilih = document.getElementsByClassName("item");
  
  const textTotal = document.getElementById("last-item");
  
  for (let i = 0; i < itemterpilih.length; i++) {
    itemterpilih[i].addEventListener("click", function () {
      setItemPemesanan(i, itemterpilih[i]);
    });
  }
  function setItemPemesanan(index, elemen) {
    if (itemOrder[index].dipesan == false) {
      itemOrder[index].dipesan = true;
      elemen.style.backgroundColor = "rgb(80, 44, 92)";
      elemen.style.color = "white";
      totalOrder = totalOrder + itemOrder[index].harga;
    } else {
      itemOrder[index].dipesan = false;
      elemen.style.backgroundColor = "rgb(219, 157, 239";
      elemen.style.color = "black";
      totalOrder = totalOrder - itemOrder[index].harga;
    }
    textTotal.innerHTML = "total <span>Rp" + totalOrder + "</span>";
  }