import image1 from "../assets/AcerAspire5.jpg";
import image2 from "../assets/HP15.jpg";
import image3 from "../assets/A15.jpg";
import image4 from "../assets/LenovoLegion5.jpg";
import image5 from "../assets/Zephyrus.jpg";

export const getAllProducts = () => {
  return [
    {
      id: "1",
      slug: "acer-aspire-5-basic",
      name: "Acer Aspire 5",
      category: `Basic`,
      categorySlug: "basic",
      price: 12_000_000,
      stock: 20,
      imageUrl: image1,
      description: `Acer Aspire 5 adalah laptop serbaguna yang cocok untuk tugas sehari-hari, dilengkapi dengan prosesor Intel Core i5 atau i7, RAM 8 GB hingga 16 GB, dan penyimpanan SSD 256 GB hingga 1 TB, dengan kartu grafis NVIDIA GeForce GTX 1650 atau RTX 2050 dan layar 15,6 inci Full HD, harganya berkisar antara IDR 7.500.000 hingga IDR 12.000.000.`,
    },
    {
      id: "2",
      slug: "hp-15-basic",
      name: "HP 15",
      category: `Basic`,
      categorySlug: "basic",
      price: 10_500_000,
      stock: 3,
      imageUrl: image2,
      description: `HP 15 menawarkan spesifikasi serupa dengan prosesor Intel Core i3 atau i5, RAM 4 GB hingga 8 GB, dan penyimpanan SSD 256 GB hingga 512 GB, tersedia dengan harga mulai IDR 6.500.000 hingga IDR 10.500.000, cocok untuk pelajar atau penggunaan kasual.`,
    },
    {
      id: "3",
      slug: "ASUS-TUF-Gaming-A15-gaming",
      name: "ASUS TUF Gaming A15",
      category: `Gaming`,
      categorySlug: "gaming",
      price: 21_000_000,
      stock: 10,
      imageUrl: image3,
      description: `ASUS TUF Gaming A15 dilengkapi dengan prosesor AMD Ryzen 5 atau 7, kartu grafis NVIDIA GeForce GTX 1660 Ti atau RTX 2060, RAM 8 GB hingga 16 GB, dan layar Full HD 144Hz 15,6 inci, harganya mulai dari IDR 15.000.000 hingga IDR 21.000.000, ideal untuk game AAA dan tugas berat.`,
    },
    {
      id: "4",
      slug: "Lenovo-Legion-5-gaming",
      name: "Lenovo Legion 5",
      category: `Gaming`,
      categorySlug: "gaming",
      price: 22_000_000,
      stock: 0,
      imageUrl: image4,
      description: `Lenovo Legion 5 juga menargetkan gamer, dengan spesifikasi serupa menggunakan prosesor AMD Ryzen dan NVIDIA GeForce GTX 1660 Ti atau RTX 2060, harganya berkisar antara IDR 15.000.000 hingga IDR 22.000.000, menawarkan performa tinggi untuk gaming dan pekerjaan berat`,
    },
    {
      id: "5",
      slug: "ASUS-ROG-Zephyrus-G16-gaming",
      name: "ASUS ROG Zephyrus G16",
      category: `Gaming`,
      categorySlug: "gaming",
      price: 30_500_000,
      stock: 10,
      imageUrl: image5,
      description: `ASUS ROG Zephyrus G16 adalah laptop gaming premium dengan prosesor Intel Core Ultra 9 dan GPU NVIDIA GeForce RTX 4070. Dilengkapi layar OLED 16 inci 240Hz, memberikan visual tajam dan mulus. Dengan RAM 16 GB dan SSD 1 TB, laptop ini menawarkan performa cepat dan penyimpanan luas. Desain ramping dan portabilitasnya membuatnya cocok untuk gamer yang mengutamakan kualitas dan mobilitas`,
    },
  ];
};
