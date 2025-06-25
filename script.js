// Enhanced Product Database with More Products and Kenyan Shilling Pricing
const productsDatabase = {
  sneakers: [
    // Nike Brand
    {
      id: 1,
      name: "Nike Air Force 1 Low",
      brand: "nike",
      price: 3500,
      originalPrice: 5000,
      image: "/images/maziwa.jpeg",
      images: [
        "/images/maziwa.jpeg",
        "/images/front.jpeg",
        "/images/back.jpeg",
        "/images/side.jpeg",
      ],
      category: "sneakers",
      sizes: ["40", "41", "42", "43", "44", "45"],
      colors: ["white", "black", "red"],
      rating: 4.8,
      reviews: 245,
      description:
        "The iconic Nike Air Force 1 Low brings classic basketball style to the streets. Premium leather upper with Air-Sole unit for comfort.",
      inStock: true,
    },
    {
      id: 2,
      name: "Nike Air Max 270",
      brand: "nike",
      price: 14500,
      originalPrice: 17000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "sneakers",
      sizes: ["39", "40", "41", "42", "43", "44"],
      colors: ["black", "white", "blue"],
      rating: 4.6,
      reviews: 189,
      description: "Nike's biggest heel Air unit yet delivers exceptional comfort and style. Perfect for all-day wear.",
      inStock: true,
    },
    {
      id: 3,
      name: "Nike Air Max 90",
      brand: "nike",
      price: 13500,
      originalPrice: 16000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "sneakers",
      sizes: ["39", "40", "41", "42", "43", "44", "45"],
      colors: ["white", "black", "gray", "red"],
      rating: 4.7,
      reviews: 312,
      description:
        "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole and classic design.",
      inStock: true,
    },
    {
      id: 4,
      name: "Nike Dunk Low",
      brand: "nike",
      price: 11500,
      originalPrice: 14000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "sneakers",
      sizes: ["39", "40", "41", "42", "43", "44"],
      colors: ["white", "black", "blue", "green"],
      rating: 4.5,
      reviews: 198,
      description:
        "Created for the hardwood but taken to the streets, the Nike Dunk Low returns with crisp overlays and original team colors.",
      inStock: true,
    },
    {
      id: 5,
      name: "Nike React Element 55",
      brand: "nike",
      price: 13000,
      originalPrice: 15500,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "sneakers",
      sizes: ["40", "41", "42", "43", "44"],
      colors: ["black", "white", "gray"],
      rating: 4.4,
      reviews: 156,
      description:
        "The Nike React Element 55 is inspired by the Nike internationalist and features Nike React technology for comfort.",
      inStock: true,
    },

    // Jordan Brand
    {
      id: 6,
      name: "Air Jordan 1 Retro High",
      brand: "jordan",
      price: 18500,
      originalPrice: 22000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "sneakers",
      sizes: ["40", "41", "42", "43", "44", "45"],
      colors: ["black", "red", "white"],
      rating: 4.9,
      reviews: 412,
      description:
        "The legendary Air Jordan 1 that started it all. Premium materials and iconic design that never goes out of style.",
      inStock: true,
    },
    {
      id: 7,
      name: "Air Jordan 4 Retro",
      brand: "jordan",
      price: 21500,
      originalPrice: 25000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "sneakers",
      sizes: ["40", "41", "42", "43", "44"],
      colors: ["white", "black", "gray"],
      rating: 4.7,
      reviews: 256,
      description:
        "The Air Jordan 4 Retro brings back the classic design with premium materials and legendary comfort.",
      inStock: true,
    },
    {
      id: 8,
      name: "Air Jordan 11 Retro",
      brand: "jordan",
      price: 24500,
      originalPrice: 28000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "sneakers",
      sizes: ["40", "41", "42", "43", "44", "45"],
      colors: ["white", "black", "red"],
      rating: 4.8,
      reviews: 389,
      description: "The Air Jordan 11 Retro features patent leather and carbon fiber for a premium look and feel.",
      inStock: true,
    },
    {
      id: 9,
      name: "Air Jordan 3 Retro",
      brand: "jordan",
      price: 20500,
      originalPrice: 24000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "sneakers",
      sizes: ["40", "41", "42", "43", "44"],
      colors: ["white", "black", "gray"],
      rating: 4.6,
      reviews: 178,
      description: "The Air Jordan 3 Retro features the iconic elephant print and visible Air-Sole unit in the heel.",
      inStock: true,
    },

    // Adidas Brand
    {
      id: 10,
      name: "Adidas Ultraboost 22",
      brand: "adidas",
      price: 16500,
      originalPrice: 19000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "sneakers",
      sizes: ["39", "40", "41", "42", "43", "44", "45"],
      colors: ["black", "white", "blue"],
      rating: 4.5,
      reviews: 203,
      description: "Revolutionary Boost midsole technology provides incredible energy return with every step.",
      inStock: true,
    },
    {
      id: 11,
      name: "Adidas Stan Smith",
      brand: "adidas",
      price: 8500,
      originalPrice: 10000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "sneakers",
      sizes: ["39", "40", "41", "42", "43", "44"],
      colors: ["white", "green"],
      rating: 4.4,
      reviews: 178,
      description: "The timeless Adidas Stan Smith. Clean, classic design that goes with everything.",
      inStock: true,
    },
    {
      id: 12,
      name: "Adidas NMD R1",
      brand: "adidas",
      price: 14000,
      originalPrice: 16500,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "sneakers",
      sizes: ["39", "40", "41", "42", "43", "44"],
      colors: ["black", "white", "blue", "red"],
      rating: 4.3,
      reviews: 234,
      description: "The Adidas NMD R1 combines street style with modern technology for ultimate comfort.",
      inStock: true,
    },
    {
      id: 13,
      name: "Adidas Yeezy Boost 350 V2",
      brand: "adidas",
      price: 22500,
      originalPrice: 26000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "sneakers",
      sizes: ["39", "40", "41", "42", "43", "44"],
      colors: ["black", "white", "gray"],
      rating: 4.7,
      reviews: 456,
      description: "The iconic Yeezy Boost 350 V2 features Boost technology and Primeknit upper for premium comfort.",
      inStock: true,
    },

    // Puma Brand
    {
      id: 14,
      name: "Puma Suede Classic",
      brand: "puma",
      price: 7500,
      originalPrice: 9000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "sneakers",
      sizes: ["39", "40", "41", "42", "43", "44"],
      colors: ["black", "blue", "red", "green"],
      rating: 4.2,
      reviews: 145,
      description: "The Puma Suede Classic is a timeless icon with premium suede upper and classic styling.",
      inStock: true,
    },
    {
      id: 15,
      name: "Puma RS-X",
      brand: "puma",
      price: 12000,
      originalPrice: 14500,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "sneakers",
      sizes: ["40", "41", "42", "43", "44"],
      colors: ["white", "black", "blue"],
      rating: 4.1,
      reviews: 98,
      description: "The Puma RS-X features bold design and RS technology for maximum comfort and style.",
      inStock: true,
    },

    // Converse Brand
    {
      id: 16,
      name: "Converse Chuck Taylor All Star",
      brand: "converse",
      price: 6500,
      originalPrice: 8000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "sneakers",
      sizes: ["39", "40", "41", "42", "43", "44"],
      colors: ["black", "white", "red", "blue"],
      rating: 4.3,
      reviews: 267,
      description: "The classic Converse Chuck Taylor All Star. Timeless design that never goes out of style.",
      inStock: true,
    },
    {
      id: 17,
      name: "Converse Chuck 70",
      brand: "converse",
      price: 8500,
      originalPrice: 10000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "sneakers",
      sizes: ["39", "40", "41", "42", "43", "44"],
      colors: ["black", "white", "navy"],
      rating: 4.4,
      reviews: 189,
      description: "The Converse Chuck 70 features premium materials and enhanced comfort for modern wear.",
      inStock: true,
    },

    // Vans Brand
    {
      id: 18,
      name: "Vans Old Skool",
      brand: "vans",
      price: 7000,
      originalPrice: 8500,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "sneakers",
      sizes: ["39", "40", "41", "42", "43", "44"],
      colors: ["black", "white", "blue"],
      rating: 4.2,
      reviews: 156,
      description: "The Vans Old Skool features the iconic side stripe and durable canvas and suede uppers.",
      inStock: true,
    },
    {
      id: 19,
      name: "Vans Authentic",
      brand: "vans",
      price: 6000,
      originalPrice: 7500,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "sneakers",
      sizes: ["39", "40", "41", "42", "43", "44"],
      colors: ["black", "white", "red", "navy"],
      rating: 4.1,
      reviews: 134,
      description: "The original Vans Authentic with simple low-top design and signature waffle outsole.",
      inStock: true,
    },
  ],

  shoes: [
    // Clarks Brand
    {
      id: 101,
      name: "Clarks Desert Boot",
      brand: "clarks",
      price: 8500,
      originalPrice: 10500,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "shoes",
      sizes: ["40", "41", "42", "43", "44", "45"],
      colors: ["brown", "black", "tan"],
      rating: 4.6,
      reviews: 134,
      description: "The iconic Clarks Desert Boot. Premium suede construction with crepe sole for comfort.",
      inStock: true,
    },
    {
      id: 102,
      name: "Clarks Wallabee",
      brand: "clarks",
      price: 9500,
      originalPrice: 12000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "shoes",
      sizes: ["40", "41", "42", "43", "44"],
      colors: ["brown", "black", "tan"],
      rating: 4.5,
      reviews: 98,
      description: "The Clarks Wallabee features premium suede and the signature crepe sole for ultimate comfort.",
      inStock: true,
    },

    // Bata Brand
    {
      id: 103,
      name: "Bata Formal Oxford",
      brand: "bata",
      price: 6500,
      originalPrice: 8000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "shoes",
      sizes: ["40", "41", "42", "43", "44"],
      colors: ["black", "brown"],
      rating: 4.2,
      reviews: 89,
      description: "Classic Oxford shoe perfect for business and formal occasions. Genuine leather construction.",
      inStock: true,
    },
    {
      id: 104,
      name: "Bata Derby Shoes",
      brand: "bata",
      price: 7000,
      originalPrice: 8500,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "shoes",
      sizes: ["40", "41", "42", "43", "44"],
      colors: ["black", "brown"],
      rating: 4.1,
      reviews: 76,
      description: "Comfortable Derby shoes with premium leather upper and cushioned insole.",
      inStock: true,
    },
    {
      id: 105,
      name: "Bata Loafers",
      brand: "bata",
      price: 5500,
      originalPrice: 7000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "shoes",
      sizes: ["40", "41", "42", "43", "44"],
      colors: ["black", "brown", "tan"],
      rating: 4.0,
      reviews: 65,
      description: "Slip-on loafers perfect for casual and semi-formal occasions.",
      inStock: true,
    },

    // Florsheim Brand
    {
      id: 106,
      name: "Florsheim Imperial",
      brand: "florsheim",
      price: 12500,
      originalPrice: 15000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "shoes",
      sizes: ["40", "41", "42", "43", "44", "45"],
      colors: ["black", "brown"],
      rating: 4.7,
      reviews: 145,
      description: "Premium Florsheim Imperial with hand-crafted leather and Goodyear welt construction.",
      inStock: true,
    },
    {
      id: 107,
      name: "Florsheim Berkley",
      brand: "florsheim",
      price: 10500,
      originalPrice: 13000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "shoes",
      sizes: ["40", "41", "42", "43", "44"],
      colors: ["black", "brown"],
      rating: 4.4,
      reviews: 112,
      description: "The Florsheim Berkley features classic styling with modern comfort technology.",
      inStock: true,
    },

    // Ecco Brand
    {
      id: 108,
      name: "Ecco Helsinki",
      brand: "ecco",
      price: 11500,
      originalPrice: 14000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "shoes",
      sizes: ["40", "41", "42", "43", "44"],
      colors: ["black", "brown"],
      rating: 4.5,
      reviews: 98,
      description: "Ecco Helsinki features premium leather and innovative comfort technology.",
      inStock: true,
    },
    {
      id: 109,
      name: "Ecco Melbourne",
      brand: "ecco",
      price: 13000,
      originalPrice: 15500,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "shoes",
      sizes: ["40", "41", "42", "43", "44"],
      colors: ["black", "brown", "tan"],
      rating: 4.6,
      reviews: 87,
      description: "The Ecco Melbourne combines style and comfort with premium materials.",
      inStock: true,
    },

    // Timberland Brand
    {
      id: 110,
      name: "Timberland 6-Inch Premium Boot",
      brand: "timberland",
      price: 14500,
      originalPrice: 17000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "shoes",
      sizes: ["40", "41", "42", "43", "44", "45"],
      colors: ["brown", "black", "tan"],
      rating: 4.8,
      reviews: 234,
      description: "The iconic Timberland 6-inch boot with premium waterproof leather and padded collar.",
      inStock: true,
    },
    {
      id: 111,
      name: "Timberland Chukka",
      brand: "timberland",
      price: 12000,
      originalPrice: 14500,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "shoes",
      sizes: ["40", "41", "42", "43", "44"],
      colors: ["brown", "black"],
      rating: 4.4,
      reviews: 156,
      description: "Timberland Chukka boots with premium leather and comfortable design.",
      inStock: true,
    },
  ],

  clothes: [
    // Polo Shirts
    {
      id: 201,
      name: "Premium Cotton Polo Shirt",
      brand: "polo",
      price: 3500,
      originalPrice: 4500,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "clothes",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["white", "blue", "black", "red"],
      rating: 4.3,
      reviews: 167,
      description: "Premium 100% cotton polo shirt. Perfect for casual and semi-formal occasions.",
      inStock: true,
    },
    {
      id: 202,
      name: "Classic Polo Shirt",
      brand: "polo",
      price: 2800,
      originalPrice: 3500,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "clothes",
      sizes: ["S", "M", "L", "XL"],
      colors: ["white", "navy", "gray"],
      rating: 4.1,
      reviews: 134,
      description: "Classic polo shirt with comfortable fit and durable construction.",
      inStock: true,
    },

    // Jeans
    {
      id: 203,
      name: "Slim Fit Denim Jeans",
      brand: "denim",
      price: 4500,
      originalPrice: 6000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "clothes",
      sizes: ["30", "32", "34", "36", "38", "40"],
      colors: ["blue", "black", "gray"],
      rating: 4.4,
      reviews: 145,
      description: "Modern slim fit jeans with stretch fabric for comfort and style.",
      inStock: true,
    },
    {
      id: 204,
      name: "Regular Fit Jeans",
      brand: "denim",
      price: 3800,
      originalPrice: 5000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "clothes",
      sizes: ["30", "32", "34", "36", "38", "40"],
      colors: ["blue", "black"],
      rating: 4.2,
      reviews: 98,
      description: "Classic regular fit jeans with traditional styling and comfortable fit.",
      inStock: true,
    },
    {
      id: 205,
      name: "Skinny Fit Jeans",
      brand: "denim",
      price: 4200,
      originalPrice: 5500,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "clothes",
      sizes: ["30", "32", "34", "36", "38"],
      colors: ["blue", "black", "gray"],
      rating: 4.3,
      reviews: 176,
      description: "Trendy skinny fit jeans with stretch denim for a modern look.",
      inStock: true,
    },

    // T-Shirts
    {
      id: 206,
      name: "Premium Cotton T-Shirt",
      brand: "tshirts",
      price: 1800,
      originalPrice: 2500,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "clothes",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["white", "black", "gray", "blue", "red"],
      rating: 4.2,
      reviews: 234,
      description: "Premium 100% cotton t-shirt with comfortable fit and soft feel.",
      inStock: true,
    },
    {
      id: 207,
      name: "Graphic T-Shirt",
      brand: "tshirts",
      price: 2200,
      originalPrice: 3000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "clothes",
      sizes: ["S", "M", "L", "XL"],
      colors: ["black", "white", "gray"],
      rating: 4.0,
      reviews: 156,
      description: "Stylish graphic t-shirt with modern design and comfortable fit.",
      inStock: true,
    },

    // Shirts
    {
      id: 208,
      name: "Formal Dress Shirt",
      brand: "shirts",
      price: 3200,
      originalPrice: 4000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "clothes",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["white", "blue", "gray"],
      rating: 4.5,
      reviews: 189,
      description: "Premium formal dress shirt perfect for business and formal occasions.",
      inStock: true,
    },
    {
      id: 209,
      name: "Casual Button-Down Shirt",
      brand: "shirts",
      price: 2800,
      originalPrice: 3500,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "clothes",
      sizes: ["S", "M", "L", "XL"],
      colors: ["white", "blue", "gray", "green"],
      rating: 4.3,
      reviews: 145,
      description: "Casual button-down shirt with relaxed fit and versatile styling.",
      inStock: true,
    },

    // Suits
    {
      id: 210,
      name: "Business Suit - Slim Fit",
      brand: "suits",
      price: 15500,
      originalPrice: 20000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "clothes",
      sizes: ["S", "M", "L", "XL"],
      colors: ["black", "navy", "gray"],
      rating: 4.7,
      reviews: 98,
      description: "Premium business suit with slim fit design and high-quality fabric.",
      inStock: true,
    },
    {
      id: 211,
      name: "Classic Suit",
      brand: "suits",
      price: 12500,
      originalPrice: 16000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "clothes",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["black", "navy", "charcoal"],
      rating: 4.4,
      reviews: 76,
      description: "Classic suit with traditional fit and timeless styling.",
      inStock: true,
    },

    // Jackets
    {
      id: 212,
      name: "Leather Jacket",
      brand: "jackets",
      price: 8500,
      originalPrice: 11000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "clothes",
      sizes: ["S", "M", "L", "XL"],
      colors: ["black", "brown"],
      rating: 4.6,
      reviews: 134,
      description: "Premium leather jacket with classic styling and durable construction.",
      inStock: true,
    },
    {
      id: 213,
      name: "Denim Jacket",
      brand: "jackets",
      price: 4500,
      originalPrice: 6000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "clothes",
      sizes: ["S", "M", "L", "XL"],
      colors: ["blue", "black"],
      rating: 4.2,
      reviews: 112,
      description: "Classic denim jacket with vintage styling and comfortable fit.",
      inStock: true,
    },

    // Dresses (Women's)
    {
      id: 214,
      name: "Casual Summer Dress",
      brand: "dresses",
      price: 3800,
      originalPrice: 5000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "clothes",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["blue", "white", "pink", "green"],
      rating: 4.4,
      reviews: 167,
      description: "Light and comfortable summer dress perfect for casual occasions.",
      inStock: true,
    },
    {
      id: 215,
      name: "Cocktail Dress",
      brand: "dresses",
      price: 6500,
      originalPrice: 8500,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "clothes",
      sizes: ["XS", "S", "M", "L"],
      colors: ["black", "red", "navy"],
      rating: 4.5,
      reviews: 89,
      description: "Elegant cocktail dress perfect for evening events and parties.",
      inStock: true,
    },
  ],

  watches: [
    // Casio Brand
    {
      id: 301,
      name: "Casio G-Shock Digital",
      brand: "casio",
      price: 12500,
      originalPrice: 15000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "watches",
      sizes: ["One Size"],
      colors: ["black", "blue", "red"],
      rating: 4.7,
      reviews: 234,
      description: "Rugged G-Shock watch with shock resistance and water resistance up to 200m.",
      inStock: true,
    },
    {
      id: 302,
      name: "Casio Edifice",
      brand: "casio",
      price: 18500,
      originalPrice: 22000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "watches",
      sizes: ["One Size"],
      colors: ["silver", "black", "blue"],
      rating: 4.6,
      reviews: 156,
      description: "Sophisticated Casio Edifice with chronograph functions and premium design.",
      inStock: true,
    },
    {
      id: 303,
      name: "Casio Classic Digital",
      brand: "casio",
      price: 5500,
      originalPrice: 7000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "watches",
      sizes: ["One Size"],
      colors: ["black", "silver"],
      rating: 4.3,
      reviews: 189,
      description: "Classic Casio digital watch with retro styling and reliable functionality.",
      inStock: true,
    },

    // Citizen Brand
    {
      id: 304,
      name: "Citizen Eco-Drive",
      brand: "citizen",
      price: 18500,
      originalPrice: 22000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "watches",
      sizes: ["One Size"],
      colors: ["silver", "gold", "black"],
      rating: 4.8,
      reviews: 156,
      description: "Solar-powered Eco-Drive technology. Never needs a battery replacement.",
      inStock: true,
    },
    {
      id: 305,
      name: "Citizen Promaster",
      brand: "citizen",
      price: 22500,
      originalPrice: 26000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "watches",
      sizes: ["One Size"],
      colors: ["black", "blue", "silver"],
      rating: 4.7,
      reviews: 134,
      description: "Professional diving watch with 200m water resistance and durable construction.",
      inStock: true,
    },

    // Seiko Brand
    {
      id: 306,
      name: "Seiko 5 Automatic",
      brand: "seiko",
      price: 15500,
      originalPrice: 18000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "watches",
      sizes: ["One Size"],
      colors: ["silver", "gold", "black"],
      rating: 4.6,
      reviews: 198,
      description: "Classic Seiko 5 automatic watch with self-winding movement and day-date display.",
      inStock: true,
    },
    {
      id: 307,
      name: "Seiko Prospex",
      brand: "seiko",
      price: 25500,
      originalPrice: 30000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "watches",
      sizes: ["One Size"],
      colors: ["black", "blue", "orange"],
      rating: 4.8,
      reviews: 167,
      description: "Professional sports watch with solar movement and advanced features.",
      inStock: true,
    },

    // Fossil Brand
    {
      id: 308,
      name: "Fossil Grant Chronograph",
      brand: "fossil",
      price: 14500,
      originalPrice: 17000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "watches",
      sizes: ["One Size"],
      colors: ["brown", "black", "blue"],
      rating: 4.4,
      reviews: 145,
      description: "Classic Fossil Grant chronograph with leather strap and vintage-inspired design.",
      inStock: true,
    },
    {
      id: 309,
      name: "Fossil Smartwatch",
      brand: "fossil",
      price: 28500,
      originalPrice: 32000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "watches",
      sizes: ["One Size"],
      colors: ["black", "silver", "rose gold"],
      rating: 4.3,
      reviews: 234,
      description: "Advanced smartwatch with fitness tracking, notifications, and customizable watch faces.",
      inStock: true,
    },

    // Timex Brand
    {
      id: 310,
      name: "Timex Weekender",
      brand: "timex",
      price: 8500,
      originalPrice: 10000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "watches",
      sizes: ["One Size"],
      colors: ["white", "black", "blue"],
      rating: 4.2,
      reviews: 178,
      description: "Classic Timex Weekender with interchangeable NATO strap and reliable quartz movement.",
      inStock: true,
    },
    {
      id: 311,
      name: "Timex Expedition",
      brand: "timex",
      price: 12000,
      originalPrice: 14500,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "watches",
      sizes: ["One Size"],
      colors: ["black", "green", "brown"],
      rating: 4.4,
      reviews: 156,
      description: "Rugged Timex Expedition with Indiglo night-light and water resistance.",
      inStock: true,
    },

    // Rolex Brand (Premium)
    {
      id: 312,
      name: "Rolex Submariner Homage",
      brand: "rolex",
      price: 45000,
      originalPrice: 55000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "watches",
      sizes: ["One Size"],
      colors: ["black", "blue", "green"],
      rating: 4.9,
      reviews: 89,
      description: "Luxury diving watch inspired by the iconic Submariner design with premium materials.",
      inStock: true,
    },
  ],

  belts: [
    // Leather Belts
    {
      id: 401,
      name: "Genuine Leather Belt",
      brand: "leather",
      price: 2500,
      originalPrice: 3500,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "belts",
      sizes: ["32", "34", "36", "38", "40", "42"],
      colors: ["black", "brown", "tan"],
      rating: 4.3,
      reviews: 98,
      description: "Premium genuine leather belt with classic buckle. Perfect for formal and casual wear.",
      inStock: true,
    },
    {
      id: 402,
      name: "Premium Leather Belt",
      brand: "leather",
      price: 3500,
      originalPrice: 4500,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "belts",
      sizes: ["32", "34", "36", "38", "40", "42"],
      colors: ["black", "brown"],
      rating: 4.5,
      reviews: 134,
      description: "Premium full-grain leather belt with elegant buckle design.",
      inStock: true,
    },
    {
      id: 403,
      name: "Reversible Leather Belt",
      brand: "leather",
      price: 4000,
      originalPrice: 5000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "belts",
      sizes: ["32", "34", "36", "38", "40", "42"],
      colors: ["black", "brown"],
      rating: 4.4,
      reviews: 156,
      description: "Versatile reversible belt offering two colors in one. Black on one side, brown on the other.",
      inStock: true,
    },

    // Canvas Belts
    {
      id: 404,
      name: "Canvas Military Belt",
      brand: "canvas",
      price: 1800,
      originalPrice: 2500,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "belts",
      sizes: ["32", "34", "36", "38", "40", "42"],
      colors: ["black", "green", "brown"],
      rating: 4.1,
      reviews: 89,
      description: "Durable canvas belt with military-style buckle. Perfect for casual wear.",
      inStock: true,
    },
    {
      id: 405,
      name: "Woven Canvas Belt",
      brand: "canvas",
      price: 2200,
      originalPrice: 3000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "belts",
      sizes: ["32", "34", "36", "38", "40"],
      colors: ["navy", "brown", "gray"],
      rating: 4.0,
      reviews: 76,
      description: "Stylish woven canvas belt with leather trim and metal buckle.",
      inStock: true,
    },

    // Designer Belts
    {
      id: 406,
      name: "Designer Logo Belt",
      brand: "designer",
      price: 6500,
      originalPrice: 8000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "belts",
      sizes: ["32", "34", "36", "38", "40", "42"],
      colors: ["black", "brown"],
      rating: 4.6,
      reviews: 145,
      description: "Luxury designer belt with iconic logo buckle and premium leather construction.",
      inStock: true,
    },
    {
      id: 407,
      name: "Luxury Chain Belt",
      brand: "designer",
      price: 5500,
      originalPrice: 7000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "belts",
      sizes: ["32", "34", "36", "38", "40"],
      colors: ["gold", "silver"],
      rating: 4.3,
      reviews: 98,
      description: "Elegant chain belt with luxury finish. Perfect for special occasions.",
      inStock: true,
    },

    // Fabric Belts
    {
      id: 408,
      name: "Elastic Fabric Belt",
      brand: "fabric",
      price: 1500,
      originalPrice: 2000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "belts",
      sizes: ["32", "34", "36", "38", "40", "42"],
      colors: ["black", "navy", "gray"],
      rating: 3.9,
      reviews: 67,
      description: "Comfortable elastic fabric belt with adjustable fit and simple buckle.",
      inStock: true,
    },
  ],

  gowns: [
    // Evening Gowns
    {
      id: 501,
      name: "Elegant Evening Gown",
      brand: "evening",
      price: 15500,
      originalPrice: 20000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "gowns",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["black", "red", "blue", "white"],
      rating: 4.9,
      reviews: 87,
      description: "Stunning evening gown perfect for special occasions. Premium fabric with elegant design.",
      inStock: true,
    },
    {
      id: 502,
      name: "Sequined Evening Dress",
      brand: "evening",
      price: 18500,
      originalPrice: 23000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "gowns",
      sizes: ["XS", "S", "M", "L"],
      colors: ["gold", "silver", "black"],
      rating: 4.7,
      reviews: 134,
      description: "Glamorous sequined evening dress that sparkles under lights. Perfect for galas and parties.",
      inStock: true,
    },
    {
      id: 503,
      name: "Mermaid Evening Gown",
      brand: "evening",
      price: 22500,
      originalPrice: 28000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "gowns",
      sizes: ["XS", "S", "M", "L"],
      colors: ["red", "black", "navy"],
      rating: 4.8,
      reviews: 98,
      description: "Sophisticated mermaid-style evening gown with fitted silhouette and dramatic train.",
      inStock: true,
    },

    // Wedding Gowns
    {
      id: 504,
      name: "Wedding Gown Classic",
      brand: "wedding",
      price: 35000,
      originalPrice: 45000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "gowns",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["white", "ivory"],
      rating: 5.0,
      reviews: 45,
      description: "Beautiful classic wedding gown with intricate lace details and flowing train.",
      inStock: true,
    },
    {
      id: 505,
      name: "Princess Wedding Dress",
      brand: "wedding",
      price: 42000,
      originalPrice: 52000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "gowns",
      sizes: ["XS", "S", "M", "L"],
      colors: ["white", "ivory"],
      rating: 4.9,
      reviews: 67,
      description: "Fairytale princess wedding dress with vol ball gown silhouette and beaded bodice.",
      inStock: true,
    },
    {
      id: 506,
      name: "Bohemian Wedding Gown",
      brand: "wedding",
      price: 28500,
      originalPrice: 35000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "gowns",
      sizes: ["XS", "S", "M", "L"],
      colors: ["white", "ivory", "champagne"],
      rating: 4.6,
      reviews: 89,
      description: "Romantic bohemian wedding gown with flowing fabric and delicate lace details.",
      inStock: true,
    },

    // Cocktail Dresses
    {
      id: 507,
      name: "Cocktail Party Dress",
      brand: "cocktail",
      price: 8500,
      originalPrice: 11000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "gowns",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["black", "red", "blue", "pink"],
      rating: 4.4,
      reviews: 156,
      description: "Chic cocktail dress perfect for parties and semi-formal events.",
      inStock: true,
    },
    {
      id: 508,
      name: "Little Black Dress",
      brand: "cocktail",
      price: 6500,
      originalPrice: 8500,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "gowns",
      sizes: ["XS", "S", "M", "L"],
      colors: ["black"],
      rating: 4.5,
      reviews: 234,
      description: "Classic little black dress. Timeless elegance for any occasion.",
      inStock: true,
    },

    // Prom Dresses
    {
      id: 509,
      name: "Prom Dress Sparkle",
      brand: "prom",
      price: 12500,
      originalPrice: 16000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      category: "gowns",
      sizes: ["XS", "S", "M", "L"],
      colors: ["pink", "blue", "purple", "gold"],
      rating: 4.6,
      reviews: 178,
      description: "Dazzling prom dress with sparkly details and flowing skirt. Perfect for prom night.",
      inStock: true,
    },
    {
      id: 510,
      name: "Two-Piece Prom Dress",
      brand: "prom",
      price: 14500,
      originalPrice: 18000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "gowns",
      sizes: ["XS", "S", "M", "L"],
      colors: ["red", "black", "blue"],
      rating: 4.3,
      reviews: 145,
      description: "Modern two-piece prom dress with crop top and flowing skirt.",
      inStock: true,
    },

    // Maxi Dresses
    {
      id: 511,
      name: "Floral Maxi Dress",
      brand: "maxi",
      price: 4500,
      originalPrice: 6000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "gowns",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["blue", "pink", "white", "green"],
      rating: 4.2,
      reviews: 198,
      description: "Beautiful floral maxi dress perfect for summer occasions and beach events.",
      inStock: true,
    },
    {
      id: 512,
      name: "Solid Color Maxi Dress",
      brand: "maxi",
      price: 3800,
      originalPrice: 5000,
      image: "/placeholder.svg?height=300&width=300",
      images: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
      category: "gowns",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["black", "navy", "red", "green"],
      rating: 4.1,
      reviews: 167,
      description: "Elegant solid color maxi dress with comfortable fit and versatile styling.",
      inStock: true,
    },
  ],
}

