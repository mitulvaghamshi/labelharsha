const Inventory = {};

const root = document.getElementById("product-container");

Inventory.Catalog = ((root) => {
    const d1g1 = [
        {
            "id": "1",
            "tag": "LH01/ALL",
            "badge": "In Stock",
            "image": "item1.webp",
            "product": "Terracotta Slit Tassel Kurta",
            "material": "Premium Slub Cotton",
            "category": "single kurta",
            "price": "1100",
            "discount": "10",
            "description": "Elegant sleeveless rust-red kurta featuring a high center slit with patterned blue accents and front tassels."
        },
        {
            "id": "2",
            "tag": "LH02/ALL",
            "badge": "In Stock",
            "image": "item2.webp",
            "product": "Indigo Leaf Printed Kurta",
            "material": "Soft Crepe Silk",
            "category": "single kurta",
            "price": "1290",
            "discount": "10",
            "description": "A striking royal blue long-sleeved kurta adorned with a contrast leaf-and-flower motif on the front."
        },
        {
            "id": "3",
            "tag": "LH03/ALL",
            "badge": "In Stock",
            "image": "item3.webp",
            "product": "Charcoal Floral Contrast Kurta",
            "material": "Chanderi Blend",
            "category": "single kurta",
            "price": "1290",
            "discount": "10",
            "description": "Modern greyish-brown straight kurta featuring contrast black panels and bold printed floral outlines."
        },
        {
            "id": "4",
            "tag": "LH04/ALL",
            "badge": "In Stock",
            "image": "item4.webp",
            "product": "Magenta Kaftan Dress",
            "material": "Flowy Georgette",
            "category": "tunic/kaftan",
            "price": "1750",
            "discount": "10",
            "description": "A luxurious flowy kaftan dress in rich magenta featuring a symmetric ivory white pattern and a relaxed drape."
        },
        {
            "id": "5",
            "tag": "LH05/ALL",
            "badge": "In Stock",
            "image": "item5.webp",
            "product": "Pastel Blue Peplum Set",
            "material": "Soft Muslin Cotton",
            "category": "kurta + pants (set)",
            "price": "1290",
            "discount": "10",
            "description": "Sleeveless short peplum style kurti in light blue and lime green print, paired with green leaf patterned pants."
        },
        {
            "id": "6",
            "tag": "LH06/ALL",
            "badge": "In Stock",
            "image": "item6.webp",
            "product": "Fuchsia Kutch Embroidered Set",
            "material": "Art Silk",
            "category": "kurta + trouser (set)",
            "price": "1890",
            "discount": "10",
            "description": "Fuchsia/magenta kurta with multi-colored Gujarati embroidery and tassel details, paired with matching trousers."
        },
        {
            "id": "7",
            "tag": "LH07/ALL",
            "badge": "In Stock",
            "image": "item7.webp",
            "product": "Cream Mauve Ombre Set",
            "material": "Premium Rayon",
            "category": "co-ord set/gown style",
            "price": "1900",
            "discount": "10",
            "description": "Silk/rayon co-ord set with a diagonal ombre/tie-dye print running from cream to mauve/plum, with embroidered details."
        },
        {
            "id": "8",
            "tag": "LH08/ALL",
            "badge": "In Stock",
            "image": "item8.webp",
            "product": "Sand Linen Co-ord Set",
            "material": "Raw Linen Cotton",
            "category": "co-ord tunic",
            "price": "1290",
            "discount": "10",
            "description": "Beige/sand-colored linen co-ord set with a button-down shirt featuring textured, raw-edge square fabric patches."
        },
        {
            "id": "9",
            "tag": "LH09/ALL",
            "badge": "In Stock",
            "image": "item9.webp",
            "product": "Lilac Scalloped Kurta Set",
            "material": "Premium Cotton",
            "category": "kurta + pants (set)",
            "price": "1680",
            "discount": "10",
            "description": "Lilac/lavender colored kurti set with a scalloped hem, featuring colorful geometric embroidery and wide-leg pants."
        },
        {
            "id": "10",
            "tag": "LH010/ALL",
            "badge": "In Stock",
            "image": "item10.webp",
            "product": "Taupe Floral Embroidered Set",
            "material": "Cotton Linen",
            "category": "tunic set",
            "price": "1370",
            "discount": "10",
            "description": "Grey/taupe mandarin collar linen tunic set with pink and gold floral embroidery around the waist."
        },
        {
            "id": "11",
            "tag": "LH011/ALL",
            "badge": "In Stock",
            "image": "item11.webp",
            "product": "Mustard Lotus High-Low Set",
            "material": "Pure Crepe",
            "category": "long kurta/gown style",
            "price": "2015",
            "discount": "10",
            "description": "Mustard yellow high-low asymmetric silk/crepe kurta set with olive borders and lotus prints."
        },
        {
            "id": "12",
            "tag": "LH012/ALL",
            "badge": "In Stock",
            "image": "item12.webp",
            "product": "Wine Kalamkari Kurta Set",
            "material": "Satin Silk",
            "category": "silk kurta set",
            "price": "2015",
            "discount": "10",
            "description": "Wine/plum colored silk/satin finish kurta set with hand-painted or printed floral and paisley designs."
        },
        {
            "id": "13",
            "tag": "LH0013/ALL",
            "badge": "In Stock",
            "image": "item13.webp",
            "product": "Sky Blue Striped Printed Kurta Set",
            "material": "Cotton",
            "category": "kurta + pants (set)",
            "price": "1450",
            "discount": "10",
            "description": "Sky blue and white striped kurta set featuring circular ethnic motifs, relaxed silhouette, three-quarter sleeves, and matching straight pants."
        },
        {
            "id": "14",
            "tag": "LH0014/ALL",
            "badge": "In Stock",
            "image": "item14.webp",
            "product": "Wine Printed Co-ord Set",
            "material": "Cotton",
            "category": "tunic + pants (co-ord)",
            "price": "1360",
            "discount": "10",
            "description": "Wine and blue printed co-ord set with an A-line collared tunic, statement sleeves, and matching straight-fit pants featuring coordinated border detailing."
        },
        {
            "id": "15",
            "tag": "LH015/ALL",
            "badge": "Out of Stock",
            "image": "item15.webp",
            "product": "Mint Printed Co-Ord Kurta Set",
            "material": "Cotton",
            "category": "kurta set",
            "price": "0",
            "discount": "0",
            "description": "Mint green printed kurta set with subtle white ethnic motifs, collared neckline, and striped straight-fit pants. A comfortable and contemporary everyday ethnic outfit."
        },
        {
            "id": "16",
            "tag": "LH016/ALL",
            "badge": "In Stock",
            "image": "item16.webp",
            "product": "Indigo Block Print Anarkali Kurta Set",
            "material": "Premium Cotton Blend",
            "category": "kurta + pants + dupatta",
            "price": "1570",
            "discount": "10",
            "description": "A stunning navy blue Anarkali kurta featuring intricate block print motifs, a flared silhouette with decorative borders, and a matching dupatta. Crafted from premium cotton for a comfortable ethnic look."
        },
        {
            "id": "17",
            "tag": "LH017/ALL",
            "badge": "In Stock",
            "image": "item17.webp",
            "product": "Terracotta Floral Embroidery Kurta Set",
            "material": "Premium Cotton Blend",
            "category": "kurta + trousers + dupatta",
            "price": "1160",
            "discount": "10",
            "description": "Elegant terracotta-colored kurta featuring white floral embroidery and a matching scalloped-edge dupatta, paired with coordinated straight trousers."
        },
        {
            "id": "18",
            "tag": "LH0018/ALL",
            "badge": "In Stock",
            "image": "item18.webp",
            "product": "Mint Floral Embroidered Kurta Set",
            "material": "Chiffon",
            "category": "kurta + trousers",
            "price": "2150",
            "discount": "10",
            "description": "Soft mint green kurta set adorned with delicate pink floral embroidery, scalloped hem detailing, three-quarter sleeves, and tapered matching trousers."
        },
    ];

    const d1g2 = [
        {
            "id": "19",
            "tag": "LH019/ALL",
            "badge": "In Stock",
            "image": "item19.webp",
            "product": "Indigo Printed Suit Set",
            "material": "Printed Lawn Cotton",
            "category": "kurta + pants + dupatta",
            "price": "1650",
            "discount": "10",
            "description": "Stylish indigo-blue printed suit featuring traditional geometric and floral patterns, coordinated palazzo pants, and a matching printed dupatta with tassel accents."
        },
        {
            "id": "20",
            "tag": "LH020/ALL",
            "badge": "In Stock",
            "image": "item20.webp",
            "product": "Ivory Tribal Print Kurta Set",
            "material": "Printed Lawn Cotton",
            "category": "kurta + trousers",
            "price": "1700",
            "discount": "10",
            "description": "Elegant ivory kurta set adorned with vibrant tribal-inspired geometric motifs in earthy tones, paired with straight-fit trousers. Features intricate front panel detailing, printed sleeve accents, and a comfortable contemporary silhouette suitable for casual and festive wear."
        },
        {
            "id": "21",
            "tag": "LH021/ALL",
            "badge": "In Stock",
            "image": "item21.webp",
            "product": "Sky Blue Printed Suit Set",
            "material": "Printed Lawn Cotton",
            "category": "kurta + pants + dupatta",
            "price": "1160",
            "discount": "10",
            "description": "Graceful sky-blue printed suit featuring delicate white floral-inspired block motifs, coordinated straight pants, and a matching printed dupatta with decorative border detailing. Designed with a flattering V-neckline and subtle embellishments for an effortlessly elegant look."
        },
        {
            "id": "22",
            "tag": "LH022/ALL",
            "badge": "In Stock",
            "image": "item22.webp",
            "product": "Olive Geometric Printed Suit Set",
            "material": "Printed Lawn Cotton",
            "category": "kurta + trousers + dupatta",
            "price": "2280",
            "discount": "10",
            "description": "Contemporary olive-green printed suit showcasing bold geometric and abstract patterns in contrasting navy and earthy tones. Paired with matching trousers and a coordinated printed dupatta, this statement ensemble blends traditional artistry with modern sophistication."
        },
        {
            "id": "23",
            "tag": "LH023/ALL",
            "badge": "In Stock",
            "image": "item23.webp",
            "product": "Lavender Embellished Co-ord Set",
            "material": "Chiffon & Crepe",
            "category": "poncho/tunic + palazzo",
            "price": "3100",
            "discount": "10",
            "description": "Graceful lavender co-ord set featuring a flowy embellished poncho-style top with delicate embroidery along the neckline and sleeves, paired with wide-leg palazzo pants for an elegant contemporary silhouette."
        },
    ];

    const d2g1 = [
        {
            "id": "1-1",
            "tag": "LH01-1/ALL",
            "badge": "In Stock",
            "image": "item.1.1.webp",
            "product": "Slate Grey V-Neck Set",
            "material": "Premium Linen Blend",
            "category": "salwar-kameez",
            "price": "1750",
            "discount": "10",
            "description": "Charcoal grey straight kurta featuring a delicate embroidered V-neckline and floral motifs."
        },
        {
            "id": "1-2",
            "tag": "LH01-2/ALL",
            "badge": "In Stock",
            "image": "item.1.2.webp",
            "product": "Teal Blue V-Neck Set",
            "material": "Premium Linen Blend",
            "category": "salwar-kameez",
            "price": "1750",
            "discount": "10",
            "description": "Dusty teal blue straight kurta featuring a delicate embroidered V-neckline and floral motifs."
        },
        {
            "id": "1-3",
            "tag": "LH01-3/ALL",
            "badge": "In Stock",
            "image": "item.1.3.webp",
            "product": "Mustard Yellow V-Neck Set",
            "material": "Premium Linen Blend",
            "category": "salwar-kameez",
            "price": "1750",
            "discount": "10",
            "description": "Bright mustard yellow straight kurta featuring a delicate embroidered V-neckline and floral motifs."
        },
        {
            "id": "1-4",
            "tag": "LH01-4/ALL",
            "badge": "In Stock",
            "image": "item.1.4.webp",
            "product": "Rust Orange V-Neck Set",
            "material": "Premium Linen Blend",
            "category": "salwar-kameez",
            "price": "1750",
            "discount": "10",
            "description": "Vibrant rust orange straight kurta featuring a delicate embroidered V-neckline and floral motifs."
        },
    ];

    const d2g2 = [

        {
            "id": "2-1",
            "tag": "LH02-1/ALL",
            "badge": "In Stock",
            "image": "item.2.1.webp",
            "product": "Deep Teal Silk Kurta Set",
            "material": "Banarasi Satin Silk",
            "category": "silk kurta",
            "price": "1390",
            "discount": "10",
            "description": "Deep teal/ocean blue silk/satin kurta with beads on the neckline and floral embroidery near the hem."
        },
        {
            "id": "2-2",
            "tag": "LH02-2/ALL",
            "badge": "In Stock",
            "image": "item.2.2.webp",
            "product": "Magenta Silk Kurta Set",
            "material": "Banarasi Satin Silk",
            "category": "silk kurta",
            "price": "1390",
            "discount": "10",
            "description": "Vibrant deep pink/magenta silk/satin kurta with beads on the neckline and floral embroidery near the hem."
        },
        {
            "id": "2-3",
            "tag": "LH02-3/ALL",
            "badge": "In Stock",
            "image": "item.2.3.webp",
            "product": "Deep Plum Silk Kurta Set",
            "material": "Banarasi Satin Silk",
            "category": "silk kurta",
            "price": "1390",
            "discount": "10",
            "description": "Rich dark plum/purple silk/satin kurta with beads on the neckline and floral embroidery near the hem."
        },
        {
            "id": "2-4",
            "tag": "LH02-4/ALL",
            "badge": "In Stock",
            "image": "item.2.4.webp",
            "product": "Metallic Copper Kurta Set",
            "material": "Banarasi Satin Silk",
            "category": "silk kurta",
            "price": "1390",
            "discount": "10",
            "description": "Sleek copper brown/rust silk/satin kurta with beads on the neckline and floral embroidery near the hem."
        },
    ];

    const d2g3 = [
        {
            "id": "3-1",
            "tag": "LH03-1/ALL",
            "badge": "In Stock",
            "image": "item.3.1.webp",
            "product": "Magenta Sleeveless Kurta Set",
            "material": "Soft Art Rayon",
            "category": "short kurta",
            "price": "1050",
            "discount": "10",
            "description": "Sleeveless straight-cut silk/rayon kurti in bright magenta pink, featuring mirror work on the neck."
        },
        {
            "id": "3-2",
            "tag": "LH03-2/ALL",
            "badge": "In Stock",
            "image": "item.3.2.webp",
            "product": "Deep Purple Sleeveless Kurta Set",
            "material": "Soft Art Rayon",
            "category": "short kurta",
            "price": "1050",
            "discount": "10",
            "description": "Sleeveless straight-cut silk/rayon kurti in deep purple, featuring mirror work on the neck."
        },
        {
            "id": "3-3",
            "tag": "LH03-3/ALL",
            "badge": "In Stock",
            "image": "item.3.3.webp",
            "product": "Burgundy Sleeveless Kurta Set",
            "material": "Soft Art Rayon",
            "category": "short kurta",
            "price": "1050",
            "discount": "10",
            "description": "Sleeveless straight-cut silk/rayon kurti in dark burgundy, featuring mirror work on the neck."
        },
    ];

    const d2g4 = [
        {
            "id": "4-1",
            "tag": "LH04-1/ALL",
            "badge": "In Stock",
            "image": "item.4.1.webp",
            "product": "Taupe Mesh Applique Set",
            "material": "Cotton Linen Blend",
            "category": "tunic + pants",
            "price": "1470",
            "discount": "10",
            "description": "Tunics, Greyish brown/taupe short kurta with applique cut-out mesh flower details and matching wide-leg pants."
        },
        {
            "id": "4-2",
            "tag": "LH04-2/ALL",
            "badge": "In Stock",
            "image": "item.4.2.webp",
            "product": "Yellow Mesh Applique Set",
            "material": "Cotton Linen Blend",
            "category": "tunic + pants",
            "price": "1470",
            "discount": "10",
            "description": "Mustard yellow short kurta with applique cut-out mesh flower details and matching wide-leg pants."
        },
        {
            "id": "4-3",
            "tag": "LH04-3/ALL",
            "badge": "In Stock",
            "image": "item.4.3.webp",
            "product": "Coral Mesh Applique Set",
            "material": "Cotton Linen Blend",
            "category": "tunic + pants",
            "price": "1470",
            "discount": "10",
            "description": "Coral peach short kurta with applique cut-out mesh flower details and matching wide-leg pants."
        },
        {
            "id": "4-4",
            "tag": "LH04-4/ALL",
            "badge": "In Stock",
            "image": "item.4.4.webp",
            "product": "Lavender Mesh Applique Set",
            "material": "Cotton Linen Blend",
            "category": "tunic + pants",
            "price": "1470",
            "discount": "10",
            "description": "Light lavender short kurta with applique cut-out mesh flower details and matching wide-leg pants."
        },
    ];

    const d2g5 = [
        {
            "id": "5-1",
            "tag": "LH05-1/ALL",
            "badge": "In Stock",
            "image": "item.5.1.webp",
            "product": "Onion Pink Embroidered Set",
            "material": "Textured Khadi Cotton",
            "category": "straight kurta",
            "price": "2200",
            "discount": "10",
            "description": "Dusty onion pink straight kurta featuring delicate hand embroidery on the neckline and sleeves."
        },
        {
            "id": "5-2",
            "tag": "LH05-2/ALL",
            "badge": "In Stock",
            "image": "item.5.2.webp",
            "product": "Mint Green Embroidered Set",
            "material": "Textured Khadi Cotton",
            "category": "straight kurta",
            "price": "2200",
            "discount": "10",
            "description": "Sage mint green straight kurta featuring delicate hand embroidery on the neckline and sleeves."
        },
    ];

    const d2g6 = [
        {
            "id": "6-1",
            "tag": "LH06-1/ALL",
            "badge": "In Stock",
            "image": "item.6.1.webp",
            "product": "Rose Pink Sleeveless Sharara Set",
            "material": "Slub Linen",
            "category": "short kurti + palazzo + dupatta",
            "price": "1410",
            "discount": "10",
            "description": "Rose pink sleeveless short kurti with pocket mirror details, paired with wide palazzo pants and a dupatta."
        },
        {
            "id": "6-2",
            "tag": "LH06-2/ALL",
            "badge": "In Stock",
            "image": "item.6.2.webp",
            "product": "Peach Sleeveless Sharara Set",
            "material": "Slub Linen",
            "category": "short kurti + palazzo + dupatta",
            "price": "1410",
            "discount": "10",
            "description": "Peach/baby pink sleeveless short kurti with pocket mirror details, paired with wide palazzo pants and a dupatta."
        },
        {
            "id": "6-3",
            "tag": "LH06-3/ALL",
            "badge": "In Stock",
            "image": "item.6.3.webp",
            "product": "Ivory Sleeveless Sharara Set",
            "material": "Slub Linen",
            "category": "short kurti + palazzo + dupatta",
            "price": "1410",
            "discount": "10",
            "description": "Ivory white sleeveless short kurti with pocket mirror details, paired with wide palazzo pants and a dupatta."
        },
    ];

    const d3g1 = [
        {
            "id": "7-1",
            "tag": "LH07-1/ALL",
            "badge": "In Stock",
            "image": "item.7.1.webp",
            "product": "Olive Embroidered Straight Kurta",
            "material": "Cotton Blend",
            "category": "standard kurta",
            "price": "325",
            "discount": "10",
            "description": "Elegant olive-green straight kurta featuring white floral embroidery on the neckline and scattered embroidered motifs."
        },
        {
            "id": "7-2",
            "tag": "LH07-2/ALL",
            "badge": "In Stock",
            "image": "item.7.2.webp",
            "product": "Wine red Embroidered Straight Kurta",
            "material": "Cotton Blend",
            "category": "standard kurta",
            "price": "325",
            "discount": "10",
            "description": "Elegant wine-red straight kurta featuring white floral embroidery on the neckline and scattered embroidered motifs."
        },
        {
            "id": "7-3",
            "tag": "LH07-3/ALL",
            "badge": "In Stock",
            "image": "item.7.3.webp",
            "product": "Jet Black Embroidered Straight Kurta",
            "material": "Cotton Blend",
            "category": "standard kurta",
            "price": "325",
            "discount": "10",
            "description": "Elegant jet-black straight kurta featuring white floral embroidery on the neckline and scattered embroidered motifs."
        },
        {
            "id": "7-4",
            "tag": "LH07-4/ALL",
            "badge": "In Stock",
            "image": "item.7.4.webp",
            "product": "Midnight Blue Embroidered Straight Kurta",
            "material": "Cotton Blend",
            "category": "standard kurta",
            "price": "325",
            "discount": "10",
            "description": "Elegant midnight-blue straight kurta featuring white floral embroidery on the neckline and scattered embroidered motifs."
        },
        {
            "id": "7-5",
            "tag": "LH07-5/ALL",
            "badge": "In Stock",
            "image": "item.7.5.webp",
            "product": "Deep Plum Embroidered Straight Kurta",
            "material": "Cotton Blend",
            "category": "standard kurta",
            "price": "325",
            "discount": "10",
            "description": "Elegant deep-plum straight kurta featuring white floral embroidery on the neckline and scattered embroidered motifs."
        },
        {
            "id": "7-6",
            "tag": "LH07-6/ALL",
            "badge": "In Stock",
            "image": "item.7.6.webp",
            "product": "Mustard Gold Embroidered Straight Kurta",
            "material": "Cotton Blend",
            "category": "standard kurta",
            "price": "325",
            "discount": "10",
            "description": "Elegant mustard gold straight kurta featuring white floral embroidery on the neckline and scattered embroidered motifs."
        },
        {
            "id": "7-7",
            "tag": "LH07-7/ALL",
            "badge": "In Stock",
            "image": "item.7.7.webp",
            "product": "Olive Mustard Embroidered Straight Kurta",
            "material": "Cotton Blend",
            "category": "standard kurta",
            "price": "325",
            "discount": "10",
            "description": "Elegant olive-mustard straight kurta featuring white floral embroidery on the neckline and scattered embroidered motifs."
        },
    ];

    const d3g2 = [
        {
            "id": "8-1",
            "tag": "LH08-1/ALL",
            "badge": "In Stock",
            "image": "item.8.1.webp",
            "product": "Purple Embroidered Suit Set",
            "material": "Cotton Blend",
            "category": "explicit suit set",
            "price": "780",
            "discount": "10",
            "description": "Rich purple three-piece suit set with intricate floral embroidery on the neckline, matching trousers, and an embroidered dupatta with decorative borders."
        },
        {
            "id": "8-2",
            "tag": "LH08-2/ALL",
            "badge": "In Stock",
            "image": "item.8.2.webp",
            "product": "Dusty Teal Embroidered Suit Set",
            "material": "Cotton Blend",
            "category": "explicit suit set",
            "price": "780",
            "discount": "10",
            "description": "Dusty teal three-piece suit set with intricate floral embroidery on the neckline, matching trousers, and an embroidered dupatta with decorative borders."
        },
        {
            "id": "8-3",
            "tag": "LH08-3/ALL",
            "badge": "In Stock",
            "image": "item.8.3.webp",
            "product": "Deep Maroon Embroidered Suit Set",
            "material": "Cotton Blend",
            "category": "explicit suit set",
            "price": "780",
            "discount": "10",
            "description": "Deep maroon three-piece suit set with intricate floral embroidery on the neckline, matching trousers, and an embroidered dupatta with decorative borders."
        },
        {
            "id": "8-4",
            "tag": "LH08-4/ALL",
            "badge": "In Stock",
            "image": "item.8.4.webp",
            "product": "Navy Blue Embroidered Suit Set",
            "material": "Cotton Blend",
            "category": "explicit suit set",
            "price": "780",
            "discount": "10",
            "description": "Navy blue three-piece suit set with intricate floral embroidery on the neckline, matching trousers, and an embroidered dupatta with decorative borders."
        },
        {
            "id": "8-5",
            "tag": "LH08-5/ALL",
            "badge": "In Stock",
            "image": "item.8.5.webp",
            "product": "Rusty Red Embroidered Suit Set",
            "material": "Cotton Blend",
            "category": "explicit suit set",
            "price": "780",
            "discount": "10",
            "description": "Rusty red three-piece suit set with intricate floral embroidery on the neckline, matching trousers, and an embroidered dupatta with decorative borders."
        },
        {
            "id": "8-6",
            "tag": "LH08-6/ALL",
            "badge": "In Stock",
            "image": "item.8.6.webp",
            "product": "Deep Crimson Embroidered Suit Set",
            "material": "Cotton Blend",
            "category": "explicit suit set",
            "price": "780",
            "discount": "10",
            "description": "Deep crimson three-piece suit set with intricate floral embroidery on the neckline, matching trousers, and an embroidered dupatta with decorative borders."
        },
        {
            "id": "8-7",
            "tag": "LH08-7/ALL",
            "badge": "In Stock",
            "image": "item.8.7.webp",
            "product": "Moss Geen Embroidered Suit Set",
            "material": "Cotton Blend",
            "category": "explicit suit set",
            "price": "780",
            "discount": "10",
            "description": "Moss green three-piece suit set with intricate floral embroidery on the neckline, matching trousers, and an embroidered dupatta with decorative borders."
        },
    ];

    const d3g3 = [
        {
            "id": "9-1",
            "tag": "LH09-1/ALL",
            "badge": "In Stock",
            "image": "item.9.1.webp",
            "product": "Plum Peacock Embroidered Suit Set",
            "material": "Cotton Blend",
            "category": "explicit suit set",
            "price": "550",
            "discount": "10",
            "description": "Elegant plum-colored straight-cut kurta featuring intricate peacock embroidery on the yoke, paired with matching straight pants. Ideal for festive gatherings and casual ethnic wear."
        },
        {
            "id": "9-2",
            "tag": "LH09-2/ALL",
            "badge": "In Stock",
            "image": "item.9.2.webp",
            "product": "Teal Heritage Embroidered Suit Set",
            "material": "Cotton Blend",
            "category": "explicit suit set",
            "price": "550",
            "discount": "10",
            "description": "Sophisticated teal suit set adorned with heritage-inspired embroidery featuring traditional motifs on the yoke, complemented by matching straight-fit pants for a refined ethnic look."
        },
    ];

    const d3g4 = [
        { //16
            "id": "10-1",
            "tag": "LH010-1/ALL",
            "badge": "In Stock",
            "image": "item.10.1.webp",
            "product": "Sage Floral Kurta Palazzo Set",
            "material": "Cotton Blend",
            "category": "kurta + palazzo + dupatta",
            "price": "1630",
            "discount": "10",
            "description": "Sage green kurta palazzo set featuring large white floral prints with subtle gold accents. Comes with matching palazzo pants and dupatta for an elegant ethnic look."
        },
        { //17
            "id": "10-2",
            "tag": "LH010-2/ALL",
            "badge": "In Stock",
            "image": "item.10.2.webp",
            "product": "Mustard Floral Kurta Palazzo Set",
            "material": "Cotton Blend",
            "category": "kurta + palazzo + dupatta",
            "price": "1630",
            "discount": "10",
            "description": "Mustard yellow kurta palazzo set adorned with oversized white floral motifs and delicate botanical detailing. Includes matching palazzo pants and lightweight dupatta."
        },
    ];

    const dataSet = [
        {
            "id": "1",
            "type": "tall",
            "slider": false,
            "items": d1g1,
        },
        {
            "id": "2",
            "type": "wide",
            "slider": true,
            "items": [
                d2g1,
                d2g2,
                d2g3,
                d2g4,
                d2g5,
                d2g6,
            ],
        },
        {
            "id": "3",
            "type": "tall",
            "slider": true,
            "items": [
                d3g1,
                d3g2,
                d3g3,
                d3g4,
            ],
        },
        {
            "id": "4",
            "type": "tall",
            "slider": false,
            "items": d1g2,
        },
    ];

    const cf = new Intl.NumberFormat(undefined, {
        style: "currency", currency: "INR"
    });

    function buildItems(data) {
        return data.map(item => {
            let prices = `<span class="price-current">₹${item.price}/-</span>`;
            if ((+item.discount) > 0) {
                prices = `
                <span class="price-current">${cf.format(item.price)}/-</span>
                <span class="price-original">${cf.format(item.price * (1 + item.discount / 100))}</span>
                <span class="price-discount">${item.discount} OFF</span>
                `;
            }
            let badgeClass = "product-card-badge";
            if (String(item.badge).toLowerCase().includes("out")) {
                badgeClass += " product-card-badge-oos";
            }
            return `
            <div class="product-card" data-category="${item.category}">
                <div class="product-card-img">
                    <img src="items/${item.image}" alt="${item.product} (${item.tag})" loading="lazy">
                </div>
                <div class="product-card-details">
                    <span class="${badgeClass}">${item.badge}</span>
                    <span class="product-card-id">#${item.tag}</span>
                    <h3 class="product-card-title">${item.product}</h3>
                    <span class="product-card-material">${item.material}</span>
                    <p class="product-card-desc">${item.description}</p>
                    <div class="price-container">${prices}</div>
                    <a href="https://wa.me/919033310101?text=Hi Label Harsha, I am interested in inquiring about the '${item.product} (${item.tag})'. Could you please share more details." target="_blank" class="btn-whatsapp">
                        <img src="icons/whatsapp.svg" alt="WhatsApp">
                    </a>
                </div>
            </div>`;
        }).join("");
    }

    return {
        populate: () => {
            dataSet.forEach(set => {
                let content = "";
                if (set.slider) {
                    content = set.items.map(group => {
                        return `<div class="slider"><div class="slides">
                            ${buildItems(group)}
                        </div></div>`;
                    }).join("");
                } else {
                    content = buildItems(set.items);
                }
                root.innerHTML += `
                <div id="product-card-container-${set.type}" class="product-grid-${set.type}">
                    ${content}
                </div><div style="height: 35px;"></div>`;
            });
        },
    };
})(root);

