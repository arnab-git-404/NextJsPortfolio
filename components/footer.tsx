import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-8  rounded-t-4xl glass">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Arnab Mukherjee. All rights reserved.
                    </p>
                    <p className="text-muted-foreground text-sm flex items-center gap-2">
                        Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using Next.js & shadcn/ui
                    </p>
                </div>
            </div>
        </footer>
    );
}