// Enhanced Shopping Cart
let shoppingCart = []
let wishlist = []

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"
  document.documentElement.setAttribute("data-theme", savedTheme)
  updateThemeIcon(savedTheme)
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"
  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcon(newTheme)
}

function updateThemeIcon(theme) {
  const themeIcon = document.querySelector(".theme-toggle i")
  if (themeIcon) {
    themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon"
  }
}

// Enhanced Search Functionality
function initializeSearch() {
  const searchInput = document.getElementById("searchInput")
  const searchBtn = document.getElementById("searchBtn")

  if (searchInput && searchBtn) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        performSearch()
      }
    })

    searchBtn.addEventListener("click", performSearch)
  }
}

function performSearch() {
  const searchInput = document.getElementById("searchInput")
  const query = searchInput.value.trim().toLowerCase()

  if (!query) {
    showNotification("Please enter a search term", "warning")
    return
  }

  // Get all products from all categories
  const allProducts = Object.values(productsDatabase).flat()

  // Filter products based on search query
  const results = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query),
  )

  if (results.length === 0) {
    showNotification("No products found matching your search", "info")
    return
  }

  // Display search results
  displaySearchResults(results, query)
  showNotification(`Found ${results.length} products`, "success")
}

function displaySearchResults(results, query) {
  // Create search results page content
  const searchResultsHTML = `
    <div class="search-results-page">
      <div class="container">
        <div class="search-header">
          <h1>Search Results for "${query}"</h1>
          <p>Found ${results.length} products</p>
        </div>
        <div class="products-grid">
          ${results.map((product) => createProductCard(product)).join("")}
        </div>
      </div>
    </div>
  `

  // Replace current page content
  document.body.innerHTML = `
    ${document.querySelector(".navbar").outerHTML}
    ${searchResultsHTML}
    ${document.querySelector(".footer").outerHTML}
  `

  // Reinitialize event listeners
  initializeProductCards()
  initializeCart()
}

