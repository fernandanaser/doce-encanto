const bolos = [
  {
    id: 1,
    nome: "Coelhito",
    categoria: "Chocolate",
    descricao:
      "Bolo fofinho",
    preco: "50,00",
    url: "https://i.pinimg.com/564x/a1/1e/f9/a11ef98ec06fb8dc35b284cd010b1391.jpg",
  },
  {
    id: 2,
    nome: "Gatitos irmãos",
    categoria: "Chocolate",
    descricao:
      "Bolo delicioso",
      preco: "60,00",
    url: "https://i.pinimg.com/564x/a0/00/97/a000978e8b9234af2609ece3ecb9763a.jpg",
  },
  {
    id: 3,
    nome: "Hello Kitty",
    categoria: "Cholocate",
    descricao:
      "Bolo tentador",
      preco: "80,00",
    url: "https://i.pinimg.com/564x/78/3d/64/783d6490dfab6238aace25c5f6c0e019.jpg",
  },
  {
    id: 4,
    nome: "Ribbons",
    categoria: "Morango",
    descricao:
      "Bolo exuberante",
      preco: "50,00",
    url: "https://i.pinimg.com/564x/b0/85/97/b0859768804f2078e3016d911d99ca86.jpg",
  },
  {
    id: 5,
    nome: "Kawaii Coelhito",
    categoria: "Morango",
    descricao:
      "Bolo encantador",
      preco: "70,00",
    url: "https://i.pinimg.com/564x/85/d7/b2/85d7b246495465ce3e3d2d0f228b73ba.jpg",
  },
  {
    id: 6,
    nome: "Pink heart",
    categoria: "Morango",
    descricao:
      "Bolo divino",
      preco: "90,00",
    url: "https://i.pinimg.com/564x/cc/00/a0/cc00a0c802127a854e9e5db853d0d1a3.jpg",
  },
  {
    id: 7,
    nome: "White",
    categoria: "Doce de leite",
    descricao:
      "Bolo macio",
      preco: "50,00",
    url: "https://i.pinimg.com/564x/64/76/40/6476402dbd6a8f57851a0a89049d7734.jpg",
  },
  {
    id: 8,
    nome: "Soft",
    categoria: "Doce de leite",
    descricao:
      "Bolo apaixonante",
      preco: "60,00",
    url: "https://i.pinimg.com/564x/bf/a7/db/bfa7dbb293a37a9774f3b814b0d8bbc5.jpg",
  },
  {
    id: 9,
    nome: "Doguinho",
    categoria: "Doce de leite",
    descricao:
      "Bolo requintado",
      preco: "85,00",
    url: "https://i.pinimg.com/564x/59/17/e4/5917e435ce86b3250e5f4123a0cdd736.jpg",
  },
  {
    id: 10,
    nome: "Friends",
    categoria: "Leite Ninho",
    descricao:
      "Bolo irresistível",
      preco: "60,00",
    url: "https://i.pinimg.com/564x/22/ba/1c/22ba1ca93245e94f37e615b6059dbd9f.jpg",
  },
  {
    id: 11,
    nome: "HBD",
    categoria: "Leite Ninho",
    descricao:
      "Bolo fofinho",
      preco: "55,00",
    url: "https://i.pinimg.com/564x/cb/bc/e6/cbbce6928e36ea39fef1bd3c065de325.jpg",
  },
  {
    id: 12,
    nome: "Love",
    categoria: "Leite Ninho",
    descricao:
      "Bolo magnífico",
      preco: "80,00",
    url: "https://i.pinimg.com/564x/3d/8d/01/3d8d01a66895e7fb1fe66975eb58da85.jpg",
  },
  {
    id: 13,
    nome: "Cute",
    categoria: "Brigadeiro",
    descricao:
      "Bolo saboroso",
      preco: "95,00",
    url: "https://i.pinimg.com/564x/df/77/ce/df77ce9d038d8a05dde3c5075bd304f0.jpg",
  },
  {
    id: 14,
    nome: "My Melody",
    categoria: "Brigadeiro",
    descricao:
      "Bolo dos deuses",
      preco: "65,00",
    url: "https://i.pinimg.com/564x/01/5e/08/015e08b3942b5606eee337ec678d6593.jpg",
  },
  {
    id: 15,
    nome: "Cherry",
    categoria: "Brigadeiro",
    descricao:
      "Bolo surpreendente",
      preco: "60,00",
    url: "https://i.pinimg.com/564x/cc/e5/0a/cce50a6f93b9bbf6f83a5505a1a09307.jpg",
  },
  {
    id: 16,
    nome: "Wedding",
    categoria: "Chocolate",
    descricao:
      "Bolo único",
      preco: "70,00",
    url: "https://i.pinimg.com/564x/e5/c3/74/e5c37454733881829ab5f02a19020f4a.jpg",
  },
  {
    id: 17,
    nome: "Sanrio",
    categoria: "Morango",
    descricao:
      "Bolo celestial",
      preco: "85,00",
    url: "https://i.pinimg.com/564x/3d/76/fa/3d76fa1a8cd57222ed7136c870688b59.jpg",
  },
  {
    id: 18,
    nome: "Yellow flowers",
    categoria: "Doce de leite",
    descricao:
      "Bolo maravilhoso",
      preco: "55,00",
    url: "https://i.pinimg.com/564x/87/cc/91/87cc91879649e7e7ba229014554b942a.jpg",
  },
  {
    id: 19,
    nome: "Purple flowers",
    categoria: "Leite Ninho",
    descricao:
      "Bolo incrível",
      preco: "50,00",
    url: "https://i.pinimg.com/564x/89/97/06/899706c7b8b5cfaa8a398abec0cd1622.jpg",
  },
  {
    id: 20,
    nome: "Cinnamoroll",
    categoria: "Brigadeiro",
    descricao:
      "Bolo espetacular",
      preco: "50,00",
    url: "https://i.pinimg.com/564x/e0/b1/08/e0b1080bd9d53ce3bdff7cebadf55db5.jpg",
  },
];
