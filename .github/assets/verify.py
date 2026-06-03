import re
import urllib.parse

def verify():
    with open('/home/mitul/Developer/github/labelharsha/pages/index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all product-card blocks
    # A block starts with <!-- Item X -->
    pattern = re.compile(r'<!-- Item (\d+) -->\s*<div class="product-card[^"]*" id="product-card-(\d+)" data-category="([^"]+)">.*?<img id="product-card-img-(\d+)" src="items/item(\d+)\.webp" alt="([^"]+)">.*?<span class="product-card-id" id="product-card-id-\d+">#LH-(\d+)</span>\s*<h3 class="product-card-title" id="card-title-item-\d+">([^<]+)</h3>.*?href="https://wa\.me/919033310101\?text=([^"]+)"', re.DOTALL)

    matches = pattern.findall(content)
    print(f"Found {len(matches)} item cards.")

    errors = []

    for match in matches:
        comment_id = int(match[0])
        card_id = int(match[1])
        category = match[2]
        img_id = int(match[3])
        img_src = int(match[4])
        alt = match[5]
        code = int(match[6])
        title = match[7]
        whatsapp_url = match[8]

        # Check alignment of IDs
        if not (comment_id == card_id == img_id == img_src == code-100):
            errors.append(f"Mismatch in IDs for Item {comment_id}: card_id={card_id}, img_id={img_id}, img_src={img_src}, code=LH-{code}")

        # Check that title matches alt text
        if alt != title:
            errors.append(f"Mismatch in text for Item {comment_id}: alt='{alt}' vs title='{title}'")

        # Check WhatsApp text url-encoded contents
        decoded_text = urllib.parse.unquote(whatsapp_url)
        # Expected phrase: Hi Label Harsha, I am interested in inquiring about the 'Title (LH-Code)'. Could you please share more details?
        expected_phrase = f"Hi Label Harsha, I am interested in inquiring about the '{title} (LH-{code})'. Could you please share more details?"
        if decoded_text != expected_phrase:
            errors.append(f"WhatsApp text mismatch for Item {comment_id}:\nExpected: {expected_phrase}\nGot:      {decoded_text}")

        # Check category is valid
        if category not in ['kurtas', 'sarees', 'tunics', 'gowns']:
            errors.append(f"Invalid category '{category}' for Item {comment_id}")

    if errors:
        print(f"Verification failed with {len(errors)} errors:")
        for err in errors:
            print("-", err)
    else:
        print("Verification passed successfully! All 33 items are structurally and semantically valid.")

if __name__ == '__main__':
    verify()
