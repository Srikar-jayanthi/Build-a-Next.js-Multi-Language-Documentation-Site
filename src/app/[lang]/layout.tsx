import Header from '@/components/Header';

export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {children}
        </div>
    );
}
