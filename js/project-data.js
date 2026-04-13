const projectsData = [
    {
        id: 'samsung-smartthings',
        title: 'Samsung SmartThings',
        tag: 'Social Post',
        brand: 'Samsung',
        desc: 'Social media campaign for Samsung SmartThings — designing social posts for the "Một Chạm Là Thảnh Thơi" campaign and engagement minigame.',
        images: ['images/page-02.jpg', 'images/page-03.jpg'],
        captions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.']
    },
    {
        id: 'aussie-beef',
        title: 'Aussie Beef & Lamb',
        tag: 'Key Visual',
        brand: 'Aussie Beef & Lamb',
        desc: 'Key visual for the "Nhà Sạch Thì Mát, Bò Mát Ngon Cơm" campaign — main KV design and multi-format adaptation.',
        images: ['images/page-04.jpg', 'images/page-05.jpg'],
        captions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.']
    },
    {
        id: 'fwd',
        title: 'FWD Insurance',
        tag: 'Social Post',
        brand: 'FWD',
        desc: 'Social media campaign for FWD Insurance — designing social posts for FWD\'s 10th anniversary campaign in Vietnam.',
        images: ['images/page-06.jpg'],
        captions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
    },
    {
        id: 'itel',
        title: 'Itel Mobile',
        tag: 'Key Visual / Social Post / Comic Series / Mascot Design',
        brand: 'Itel',
        desc: 'Multi-faceted project for Itel Mobile — from the "Hoàn 100% Giá Gói" campaign key visual, social posts, comic series, to mascot design.',
        images: ['images/page-07.jpg', 'images/page-08.jpg', 'images/page-09.jpg', 'images/page-10.jpg', 'images/page-11.jpg', 'images/page-12.jpg'],
        captions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus.']
    },
    {
        id: 'gen-hoa-hoi',
        title: 'Gen Hoa Hội Campaign',
        tag: 'Campaign / Course Project',
        brand: 'Gen Hoa Hội',
        desc: 'Campaign design for the Gen Hoa Hội cultural event — including posters, backdrops, merchandise, and communication materials.',
        images: ['images/page-13.jpg'],
        captions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
    },
    {
        id: 'castrol',
        title: 'Castrol Super Live 24.03',
        tag: 'Motion Visual / Banner',
        brand: 'Castrol',
        desc: 'Motion visual live and banner design for the Castrol Super Live 24.03 event.',
        images: ['images/page-14.jpg'],
        captions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
    },
    {
        id: 'stride',
        title: 'Stride B2B Event',
        tag: 'Key Visual',
        brand: 'Stride',
        desc: 'Key visual for a B2B event — from sketching and storyboarding to the final key visual for a healthcare campaign.',
        images: ['images/page-15.jpg'],
        captions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
    },
    {
        id: 'isuzu',
        title: 'Isuzu Vilog 2025',
        tag: 'Key Visual',
        brand: 'Isuzu',
        desc: 'Key visual for the Isuzu Vilog 2025 campaign.',
        images: ['images/page-16.jpg'],
        captions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
    },
    {
        id: 'deli',
        title: 'Deli',
        tag: 'Key Visual',
        brand: 'Deli',
        desc: 'Key visual for the Deli stationery brand.',
        images: ['images/page-17.jpg'],
        captions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
    },
    {
        id: 'samsung-sft',
        title: 'Samsung Solve for Tomorrow 2025',
        tag: 'Social Post',
        brand: 'Samsung',
        desc: 'Social post design for the Samsung Solve for Tomorrow 2025 program.',
        images: ['images/page-18.jpg'],
        captions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
    },
    {
        id: 'maison-marou',
        title: 'Maison Marou Christmas 2025',
        tag: 'Course Project',
        brand: 'Maison Marou',
        desc: 'Couple Christmas Collection design for Maison Marou — from color palette and sketching to the final key visual.',
        images: ['images/page-19.jpg'],
        captions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
    },
    {
        id: 'mobifone',
        title: 'Mobifone & Vietnamobile',
        tag: 'Social Post / E-commerce Banner',
        brand: 'Mobifone / Vietnamobile',
        desc: 'Social post design for Mobifone and e-commerce banner for Vietnamobile.',
        images: ['images/page-20.jpg'],
        captions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
    },
    {
        id: 'cats-lab',
        title: "Cat's Lab Livestream",
        tag: 'Motion Visual / Banner',
        brand: "Cat's Lab",
        desc: "Motion visual live and banner design for Cat's Lab livestream sessions.",
        images: ['images/page-21.jpg', 'images/page-22.jpg'],
        captions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.']
    },
    {
        id: 'coocaa',
        title: 'Coocaa TV',
        tag: 'Motion Clip / Social Post / Print',
        brand: 'Coocaa TV',
        desc: 'Motion clip, social post, and print materials for the Coocaa TV brand campaign and Lucky Draw event.',
        images: ['images/page-23.jpg', 'images/page-24.jpg', 'images/page-25.jpg'],
        captions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.']
    },
    {
        id: 'gs-battery',
        title: 'GS Battery',
        tag: 'Motion Clip',
        brand: 'GS Battery',
        desc: 'Motion clip for the GS Battery brand.',
        images: ['images/page-26.jpg'],
        captions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
    },
    {
        id: 'bama',
        title: 'Bama',
        tag: 'Social Post',
        brand: 'Bama',
        desc: 'Social post design for the Bama backpack brand — product showcase and lifestyle content.',
        images: ['images/page-27.jpg', 'images/page-28.jpg', 'images/page-29.jpg'],
        captions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.']
    }
];