// Enhanced Product Card Creation
function createProductCard(product) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${discount > 0 ? `<div class="product-badge">${discount}% OFF</div>` : ""}
      </div>
      <div class="product-info">
        <div class="product-brand">${product.brand.toUpperCase()}</div>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-rating">
          <div class="stars">${generateStars(product.rating)}</div>
          <span class="rating-text">(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="current-price">KSh ${product.price.toLocaleString()}</span>
          ${
            product.originalPrice > product.price
              ? `<span class="original-price">KSh ${product.originalPrice.toLocaleString()}</span>`
              : ""
          }
          ${discount > 0 ? `<span class="discount-badge">${discount}% OFF</span>` : ""}
        </div>
        <div class="product-actions">
          <button class="quick-view" onclick="openProductModal(${product.id})">
            <i class="fas fa-eye"></i> Quick View
          </button>
          <button class="add-to-cart" onclick="addToCart(${product.id})">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  `
}

function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  let stars = ""

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>'
  }

  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>'
  }

  const emptyStars = 5 - Math.ceil(rating)
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>'
  }

  return stars
}

// Enhanced Product Modal
function openProductModal(productId) {
  const allProducts = Object.values(productsDatabase).flat()
  const product = allProducts.find((p) => p.id === productId)

  if (!product) return

  const modal = document.getElementById("productModal")
  const modalContent = modal.querySelector(".modal-body")

  modalContent.innerHTML = `
    <div class="modal-images">
      <div class="main-image">
        <img id="mainProductImage" src="${product.images[0]}" alt="${product.name}">
      </div>
      <div class="thumbnail-images">
        ${product.images
          .map(
            (img, index) => `
          <img class="thumbnail ${index === 0 ? "active" : ""}" 
               src="${img}" 
               alt="${product.name}" 
               onclick="changeMainImage('${img}', this)">
        `,
          )
          .join("")}
      </div>
    </div>
    <div class="modal-info">
      <h2>${product.name}</h2>
      <div class="modal-rating">
        <div class="stars">${generateStars(product.rating)}</div>
        <span>(${product.reviews} reviews)</span>
      </div>
      <div class="modal-price">
        <span class="current-price">KSh ${product.price.toLocaleString()}</span>
        ${
          product.originalPrice > product.price
            ? `<span class="original-price">KSh ${product.originalPrice.toLocaleString()}</span>`
            : ""
        }
      </div>
      <p class="modal-description">${product.description}</p>
      <div class="modal-options">
        ${
          product.sizes.length > 1
            ? `
          <div class="option-group">
            <label>Size:</label>
            <div class="size-options">
              ${product.sizes
                .map(
                  (size) => `
                <button class="size-btn" onclick="selectSize(this)">${size}</button>
              `,
                )
                .join("")}
            </div>
          </div>
        `
            : ""
        }
        ${
          product.colors.length > 1
            ? `
          <div class="option-group">
            <label>Color:</label>
            <div class="color-options">
              ${product.colors
                .map(
                  (color) => `
                <div class="color-option" 
                     style="background-color: ${color}" 
                     onclick="selectColor(this)"
                     title="${color}"></div>
              `,
                )
                .join("")}
            </div>
          </div>
        `
            : ""
        }
        <div class="option-group">
          <label>Quantity:</label>
          <div class="quantity-selector">
            <button class="qty-btn" onclick="changeQuantity(-1)">-</button>
            <input type="number" class="qty-input" value="1" min="1" max="10" id="modalQuantity">
            <button class="qty-btn" onclick="changeQuantity(1)">+</button>
          </div>
        </div>
      </div>
      <div class="modal-actions">
        <button class="add-to-cart-btn" onclick="addToCartFromModal(${product.id})">
          <i class="fas fa-shopping-cart"></i>
          Add to Cart
        </button>
        <button class="wishlist-btn ${isInWishlist(product.id) ? "active" : ""}" 
                onclick="toggleWishlist(${product.id})">
          <i class="fas fa-heart"></i>
        </button>
      </div>
    </div>
  `

  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeProductModal() {
  const modal = document.getElementById("productModal")
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

function changeMainImage(src, thumbnail) {
  const mainImage = document.getElementById("mainProductImage")
  const thumbnails = document.querySelectorAll(".thumbnail")

  mainImage.src = src
  thumbnails.forEach((thumb) => thumb.classList.remove("active"))
  thumbnail.classList.add("active")
}

function selectSize(button) {
  const sizeButtons = document.querySelectorAll(".size-btn")
  sizeButtons.forEach((btn) => btn.classList.remove("active"))
  button.classList.add("active")
}

function selectColor(colorOption) {
  const colorOptions = document.querySelectorAll(".color-option")
  colorOptions.forEach((option) => option.classList.remove("active"))
  colorOption.classList.add("active")
}

function changeQuantity(change) {
  const quantityInput = document.getElementById("modalQuantity")
  const currentValue = Number.parseInt(quantityInput.value)
  const newValue = currentValue + change

  if (newValue >= 1 && newValue <= 10) {
    quantityInput.value = newValue
  }
}

// Enhanced Cart Functionality
function addToCart(productId, quantity = 1) {
  const allProducts = Object.values(productsDatabase).flat()
  const product = allProducts.find((p) => p.id === productId)

  if (!product) return

  const existingItem = shoppingCart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    shoppingCart.push({
      ...product,
      quantity: quantity,
      selectedSize: product.sizes[0],
      selectedColor: product.colors[0],
    })
  }

  updateCartDisplay()
  showNotification(`${product.name} added to cart!`, "success")
  saveCartToStorage()
}

function addToCartFromModal(productId) {
  const quantity = Number.parseInt(document.getElementById("modalQuantity").value)
  const selectedSize = document.querySelector(".size-btn.active")?.textContent || null
  const selectedColor = document.querySelector(".color-option.active")?.title || null

  const allProducts = Object.values(productsDatabase).flat()
  const product = allProducts.find((p) => p.id === productId)

  if (!product) return

  const cartItem = {
    ...product,
    quantity: quantity,
    selectedSize: selectedSize || product.sizes[0],
    selectedColor: selectedColor || product.colors[0],
  }

  const existingItemIndex = shoppingCart.findIndex(
    (item) =>
      item.id === productId &&
      item.selectedSize === cartItem.selectedSize &&
      item.selectedColor === cartItem.selectedColor,
  )

  if (existingItemIndex !== -1) {
    shoppingCart[existingItemIndex].quantity += quantity
  } else {
    shoppingCart.push(cartItem)
  }

  updateCartDisplay()
  closeProductModal()
  showNotification(`${product.name} added to cart!`, "success")
  saveCartToStorage()
}

function removeFromCart(productId, size, color) {
  shoppingCart = shoppingCart.filter(
    (item) => !(item.id === productId && item.selectedSize === size && item.selectedColor === color),
  )
  updateCartDisplay()
  showNotification("Item removed from cart", "info")
  saveCartToStorage()
}

function updateCartQuantity(productId, size, color, newQuantity) {
  const item = shoppingCart.find(
    (item) => item.id === productId && item.selectedSize === size && item.selectedColor === color,
  )

  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(productId, size, color)
    } else {
      item.quantity = newQuantity
      updateCartDisplay()
      saveCartToStorage()
    }
  }
}

function updateCartDisplay() {
  const cartCount = document.querySelector(".cart-count")
  const cartTotal = document.querySelector(".cart-total")
  const cartItems = document.querySelector(".cart-items")

  const totalItems = shoppingCart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = shoppingCart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cartCount) cartCount.textContent = totalItems
  if (cartTotal) cartTotal.textContent = `KSh ${totalPrice.toLocaleString()}`

  if (cartItems) {
    if (shoppingCart.length === 0) {
      cartItems.innerHTML = `
        <div class="empty-cart">
          <i class="fas fa-shopping-cart"></i>
          <p>Your cart is empty</p>
          <small>Add some products to get started</small>
        </div>
      `
    } else {
      cartItems.innerHTML = shoppingCart
        .map(
          (item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-details">
              ${item.selectedSize ? `Size: ${item.selectedSize}` : ""} 
              ${item.selectedColor ? `Color: ${item.selectedColor}` : ""}
            </div>
            <div class="cart-item-price">KSh ${(item.price * item.quantity).toLocaleString()}</div>
          </div>
          <div class="cart-item-actions">
            <div class="cart-item-quantity">
              <button class="cart-qty-btn" onclick="updateCartQuantity(${item.id}, '${
                item.selectedSize
              }', '${item.selectedColor}', ${item.quantity - 1})">-</button>
              <span class="cart-qty-display">${item.quantity}</span>
              <button class="cart-qty-btn" onclick="updateCartQuantity(${item.id}, '${
                item.selectedSize
              }', '${item.selectedColor}', ${item.quantity + 1})">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id}, '${
              item.selectedSize
            }', '${item.selectedColor}')">Remove</button>
          </div>
        </div>
      `,
        )
        .join("")
    }

    // Update cart footer
    const cartFooter = document.querySelector(".cart-footer")
    if (cartFooter && shoppingCart.length > 0) {
      const subtotal = totalPrice
      const shipping = subtotal > 5000 ? 0 : 500
      const total = subtotal + shipping

      cartFooter.querySelector(".cart-total-section").innerHTML = `
        <div class="total-line">
          <span>Subtotal:</span>
          <span>KSh ${subtotal.toLocaleString()}</span>
        </div>
        <div class="total-line">
          <span>Shipping:</span>
          <span>${shipping === 0 ? "Free" : `KSh ${shipping.toLocaleString()}`}</span>
        </div>
        <div class="total-line total">
          <span>Total:</span>
          <span>KSh ${total.toLocaleString()}</span>
        </div>
      `
    }
  }
}