Inventory.Theme = (() => {
    const sunIcon = document.getElementById("theme-sun-icon");
    const moonIcon = document.getElementById("theme-moon-icon");
    const themeToggleText = document.getElementById("theme-toggle-text");

    // Initialize theme settings on load
    function initTheme() {
        // Check local storage or system preference
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "theme-light" || (!savedTheme && !prefersDark)) {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    }

    function setLightTheme() {
        document.documentElement.className = "theme-light";
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
        if (themeToggleText) themeToggleText.textContent = "Dark Mode";
        localStorage.setItem("theme", "theme-light");
    }

    function setDarkTheme() {
        document.documentElement.className = "theme-dark";
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
        if (themeToggleText) themeToggleText.textContent = "Light Mode";
        localStorage.setItem("theme", "theme-dark");
    }

    return {
        init: () => initTheme(),
        handler: () => {
            if (document.documentElement.classList.contains("theme-dark")) {
                setLightTheme();
            } else {
                setDarkTheme();
            }
        }
    };
})();

// Navigation Logic for Mobile Hamburger Menu
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Toggle menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (useful for single-page navigation)
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Back to top scroll listener
window.addEventListener("scroll", (_) => {
    const backToTopBtn = document.getElementById("back-to-top");
    if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

// Init on page load
window.addEventListener("DOMContentLoaded", (_) => {
    Inventory.Theme.init();
    root.innerHTML = "";
    Inventory.Catalog.populate();
});

// Theme Toggle Elements
document.getElementById("theme-toggle").addEventListener('click', (_) => {
    Inventory.Theme.handler();
});

// Define which "raw" data categories belong to which "UI" category
const categoryMap = {
    'kurta_set': [
        'kurta + pants (set)', 'kurta set', 'kurta + trousers (set)',
        'kurta + trousers', 'kurta + palazzo + dupatta', 'kurta + pants + dupatta',
        'kurta + palazzo + dupatta', 'kurta + trousers + dupatta', 'silk kurta set',
        'suit set', 'explicit suit set', 'standard kurta'
    ],
    'tunic_kaftan': [
        'tunic/kaftan', 'co-ord tunic', 'poncho/tunic + palazzo',
        'tunic + pants', 'short kurti + palazzo + dupatta'
    ],
    'co_ord': [
        'co-ord set/gown style', 'long kurta/gown style', 'tunic + pants (co-ord)'
    ],
    'single_kurta': [
        'single kurta', 'short kurta', 'straight kurta'
    ],
    'special': [
        'silk kurta', 'silk kurta set'
    ],
};

// Menu dynamic category filter, direct reference in html code.
function filterCatalog(category, element) {
    // Update active button UI
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    // Toggle element card visibility based on data attributes
    const cards = document.querySelectorAll(".product-card");
    cards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        card.style.opacity = "0";
        card.style.transform = "translateY(10px)";

        setTimeout(() => {
            if (category === "all" || categoryMap[category].includes(cardCategory)) {
                card.style.display = "flex";
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 50);
            } else {
                card.style.display = "none";
            }
        }, 200);
    });
}
