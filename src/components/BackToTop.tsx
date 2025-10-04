import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { scrollToSection } from "@/lib/scrollToSection";

const SCROLL_THRESHOLD = 300; // px from top before showing the button

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const homeEl = typeof document !== "undefined" ? document.getElementById("home") : null;
    if (homeEl) {
      scrollToSection("home");
    } else {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="primary"
        size="icon"
        aria-label="Back to top"
        className="rounded-full shadow-glow border-2 border-black"
        onClick={handleClick}
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default BackToTop;