function toggleCart() {
  const cartSidebar = document.querySelector(".cart-sidebar")
  cartSidebar.classList.toggle("active")
}

function closeCart() {
  const cartSidebar = document.querySelector(".cart-sidebar")
  cartSidebar.classList.remove("active")
}

// Wishlist Functionality
function toggleWishlist(productId) {
  const allProducts = Object.values(productsDatabase).flat()
  const product = allProducts.find((p) => p.id === productId)

  if (!product) return

  const existingIndex = wishlist.findIndex((item) => item.id === productId)

  if (existingIndex !== -1) {
    wishlist.splice(existingIndex, 1)
    showNotification(`${product.name} removed from wishlist`, "info")
  } else {
    wishlist.push(product)
    showNotification(`${product.name} added to wishlist!`, "success")
  }

  updateWishlistButtons()
  saveWishlistToStorage()
}

function isInWishlist(productId) {
  return wishlist.some((item) => item.id === productId)
}

function updateWishlistButtons() {
  const wishlistButtons = document.querySelectorAll(".wishlist-btn")
  wishlistButtons.forEach((button) => {
    const productId = Number.parseInt(button.getAttribute("onclick").match(/\d+/)[0])
    if (isInWishlist(productId)) {
      button.classList.add("active")
    } else {
      button.classList.remove("active")
    }
  })
}

