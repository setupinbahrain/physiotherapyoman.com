import React from 'react';

interface SchemaInjectorProps {
  schemas: Record<string, any>[];
}

export function SchemaInjector({ schemas }: SchemaInjectorProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
