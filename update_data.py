import json
import re

# Load raw names
try:
    with open('parsed_cities.json', 'r') as f:
        raw_cities = json.load(f)
except Exception as e:
    print(f"Error loading JSON: {e}")
    exit(1)

# Clean and format for URLs
cleaned_cities = set()
for city in raw_cities:
    # Lowercase, replace spaces with hyphens, remove special characters using regex
    slug = city.lower().strip()
    slug = re.sub(r'[^a-z0-9\s-]', '', slug)
    slug = re.sub(r'\s+', '-', slug)
    if len(slug) > 1:
        cleaned_cities.add(slug)

clean_list = list(cleaned_cities)
clean_list.sort()

# Reconstruct lib/data.ts string
ts_content = f"""// Massive scale 1,900+ Locality Omani Database
export const cities = {json.dumps(clean_list, indent=2)};

export const services = [
  'sports-physiotherapy', 'back-pain-physiotherapy', 'neck-pain-physiotherapy',
  'knee-physiotherapy', 'shoulder-physiotherapy', 'post-surgery-rehabilitation',
  'neurological-physiotherapy', 'pediatric-physiotherapy', 'geriatric-physiotherapy',
  'physiotherapy-at-home'
];

export const conditions = [
  'sciatica', 'tennis-elbow', 'frozen-shoulder', 'slip-disc', 'plantar-fasciitis',
  'acl-tear-recovery', 'carpal-tunnel', 'osteoarthritis', 'rotator-cuff-injury', 'whiplash'
];

export const techniques = [
  'dry-needling', 'shockwave-therapy', 'cupping-therapy', 'manual-therapy',
  'kinesio-taping', 'electrotherapy', 'laser-therapy', 'ultrasound', 'acupuncture'
];
"""

with open('lib/data.ts', 'w') as f:
    f.write(ts_content)

print(f"lib/data.ts successfully overwritten with {len(clean_list)} unique URL-safe city slugs!")