// Enhanced Filtering
function initializeFilters() {
  const filterCheckboxes = document.querySelectorAll('.filter-options input[type="checkbox"]')
  const priceSlider = document.getElementById("priceRange")
  const colorOptions = document.querySelectorAll(".color-option")
  const sortSelect = document.getElementById("sortSelect")

  filterCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", applyFilters)
  })

  if (priceSlider) {
    priceSlider.addEventListener("input", function () {
      document.getElementById("priceDisplay").textContent = `Up to KSh ${Number.parseInt(this.value).toLocaleString()}`
      applyFilters()
    })
  }

  colorOptions.forEach((option) => {
    option.addEventListener("click", function () {
      this.classList.toggle("active")
      applyFilters()
    })
  })

  if (sortSelect) {
    sortSelect.addEventListener("change", applyFilters)
  }
}

function applyFilters() {
  const currentCategory = getCurrentCategory()
  if (!currentCategory || !productsDatabase[currentCategory]) return

  let products = [...productsDatabase[currentCategory]]

  // Brand filter
  const selectedBrands = Array.from(document.querySelectorAll('.filter-options input[name="brand"]:checked')).map(
    (cb) => cb.value,
  )

  if (selectedBrands.length > 0) {
    products = products.filter((product) => selectedBrands.includes(product.brand))
  }

  // Price filter
  const maxPrice = document.getElementById("priceRange")?.value
  if (maxPrice) {
    products = products.filter((product) => product.price <= Number.parseInt(maxPrice))
  }

  // Color filter
  const selectedColors = Array.from(document.querySelectorAll(".color-option.active")).map((option) =>
    option.getAttribute("title"),
  )

  if (selectedColors.length > 0) {
    products = products.filter((product) => product.colors.some((color) => selectedColors.includes(color)))
  }

  // Size filter
  const selectedSizes = Array.from(document.querySelectorAll('.filter-options input[name="size"]:checked')).map(
    (cb) => cb.value,
  )

  if (selectedSizes.length > 0) {
    products = products.filter((product) => product.sizes.some((size) => selectedSizes.includes(size)))
  }

  // Sort products
  const sortBy = document.getElementById("sortSelect")?.value
  if (sortBy) {
    switch (sortBy) {
      case "price-low":
        products.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        products.sort((a, b) => b.price - a.price)
        break
      case "rating":
        products.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        products.sort((a, b) => b.id - a.id)
        break
      default:
        // Keep original order
        break
    }
  }

  displayFilteredProducts(products)
  updateResultsCount(products.length)
}

