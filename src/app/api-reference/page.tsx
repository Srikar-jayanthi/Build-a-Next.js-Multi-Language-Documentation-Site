"use client";

import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

export default function ApiReferencePage() {
    return (
        <div className="p-4 bg-white dark:bg-gray-100 min-h-screen">
            <SwaggerUI url="/openapi.json" />
        </div>
    );
}
