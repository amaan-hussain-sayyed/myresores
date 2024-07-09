import * as React from 'react';
import { Html, Button,Head,Body,Markdown } from "@react-email/components";

export function Email(props:any) {
  const { url ,resone,to} = props;

    return (
        <Html lang="en"> 
            <Markdown
              
            />
       </Html>
        
  );
}