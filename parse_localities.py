import re
import json

output_names = []
try:
    with open('oman_localities.txt', 'r', encoding='utf-8') as f:
        content = f.read()
        
    lines = content.split('\n')
    
    # Simple state machine to catch names that follow numbers and precede types like 'Town', 'Village', 'Hamlet', 'Small hamlet'
    valid_types = {'Town', 'Village', 'Hamlet', 'Small hamlet', 'City'}
    
    localities = set()
    for i in range(len(lines)):
        # If current line is a type and previous previous is a number, the name is in between
        if lines[i].strip() in valid_types:
            if i >= 2 and lines[i-2].strip().isdigit():
                # Extract locality and strip trailing spaces or arabic chars if needed
                name = lines[i-1].strip()
                if len(name) > 1 and name not in localities:
                    localities.add(name)
                    output_names.append(name)
                    
    with open('parsed_cities.json', 'w') as f:
        json.dump(output_names, f)
        
    print(f"Successfully extracted {len(output_names)} unique localities.")
except Exception as e:
    print(f"Error: {e}")
