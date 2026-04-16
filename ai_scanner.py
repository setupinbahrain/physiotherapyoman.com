import os
import re

ai_keywords = [
    "delve", "tapestry", "seamlessly", "robust", "meticulous", "crucial",
    "paramount", "leverage", "optimize", "unleash", "elevate", "cutting-edge",
    "landscape", "realm", "dynamic", "moreover", "furthermore", "testament",
    "nuance", "catalyst", "paradigm", "embodiment", "embark", "journey",
    "ensure", "tailored", "pivotal", "multifaceted", "synergy", "foster",
    "empower", "unlock", "harness", "bespoke", "transformative", "revolutionary",
    "in today's", "in the digital age", "vital", "demystify", "at the intersection",
    "intricate", "navigate", "redefine"
]

files_scanned = 0
matches_found = 0

print("Commencing Site-Wide AI Footprint Audit...")

def scan_directory(directory):
    global files_scanned, matches_found
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.ts', '.tsx', '.json', '.md')):
                filepath = os.path.join(root, file)
                # Skip the built folders and node_modules
                if 'node_modules' in filepath or '.next' in filepath or 'seo_pages_wordcount' in filepath:
                    continue
                
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read().lower()
                        files_scanned += 1
                        
                        for kwd in ai_keywords:
                            # Use regex word boundaries to prevent catching partial matched words like "ensure" inside "reassures"
                            pattern = r'\b' + re.escape(kwd.lower()) + r'\b'
                            found = re.findall(pattern, content)
                            if found:
                                matches_found += len(found)
                                print(f"WARNING [AI PATTERN DETECTED] -> File: {filepath} | Keyword: '{kwd}' | Occurrences: {len(found)}")
                                
                except Exception as e:
                    pass

scan_directory('./app')
scan_directory('./lib')

print(f"\nAudit Complete.")
print(f"Total Files Deep-Scanned: {files_scanned}")
print(f"Total AI Footprint Flags: {matches_found}")