function displayFilteredProducts(products) {
  const brandSections = document.querySelector(".brand-sections")
  if (!brandSections) return

  if (products.length === 0) {
    brandSections.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>No products found</h3>
        <p>Try adjusting your filters or search criteria</p>
      </div>
    `
    return
  }

  // Group products by brand
  const productsByBrand = products.reduce((acc, product) => {
    if (!acc[product.brand]) {
      acc[product.brand] = []
    }
    acc[product.brand].push(product)
    return acc
  }, {})

  brandSections.innerHTML = Object.entries(productsByBrand)
    .map(
      ([brand, brandProducts]) => `
    <div class="brand-section">
      <div class="brand-header">
        <div class="brand-logo">${brand.charAt(0).toUpperCase()}</div>
        <div class="brand-info">
          <h3>${brand.charAt(0).toUpperCase() + brand.slice(1)}</h3>
          <p>${brandProducts.length} products</p>
        </div>
      </div>
      <div class="brand-products">
        ${brandProducts.map((product) => createProductCard(product)).join("")}
      </div>
    </div>
  `,
    )
    .join("")

  // Reinitialize product card events
  initializeProductCards()
}

function updateResultsCount(count) {
  const resultsInfo = document.querySelector(".results-info")
  if (resultsInfo) {
    resultsInfo.textContent = `Showing ${count} products`
  }
}

function clearFilters() {
  // Clear checkboxes
  document.querySelectorAll('.filter-options input[type="checkbox"]').forEach((cb) => {
    cb.checked = false
  })

  // Reset price slider
  const priceSlider = document.getElementById("priceRange")
  if (priceSlider) {
    priceSlider.value = priceSlider.max
    document.getElementById("priceDisplay").textContent =
      `Up to KSh ${Number.parseInt(priceSlider.max).toLocaleString()}`
  }

  // Clear color selections
  document.querySelectorAll(".color-option").forEach((option) => {
    option.classList.remove("active")
  })

  // Reset sort
  const sortSelect = document.getElementById("sortSelect")
  if (sortSelect) {
    sortSelect.value = "featured"
  }

  applyFilters()
}

function getCurrentCategory() {
  const path = window.location.pathname
  if (path.includes("sneakers")) return "sneakers"
  if (path.includes("shoes")) return "shoes"
  if (path.includes("clothes")) return "clothes"
  if (path.includes("watches")) return "watches"
  if (path.includes("belts")) return "belts"
  if (path.includes("gowns")) return "gowns"
  return null
}

// Enhanced Notifications
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.innerHTML = `
    <i class="fas fa-${getNotificationIcon(type)}"></i>
    <span>${message}</span>
    <button onclick="this.parentElement.remove()">
      <i class="fas fa-times"></i>
    </button>
  `

  document.body.appendChild(notification)

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove()
    }
  }, 5000)
}

function getNotificationIcon(type) {
  switch (type) {
    case "success":
      return "check-circle"
    case "error":
      return "exclamation-circle"
    case "warning":
      return "exclamation-triangle"
    default:
      return "info-circle"
  }
}

// Local Storage Functions
function saveCartToStorage() {
  localStorage.setItem("prinor_cart", JSON.stringify(shoppingCart))
}

function loadCartFromStorage() {
  const savedCart = localStorage.getItem("prinor_cart")
  if (savedCart) {
    shoppingCart = JSON.parse(savedCart)
    updateCartDisplay()
  }
}

function saveWishlistToStorage() {
  localStorage.setItem("prinor_wishlist", JSON.stringify(wishlist))
}

function loadWishlistFromStorage() {
  const savedWishlist = localStorage.getItem("prinor_wishlist")
  if (savedWishlist) {
    wishlist = JSON.parse(savedWishlist)
  }
}

// Enhanced Mobile Navigation
function toggleMobileMenu() {
  const navMenu = document.querySelector(".nav-menu")
  const hamburger = document.querySelector(".hamburger")

  navMenu.classList.toggle("active")
  hamburger.classList.toggle("active")
}

// Enhanced Page Initialization
function initializePage() {
  initializeTheme()
  initializeSearch()
  initializeCart()
  initializeProductCards()
  initializeFilters()
  loadCartFromStorage()
  loadWishlistFromStorage()
  initializeAnimations()
  initializeFAQ()
}

function initializeCart() {
  // Cart icon click handler
  const cartIcon = document.querySelector(".cart-icon")
  if (cartIcon) {
    cartIcon.addEventListener("click", toggleCart)
  }

  // Cart close button
  const cartClose = document.querySelector(".cart-close")
  if (cartClose) {
    cartClose.addEventListener("click", closeCart)
  }

  // Cart overlay click to close
  const cartSidebar = document.querySelector(".cart-sidebar")
  if (cartSidebar) {
    cartSidebar.addEventListener("click", (e) => {
      if (e.target === cartSidebar) {
        closeCart()
      }
    })
  }

  // Theme toggle
  const themeToggle = document.querySelector(".theme-toggle")
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger")
  if (hamburger) {
    hamburger.addEventListener("click", toggleMobileMenu)
  }

  // Product modal close
  const modalClose = document.querySelector(".modal-close")
  if (modalClose) {
    modalClose.addEventListener("click", closeProductModal)
  }

  // Modal overlay click to close
  const productModal = document.getElementById("productModal")
  if (productModal) {
    productModal.addEventListener("click", (e) => {
      if (e.target === productModal || e.target.classList.contains("modal-overlay")) {
        closeProductModal()
      }
    })
  }

  updateCartDisplay()
}

function initializeProductCards() {
  // Add event listeners to product cards for quick view and add to cart
  const productCards = document.querySelectorAll(".product-card")
  productCards.forEach((card) => {
    const productId = Number.parseInt(card.getAttribute("data-product-id"))

    // Quick view on card click (except buttons)
    card.addEventListener("click", (e) => {
      if (!e.target.closest("button")) {
        openProductModal(productId)
      }
    })
  })
}

// Enhanced Animations
function initializeAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".product-card, .category-card, .offer-card, .team-member, .value-card",
  )
  animateElements.forEach((el) => observer.observe(el))
}

// FAQ Functionality
function initializeFAQ() {
  const faqQuestions = document.querySelectorAll(".faq-question")
  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.parentElement
      const isActive = faqItem.classList.contains("active")

      // Close all FAQ items
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active")
      })

      // Open clicked item if it wasn't active
      if (!isActive) {
        faqItem.classList.add("active")
      }
    })
  })
}

// Newsletter Subscription
function subscribeNewsletter() {
  const emailInput = document.querySelector('.newsletter-form input[type="email"]')
  const email = emailInput.value.trim()

  if (!email) {
    showNotification("Please enter your email address", "warning")
    return
  }

  if (!isValidEmail(email)) {
    showNotification("Please enter a valid email address", "error")
    return
  }

  // Simulate newsletter subscription
  showNotification("Thank you for subscribing to our newsletter!", "success")
  emailInput.value = ""
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Contact Form Submission
function submitContactForm(event) {
  event.preventDefault()

  const form = event.target
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)

  // Basic validation
  if (!data.name || !data.email || !data.message) {
    showNotification("Please fill in all required fields", "warning")
    return
  }

  if (!isValidEmail(data.email)) {
    showNotification("Please enter a valid email address", "error")
    return
  }

  // Simulate form submission
  showNotification("Thank you for your message! We'll get back to you soon.", "success")
  form.reset()
}

// Enhanced Error Handling
window.addEventListener("error", (e) => {
  console.error("JavaScript Error:", e.error)
  showNotification("Something went wrong. Please refresh the page.", "error")
})

// Initialize page when DOM is loaded
document.addEventListener("DOMContentLoaded", initializePage)

// Handle page visibility changes
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    // Refresh cart display when page becomes visible
    updateCartDisplay()
  }
})

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // Escape key to close modals
  if (e.key === "Escape") {
    closeProductModal()
    closeCart()
  }

  // Ctrl/Cmd + K to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault()
    const searchInput = document.getElementById("searchInput")
    if (searchInput) {
      searchInput.focus()
    }
  }
})

// Smooth scrolling for anchor links
document.addEventListener("click", (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }
})

// Lazy loading for images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src || img.src
        img.classList.remove("lazy")
        observer.unobserve(img)
      }
    })
  })

  document.querySelectorAll("img[loading='lazy']").forEach((img) => {
    imageObserver.observe(img)
  })
}

// Performance monitoring
if ("performance" in window) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType("navigation")[0]
      console.log("Page Load Time:", perfData.loadEventEnd - perfData.loadEventStart, "ms")
    }, 0)
  })
}
